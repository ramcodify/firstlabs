# The First Labs — Security, Anti-Abuse & DDoS Defense Architecture

This document specifies the multi-layered security and Denial-of-Service (DDoS) defense architecture implemented for **The First Labs** website (https://www.thefirstlabs.live/).

---

## 1. Application-Level Defenses (Implemented in Codebase)

### A. Anti-Bot Honeypot Trap
- **Mechanism**: An invisible input field (`hp_validation_trap`) is placed within the direct contact form.
- **Behavior**: Hidden from human sight and accessibility tree via `aria-hidden="true"`, `tabIndex={-1}`, and 0px absolute positioning.
- **Protection**: Automated spam bots and scrapers that blindly populate all inputs are trapped. If populated, the submission is rejected immediately without executing any computational or email dispatch work.

### B. Submission Velocity / Time-to-Fill Heuristics
- **Mechanism**: The form tracks exact timestamp of initial mounting (`formRenderTimeRef`).
- **Protection**: Submissions received in under 2.5 seconds are flagged as automated headless scripts and blocked with an error prompt.

### C. Client-Side Token Bucket Rate Limiting
- **Mechanism**: The browser session maintains a rolling window in `localStorage` (`tfl_contact_rate_limit`).
- **Limit**: Maximum 3 contact submissions per 10-minute window.
- **Protection**: Prevents client-side form flooding, memory exhaustion, and spam scripts from hammering contact channels.
- **Cooldown Timer**: Enforces a 15-second visual cooldown between consecutive valid attempts.

### D. Input Boundary Clamping & Sanitization
- **Name**: Max 80 characters, sanitized of HTML/script tags.
- **Email**: Strict RFC 5322 regex validation, max 120 characters.
- **Message**: Min 10 characters, capped at 2,000 characters to prevent memory buffer overflow.
- **Search Query Clamping**: In-document legal searches are length-bounded to prevent CPU spikes.

### E. Clickjacking & Frame-Busting Defense
- **Inline Script in `index.html`**:
  ```javascript
  if (self === top) {
    /* Normal top-level rendering */
  } else {
    top.location = self.location;
  }
  ```
- **Result**: Protects against UI redressing attacks where an attacker embeds the site in an invisible iframe to hijack user clicks.

---

## 2. HTTP Security Headers (`public/_headers`)

Configured for native deployment on Cloudflare Pages, Netlify, or Vercel:

| Header | Value | Purpose |
| :--- | :--- | :--- |
| **`X-Frame-Options`** | `DENY` | Completely blocks rendering within foreign iframes. |
| **`X-Content-Type-Options`** | `nosniff` | Prevents browsers from MIME-sniffing away from declared content type. |
| **`Referrer-Policy`** | `strict-origin-when-cross-origin` | Protects URL parameters and paths from leaking to third parties. |
| **`Permissions-Policy`** | `camera=(), microphone=(), geolocation=(), payment=()` | Disables access to sensitive hardware and browser APIs. |
| **`Content-Security-Policy`** | Restrictive script/font/connect origin whitelist | Mitigates Cross-Site Scripting (XSS) and unauthorized script injection. |
| **`Cache-Control`** | `public, max-age=31536000, immutable` | Caches static assets at CDN edge, deflecting traffic spikes away from origin. |

---

## 3. Crawler & Scraping Controls (`public/robots.txt`)

- **Crawl-Delay**: Configured to `5` seconds to prevent crawler storms from overloading client bandwidth.
- **Aggressive Bot Blocks**: Disallows aggressive commercial scrapers like `PetalBot` and `Bytespider` while permitting search engines (Googlebot, Bingbot).

---

## 4. Cloudflare Edge DDoS Mitigation (Recommended Production Setup)

The production domain `www.thefirstlabs.live` is hosted on Cloudflare. The following Cloudflare settings provide carrier-grade Layer 3/4/7 DDoS mitigation:

1. **Proxy Status (Orange Cloud)**:
   - Ensure DNS A/CNAME records have the Cloudflare Proxy enabled.
   - Hides origin server IP address to prevent direct IP-based volumetric UDP/SYN flood attacks.
2. **Cloudflare "Under Attack" Mode**:
   - In the event of an active volumetric attack, enable **Under Attack Mode** in the Cloudflare dashboard.
   - Enforces managed cryptographic JS challenges to all incoming visitors before reaching the web server.
3. **Bot Fight Mode**:
   - Navigate to **Security &rarr; Bots &rarr; Bot Fight Mode** &rarr; Toggle **On**.
   - Automatically challenges and blocks known malicious bot signatures.
4. **WAF Custom Rate Limiting Rule**:
   - URL path: `/`
   - Threshold: 50 requests per 10 seconds per IP
   - Action: Managed Challenge (Cloudflare Turnstile)
5. **SSL/TLS Encryption**:
   - Set to **Full (Strict)** to ensure end-to-end encrypted transport.
