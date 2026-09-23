# The First Labs — Independent Product Studio

> Independent products for work, learning, and everyday life.

Website: [https://www.thefirstlabs.live/](https://www.thefirstlabs.live/)

The First Labs is an independent product studio based in Mumbai. We build native Android software and applied intelligence tools focused on removing friction from daily human workflows.

---

## Products in Market

| Product | Focus | Architecture | Status |
| :--- | :--- | :--- | :--- |
| **FirstHire** (Flagship) | AI-powered tech job search & 1-click ATS resume tailoring | 768-dim embeddings, in-memory filtering, Jetpack Compose | [Google Play](https://play.google.com/store/apps/details?id=com.remedez.firsthire) |
| **CopyShelf** | Edge-panel persistent clipboard utility | 100% Offline-first, SQLCipher Room DB, sensitive data masking | [Google Play](https://play.google.com/store/apps/details?id=com.remedez.copyshelf) |
| **Gym Timer** | Minimalist workout consistency tracker | One-tap logging, annual activity heatmap, zero telemetry bloat | [Google Play](https://play.google.com/store/apps/details?id=com.kragma.gymtimer) |

---

## Technology Stack

- **Client Runtime**: React 18, TypeScript, Vite
- **Styling & Design System**: Tailwind CSS with custom editorial design tokens (Warm off-white `#F7F6F2`, deep charcoal `#171717`, muted indigo `#3446A8`, warm amber `#C79545`, dark `#151515`)
- **Typography Pairing**: `Instrument Serif` (editorial display) + `Plus Jakarta Sans` (interface & body) + `JetBrains Mono` (metrics & specs)
- **Icons**: Lucide React
- **Security & DDoS Defenses**: Client-side rate limiting, anti-bot honeypots, velocity checks, CSP, frame-busting anti-clickjacking, and Cloudflare WAF integration

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/ramcodify/firstlabs.git
cd firstlabs

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Security & Anti-Abuse Defenses

See [`SECURITY_AND_DDOS.md`](./SECURITY_AND_DDOS.md) for full details on:
- Multi-layer form rate-limiting and anti-bot honeypots
- HTTP security headers (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, strict CSP)
- Cloudflare WAF, Bot Fight Mode, and Turnstile integration

---

## License & Copyright

&copy; 2026 The First Labs. All rights reserved.
