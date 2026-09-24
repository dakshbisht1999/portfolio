import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects } from '../contents/content';
import devtinderProjectImg from '@/assets/devtinder-project.png'

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Production: {
    bg: 'hsl(var(--accent) / 0.1)',
    text: 'hsl(var(--accent))',
    border: 'hsl(var(--accent) / 0.35)',
  },
  'In Progress': {
    bg: 'hsl(var(--primary) / 0.1)',
    text: 'hsl(var(--primary))',
    border: 'hsl(var(--primary) / 0.3)',
  },
  'Coming Soon': {
    bg: 'hsl(var(--muted))',
    text: 'hsl(var(--muted-foreground))',
    border: 'hsl(var(--border))',
  },
};

export default function ProjectsPage() {

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
            className="absolute bottom-0 left-0 pointer-events-none"
            style={{
              width: 500,
              height: 300,
              background: 'radial-gradient(ellipse, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
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
              {projects.hero.eyebrow}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-black leading-tight mb-4"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' as const }}
            >
              {projects.hero.headline}
            </motion.h1>
            <motion.p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' as const }}
            >
              {projects.hero.sub}
            </motion.p>
          </div>
        </section>

        {/* ── FEATURED PROJECT ─────────────────────────────────────────── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-xs font-mono uppercase tracking-widest mb-6"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Featured
            </p>
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid hsl(var(--primary) / 0.5)',
                boxShadow: '0 0 60px hsl(var(--primary) / 0.12)',
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left — image */}
                <div
                  className="relative lg:col-span-2 min-h-64 overflow-hidden"
                  style={{ background: 'hsl(var(--secondary))' }}
                >
                  <img
                    src={devtinderProjectImg}
                    alt="devTinder — developer matchmaking app"
                    className="w-full h-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to right, transparent 60%, hsl(var(--card)) 100%)',
                    }}
                  />
                </div>

                {/* Right — info */}
                <div
                  className="lg:col-span-3 p-10 flex flex-col gap-6"
                  style={{ background: 'hsl(var(--card))' }}
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-mono font-bold"
                      style={{
                        background: 'hsl(var(--accent) / 0.12)',
                        color: 'hsl(var(--accent))',
                        border: '1px solid hsl(var(--accent) / 0.35)',
                      }}
                    >
                      {projects.featured.badge}
                    </span>
                  </div>

                  <div>
                    <h2
                      className="text-4xl font-black mb-1"
                      style={{ color: 'hsl(var(--foreground))' }}
                    >
                      {projects.featured.name}
                    </h2>
                    <p
                      className="text-base font-medium"
                      style={{ color: 'hsl(var(--primary))' }}
                    >
                      {projects.featured.tagline}
                    </p>
                  </div>

                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {projects.featured.description}
                  </p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2">
                    {projects.featured.highlights.map((h) => (
                      <li key={h.id} className="flex items-start gap-2 text-sm">
                        <span style={{ color: 'hsl(var(--primary))' }} className="mt-0.5 shrink-0">
                          ▸
                        </span>
                        <span style={{ color: 'hsl(var(--muted-foreground))' }}>{h.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {projects.featured.techStack.map((t) => (
                      <span
                        key={t.id}
                        className="px-3 py-1 rounded text-xs font-mono font-semibold"
                        style={{
                          background: 'hsl(var(--primary) / 0.1)',
                          color: 'hsl(var(--primary))',
                          border: '1px solid hsl(var(--primary) / 0.25)',
                        }}
                      >
                        {t.label}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={projects.featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded font-semibold text-sm transition-all duration-150"
                      style={{
                        background: 'hsl(var(--primary))',
                        color: 'hsl(var(--foreground))',
                        boxShadow: '0 0 16px hsl(var(--primary) / 0.3)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      {projects.featured.ctaLive}
                    </a>
                    <a
                      href={projects.featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded font-semibold text-sm transition-all duration-150 flex items-center gap-2"
                      style={{
                        border: '1px solid hsl(var(--border))',
                        color: 'hsl(var(--muted-foreground))',
                        background: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                        e.currentTarget.style.color = 'hsl(var(--foreground))';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--border))';
                        e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      {projects.featured.ctaGithub}
                    </a>
                    {projects.featured.githubUrl2 && (<a
                      href={projects.featured.githubUrl2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded font-semibold text-sm transition-all duration-150 flex items-center gap-2"
                      style={{
                        border: '1px solid hsl(var(--border))',
                        color: 'hsl(var(--muted-foreground))',
                        background: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                        e.currentTarget.style.color = 'hsl(var(--foreground))';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'hsl(var(--border))';
                        e.currentTarget.style.color = 'hsl(var(--muted-foreground))';
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      {projects.featured.ctaGithub2}
                    </a>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── OTHER PROJECTS ───────────────────────────────────────────── */}
        <section
          className="py-xxl"
          style={{
            background: 'hsl(var(--secondary))',
            borderTop: '1px solid hsl(var(--border))',
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.p
              className="text-xs font-mono uppercase tracking-widest mb-8"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              More Projects
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.other.map((proj, i) => {
                const sc = statusColors[proj.status] ?? statusColors['Coming Soon'];
                return (
                  <motion.div
                    key={proj.id}
                    className="rounded-xl p-7 flex flex-col gap-5 transition-all duration-200"
                    style={{
                      background: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                    }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                    whileHover={{
                      y: -4,
                      borderColor: 'hsl(var(--primary) / 0.5)',
                      boxShadow: '0 8px 32px hsl(var(--primary) / 0.12)',
                    }}
                  >
                    {/* Status badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold"
                        style={{
                          background: sc.bg,
                          color: sc.text,
                          border: `1px solid ${sc.border}`,
                        }}
                      >
                        {proj.status}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <h3
                        className="text-xl font-bold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {proj.name}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        {proj.description}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((t) => (
                        <span
                          key={t.id}
                          className="px-2.5 py-0.5 rounded text-xs font-mono"
                          style={{
                            background: 'hsl(var(--primary) / 0.08)',
                            color: 'hsl(var(--primary))',
                            border: '1px solid hsl(var(--primary) / 0.2)',
                          }}
                        >
                          {t.label}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-1">
                      {proj.liveUrl ? (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold transition-colors duration-150"
                          style={{ color: 'hsl(var(--primary))' }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.opacity = '0.75')
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.opacity = '1')
                          }
                        >
                          Live →
                        </a>
                      ) : null}
                      {proj.githubUrl.length > 0 ? (
                        <>
                          {proj.githubUrl.map((url) => (
                            <a
                              key={url} // Added key prop to prevent React warnings
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium transition-colors duration-150 flex items-center gap-1"
                              style={{ color: 'hsl(var(--muted-foreground))' }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = 'hsl(var(--foreground))')
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = 'hsl(var(--muted-foreground))')
                              }
                            >
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                              GitHub
                            </a>
                          ))}
                        </>
                      ) : null}
                      {!proj.liveUrl && !(proj.githubUrl.length>0) ? (
                        <span
                          className="text-xs font-mono"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          Coming soon
                        </span>
                      ) : null}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="py-xxl"
          style={{
            background: 'hsl(var(--background))',
            borderTop: '1px solid hsl(var(--border))',
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="flex flex-col gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut' as const }}
              >
                <h2
                  className="text-3xl md:text-4xl font-black"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  {projects.cta.headline}
                </h2>
                <p className="text-base" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {projects.cta.sub}
                </p>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' as const }}
              >
                <a
                  href="https://github.com/dakshbisht1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded font-semibold text-sm transition-all duration-150 flex items-center gap-2"
                  style={{
                    background: 'hsl(var(--primary))',
                    color: 'hsl(var(--foreground))',
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  {projects.cta.ctaGithub}
                </a>
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded font-semibold text-sm transition-all duration-150"
                  style={{
                    border: '1px solid hsl(var(--primary))',
                    color: 'hsl(var(--primary))',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'hsl(var(--primary) / 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {projects.cta.ctaContact}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
