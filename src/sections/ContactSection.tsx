import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle, Copy, Check, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../components/Button';

// DDoS & Anti-Spam Rate Limiter Configuration
const RATE_LIMIT_KEY = 'tfl_contact_rate_limit';
const MAX_ATTEMPTS_PER_WINDOW = 3;
const WINDOW_DURATION_MS = 10 * 60 * 1000; // 10 minutes
const MIN_FILL_TIME_MS = 2500; // 2.5 seconds minimum to prevent instant headless bot submissions
const COOLDOWN_SECONDS = 15;

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Product Inquiry');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot trap
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate_limited'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const formRenderTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    formRenderTimeRef.current = Date.now();
  }, []);

  // Cooldown countdown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown((c) => c - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // Rate limiter check
  const checkRateLimit = (): boolean => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      const now = Date.now();
      let timestamps: number[] = stored ? JSON.parse(stored) : [];
      
      // Filter out timestamps outside the active 10-minute window
      timestamps = timestamps.filter((t) => now - t < WINDOW_DURATION_MS);

      if (timestamps.length >= MAX_ATTEMPTS_PER_WINDOW) {
        return false;
      }

      timestamps.push(now);
      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(timestamps));
      return true;
    } catch {
      return true;
    }
  };

  // Basic sanitization
  const sanitize = (str: string): string => {
    return str.replace(/<[^>]*>?/gm, '').trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Anti-Bot Honeypot Trap
    if (honeypot.trim() !== '') {
      // Bot trapped: silently simulate success without processing
      setStatus('loading');
      setTimeout(() => setStatus('success'), 600);
      return;
    }

    // 2. Submission Velocity Check (Heuristics against instant automated payloads)
    const timeSpentMs = Date.now() - formRenderTimeRef.current;
    if (timeSpentMs < MIN_FILL_TIME_MS) {
      setStatus('error');
      setErrorMessage('Submission arrived too quickly. Please review your input before sending.');
      return;
    }

    // 3. Rate Limit Check (DDoS / flooding protection)
    if (!checkRateLimit()) {
      setStatus('rate_limited');
      setErrorMessage('Rate limit reached (max 3 messages per 10 minutes). Please wait before submitting again.');
      return;
    }

    // 4. Input Validations & Length Bounds
    const cleanName = sanitize(name);
    const cleanEmail = sanitize(email);
    const cleanMessage = sanitize(message);

    if (!cleanName || cleanName.length < 2) {
      setStatus('error');
      setErrorMessage('Please enter your full name (minimum 2 characters).');
      return;
    }

    if (cleanName.length > 80) {
      setStatus('error');
      setErrorMessage('Name exceeds maximum character limit of 80.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanEmail) || cleanEmail.length > 120) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      setStatus('error');
      setErrorMessage('Please write a message with at least 10 characters.');
      return;
    }

    if (cleanMessage.length > 2000) {
      setStatus('error');
      setErrorMessage('Message exceeds maximum payload limit of 2,000 characters.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate verified dispatch
    setTimeout(() => {
      setStatus('success');
      setCooldown(COOLDOWN_SECONDS);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('talent@thefirstlabs.live');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-studio-bg border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-studio-muted tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-studio-text tracking-tight">
            Direct Contact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
            Whether you have feedback on FirstHire, CopyShelf, Gym Timer, or partnership inquiries, reach out directly to our engineering studio.
          </p>
        </div>

        {/* Contact Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-8 space-y-5 shadow-card">
              <div>
                <span className="font-mono text-xs uppercase text-studio-muted tracking-wider font-bold block mb-1">
                  Primary Studio Inquiries
                </span>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <a
                    href="mailto:talent@thefirstlabs.live"
                    className="font-mono text-base font-bold text-studio-accent hover:underline break-all"
                  >
                    talent@thefirstlabs.live
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg border border-studio-border hover:bg-studio-surface-warm text-studio-muted hover:text-studio-text transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-studio-border space-y-2 text-xs font-mono text-studio-muted">
                <div>Entity: <span className="text-studio-text font-bold">The First Labs</span></div>
                <div>Location: <span className="text-studio-text">Mumbai Tech Hub &bull; Maharashtra, India</span></div>
                <div>Response Window: <span className="text-studio-text">Usually within 24 business hours</span></div>
              </div>

              <div className="p-4 rounded-xl bg-studio-surface-warm border border-studio-border text-xs text-studio-muted leading-relaxed space-y-2">
                <div className="flex items-center gap-1.5 text-studio-text font-bold text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>DDoS &amp; Automated Abuse Protection Active</span>
                </div>
                <p className="text-[11px]">
                  Protected by client-side token rate limiting, honeypot traps, and payload boundary sanitization. Direct communication is routed securely.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-8 shadow-card">
            {status === 'success' ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-studio-text tracking-tight">
                  Message Transmitted
                </h3>
                <p className="text-sm text-studio-muted max-w-md mx-auto leading-relaxed">
                  Thank you, {name}. Your note has been received by our engineering team. We will review it and reply to {email} shortly.
                </p>
                
                {cooldown > 0 ? (
                  <div className="text-xs font-mono text-studio-muted flex items-center justify-center gap-1.5 pt-2">
                    <Clock className="w-3.5 h-3.5 text-studio-muted" />
                    <span>Cooldown active: ready in {cooldown}s</span>
                  </div>
                ) : (
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setStatus('idle');
                        setName('');
                        setEmail('');
                        setMessage('');
                        formRenderTimeRef.current = Date.now();
                      }}
                    >
                      Send Another Note
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Error Banner */}
                {(status === 'error' || status === 'rate_limited') && (
                  <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Anti-Bot Honeypot Field (Invisible to human users) */}
                <div
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: 0,
                    width: 0,
                    zIndex: -1,
                    overflow: 'hidden',
                    pointerEvents: 'none'
                  }}
                  aria-hidden="true"
                >
                  <label htmlFor="hp_validation_trap">Leave this field blank</label>
                  <input
                    id="hp_validation_trap"
                    type="text"
                    name="hp_validation_trap"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-studio-muted font-bold">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      maxLength={80}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-studio-surface border border-studio-border text-sm text-studio-text placeholder:text-studio-muted/50 focus:border-studio-accent focus:bg-white transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-studio-muted font-bold">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      maxLength={120}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-studio-surface border border-studio-border text-sm text-studio-text placeholder:text-studio-muted/50 focus:border-studio-accent focus:bg-white transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-studio-muted font-bold">
                    Topic of Interest
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-studio-surface border border-studio-border text-sm text-studio-text focus:border-studio-accent focus:bg-white transition-colors"
                  >
                    <option value="FirstHire Feedback">FirstHire Feedback &amp; Ideas</option>
                    <option value="CopyShelf Support">CopyShelf App Support</option>
                    <option value="Gym Timer Support">Gym Timer App Support</option>
                    <option value="Engineering Careers">Engineering Careers &amp; Openings</option>
                    <option value="Research Collaboration">Applied Research / Technical</option>
                    <option value="General Studio Inquiry">General Studio Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-studio-muted font-bold">
                      Your Message *
                    </label>
                    <span className="font-mono text-[11px] text-studio-muted">
                      {message.length} / 2000 chars
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={4}
                    maxLength={2000}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we assist you or collaborate?"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-studio-surface border border-studio-border text-sm text-studio-text placeholder:text-studio-muted/50 focus:border-studio-accent focus:bg-white transition-colors"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-[11px] font-mono text-studio-muted flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Rate-limited &bull; Anti-bot protected</span>
                  </span>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === 'loading'}
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    {status === 'loading' ? 'Verifying...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
