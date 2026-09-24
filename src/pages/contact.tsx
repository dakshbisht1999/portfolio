import { useState, type FormEvent } from 'react';
import type React from 'react';
import { motion } from 'motion/react';
import { contact } from '../contents/content';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const iconMap: Record<string, () => React.ReactElement> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
};

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');


  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (subject) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: message || 'New contact form submission' }],
            data: {
              __gd_contact_form_title: 'Contact Dishant Bisht',
              ...(subject ? { 'Subject': subject } : {}),
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : contact.form.errorBody);
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded text-sm font-medium outline-none transition-all duration-150';

  const fieldBg = 'hsl(var(--secondary))';
  const fieldBorder = '1px solid hsl(var(--border))';
  const fieldColor = 'hsl(var(--foreground))';

  return (
    <>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-16 overflow-hidden"
          style={{ background: 'hsl(var(--background))' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.05) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 600,
              height: 300,
              background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: 'hsl(var(--accent))' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' as const }}
            >
              {contact.hero.eyebrow}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-black leading-tight mb-4"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' as const }}
            >
              {contact.hero.headline}
            </motion.h1>
            <motion.p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' as const }}
            >
              {contact.hero.sub}
            </motion.p>
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* ── FORM (3 cols) ───────────────────────────────────────── */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut' as const }}
              >
                <div
                  className="rounded-xl p-8 md:p-10"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                >
                  <h2
                    className="text-xl font-bold mb-7"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    {contact.form.heading}
                  </h2>

                  {status === 'success' ? (
                    <motion.div
                      className="flex flex-col items-center gap-4 py-12 text-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                        style={{
                          background: 'hsl(var(--primary) / 0.15)',
                          border: '1px solid hsl(var(--primary) / 0.4)',
                        }}
                      >
                        ✓
                      </div>
                      <h3
                        className="text-xl font-bold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {contact.form.successHeadline}
                      </h3>
                      <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {contact.form.successBody}
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-2 text-sm font-medium transition-opacity duration-150"
                        style={{ color: 'hsl(var(--primary))' }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                      {/* Honeypot — never included in POST body */}
                      <input
                        type="text"
                        name="_gotcha"
                        tabIndex={-1}
                        autoComplete="off"
                        style={{ position: 'absolute', left: '-9999px' }}
                        aria-hidden="true"
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="name"
                            className="text-xs font-mono uppercase tracking-widest"
                            style={{ color: 'hsl(var(--muted-foreground))' }}
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder={contact.form.namePlaceholder}
                            className={inputClass}
                            style={{ background: fieldBg, border: fieldBorder, color: fieldColor }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                              e.currentTarget.style.boxShadow = '0 0 0 2px hsl(var(--primary) / 0.15)';
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = 'hsl(var(--border))';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="email"
                            className="text-xs font-mono uppercase tracking-widest"
                            style={{ color: 'hsl(var(--muted-foreground))' }}
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder={contact.form.emailPlaceholder}
                            className={inputClass}
                            style={{ background: fieldBg, border: fieldBorder, color: fieldColor }}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                              e.currentTarget.style.boxShadow = '0 0 0 2px hsl(var(--primary) / 0.15)';
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = 'hsl(var(--border))';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="subject"
                          className="text-xs font-mono uppercase tracking-widest"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder={contact.form.subjectPlaceholder}
                          className={inputClass}
                          style={{ background: fieldBg, border: fieldBorder, color: fieldColor }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                            e.currentTarget.style.boxShadow = '0 0 0 2px hsl(var(--primary) / 0.15)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'hsl(var(--border))';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="message"
                          className="text-xs font-mono uppercase tracking-widest"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          placeholder={contact.form.messagePlaceholder}
                          className={inputClass}
                          style={{ background: fieldBg, border: fieldBorder, color: fieldColor, resize: 'vertical' }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                            e.currentTarget.style.boxShadow = '0 0 0 2px hsl(var(--primary) / 0.15)';
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = 'hsl(var(--border))';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {status === 'error' && (
                        <p
                          role="alert"
                          className="text-sm px-4 py-3 rounded"
                          style={{
                            background: 'hsl(var(--destructive) / 0.1)',
                            color: 'hsl(var(--destructive))',
                            border: '1px solid hsl(var(--destructive) / 0.3)',
                          }}
                        >
                          {errorMsg || contact.form.errorBody}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-3.5 rounded font-semibold text-sm transition-all duration-150 mt-1"
                        style={{
                          background:
                            status === 'sending'
                              ? 'hsl(var(--primary) / 0.6)'
                              : 'hsl(var(--primary))',
                          color: 'hsl(var(--foreground))',
                          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                          boxShadow: status === 'sending' ? 'none' : '0 0 20px hsl(var(--primary) / 0.3)',
                        }}
                        onMouseEnter={(e) => {
                          if (status !== 'sending') e.currentTarget.style.opacity = '0.85';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                      >
                        {status === 'sending' ? contact.form.sendingLabel : contact.form.submitLabel}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* ── SIDEBAR (2 cols) ────────────────────────────────────── */}
              <motion.div
                className="lg:col-span-2 flex flex-col gap-8"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' as const }}
              >
                {/* Availability badge */}
                <div
                  className="rounded-xl p-6 flex flex-col gap-2"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--accent) / 0.35)',
                    boxShadow: '0 0 24px hsl(var(--accent) / 0.06)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: 'hsl(var(--accent))' }}
                    />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      {contact.availability.status}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {contact.availability.detail}
                  </p>
                </div>

                {/* Social links */}
                <div className="flex flex-col gap-4">
                  <p
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {contact.links.headline}
                  </p>
                  <div className="flex flex-col gap-3">
                    {contact.links.items.map((item, i) => {
                      const Icon = iconMap[item.icon] ?? EmailIcon;
                      return (
                        <motion.a
                          key={item.id}
                          href={item.url}
                          target={item.icon !== 'email' ? '_blank' : undefined}
                          rel={item.icon !== 'email' ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 p-4 rounded-xl transition-all duration-150"
                          style={{
                            background: 'hsl(var(--card))',
                            border: '1px solid hsl(var(--border))',
                            textDecoration: 'none',
                          }}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.07, ease: 'easeOut' as const }}
                          whileHover={{
                            borderColor: 'hsl(var(--primary) / 0.5)',
                            y: -2,
                          }}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                            style={{
                              background: 'hsl(var(--primary) / 0.1)',
                              color: 'hsl(var(--primary))',
                            }}
                          >
                            <Icon />
                          </div>
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span
                              className="text-sm font-semibold"
                              style={{ color: 'hsl(var(--foreground))' }}
                            >
                              {item.label}
                            </span>
                            <span
                              className="text-xs font-mono truncate"
                              style={{ color: 'hsl(var(--muted-foreground))' }}
                            >
                              {item.handle}
                            </span>
                          </div>
                          <span
                            className="ml-auto text-lg"
                            style={{ color: 'hsl(var(--primary))' }}
                          >
                            →
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
