import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { about } from '../contents/content';

export default function AboutPage() {

  return (
    <>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: 'hsl(var(--background))' }}
        >
          {/* Grid bg */}
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
          {/* Glow */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: 500,
              height: 400,
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
              {about.hero.eyebrow}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-black leading-tight mb-6 max-w-3xl"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' as const }}
            >
              {about.hero.headline}
            </motion.h1>
            <motion.p
              className="text-lg leading-relaxed max-w-2xl"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' as const }}
            >
              {about.hero.bio}
            </motion.p>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────── */}
        <section
          style={{
            background: 'hsl(var(--secondary))',
            borderTop: '1px solid hsl(var(--border))',
            borderBottom: '1px solid hsl(var(--border))',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' as const }}
                >
                  <span
                    className="text-4xl font-black"
                    style={{ color: 'hsl(var(--primary))' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────────────────────── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-black mb-14"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
            >
              {about.journey.headline}
            </motion.h2>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px"
                style={{ background: 'hsl(var(--border))' }}
              />

              <div className="flex flex-col gap-0">
                {about.journey.timeline.map((item, i) => (
                  <motion.div
                    key={item.id}
                    className="relative flex flex-col md:flex-row gap-4 md:gap-10 pb-12"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                  >
                    {/* Year */}
                    <div className="md:w-[140px] shrink-0 flex md:justify-end items-start pt-1 pl-6 md:pl-0">
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: 'hsl(var(--primary))' }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div
                      className="absolute left-[-4px] md:left-[136px] top-1.5 w-2.5 h-2.5 rounded-full border-2"
                      style={{
                        background: 'hsl(var(--background))',
                        borderColor: 'hsl(var(--primary))',
                        boxShadow: '0 0 8px hsl(var(--primary) / 0.5)',
                      }}
                    />

                    {/* Content */}
                    <div className="pl-6 md:pl-0 flex flex-col gap-2">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: 'hsl(var(--foreground))' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed max-w-xl"
                        style={{ color: 'hsl(var(--muted-foreground))' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GENAI TRANSITION ─────────────────────────────────────────── */}
        <section
          className="py-xxl relative overflow-hidden"
          style={{ background: 'hsl(var(--secondary))' }}
        >
          {/* Cyan glow */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: 500,
              height: 400,
              background: 'radial-gradient(ellipse, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut' as const }}
              >
                <p
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  {about.transition.eyebrow}
                </p>
                <h2
                  className="text-4xl md:text-5xl font-black"
                  style={{ color: 'hsl(var(--foreground))' }}
                >
                  {about.transition.headline}
                </h2>
                {about.transition.body.map((para) => (
                  <p
                    key={para.id}
                    className="text-base leading-relaxed"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {para.text}
                  </p>
                ))}
              </motion.div>

              {/* Right — learning pills */}
              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' as const }}
              >
                <p
                  className="text-sm font-mono"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  Currently learning
                </p>
                <div className="flex flex-wrap gap-3">
                  {about.transition.learning.map((item, i) => (
                    <motion.span
                      key={item.id}
                      className="px-5 py-2.5 rounded-full text-sm font-mono font-semibold"
                      style={{
                        background: 'hsl(var(--accent) / 0.1)',
                        color: 'hsl(var(--accent))',
                        border: '1px solid hsl(var(--accent) / 0.35)',
                      }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.06, ease: 'easeOut' as const }}
                    >
                      {item.label}
                    </motion.span>
                  ))}
                </div>

                {/* Arrow visual */}
                <div className="flex items-center gap-4 pt-4">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded"
                    style={{
                      background: 'hsl(var(--primary) / 0.1)',
                      border: '1px solid hsl(var(--primary) / 0.25)',
                    }}
                  >
                    <span
                      className="text-sm font-mono font-semibold"
                      style={{ color: 'hsl(var(--primary))' }}
                    >
                      Full-Stack
                    </span>
                  </div>
                  <span
                    className="text-xl font-bold"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    →
                  </span>
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded"
                    style={{
                      background: 'hsl(var(--accent) / 0.1)',
                      border: '1px solid hsl(var(--accent) / 0.35)',
                    }}
                  >
                    <span
                      className="text-sm font-mono font-semibold"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      GenAI Engineer
                    </span>
                  </div>
                </div>
              </motion.div>
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
                  {about.cta.headline}
                </h2>
                <p
                  className="text-base"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {about.cta.sub}
                </p>
              </motion.div>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' as const }}
              >
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded font-semibold text-sm transition-all duration-150"
                  style={{
                    background: 'hsl(var(--primary))',
                    color: 'hsl(var(--foreground))',
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {about.cta.ctaContact}
                </Link>
                <Link
                  to="/projects"
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
                  {about.cta.ctaProjects}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
