import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { skills } from '../contents/content';

export default function SkillsPage() {

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
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: 500,
              height: 400,
              background:
                'radial-gradient(ellipse, hsl(var(--accent) / 0.08) 0%, transparent 70%)',
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
              {skills.hero.eyebrow}
            </motion.p>
            <motion.h1
              className="text-5xl md:text-6xl font-black leading-tight mb-4"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' as const }}
            >
              {skills.hero.headline}
            </motion.h1>
            <motion.p
              className="text-lg max-w-xl leading-relaxed"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' as const }}
            >
              {skills.hero.sub}
            </motion.p>
          </div>
        </section>

        {/* ── SKILL STACKS ─────────────────────────────────────────────── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.stacks.map((stack, si) => {
                const isAccent = stack.color === 'accent';
                return (
                  <motion.div
                    key={stack.id}
                    className="rounded-xl p-8 flex flex-col gap-6"
                    style={{
                      background: 'hsl(var(--card))',
                      border: `1px solid ${isAccent ? 'hsl(var(--accent) / 0.35)' : 'hsl(var(--border))'}`,
                      boxShadow: isAccent
                        ? '0 0 32px hsl(var(--accent) / 0.08)'
                        : 'none',
                    }}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: si * 0.07, ease: 'easeOut' as const }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <span
                        className="text-2xl leading-none mt-0.5"
                        style={{
                          color: isAccent
                            ? 'hsl(var(--accent))'
                            : 'hsl(var(--primary))',
                        }}
                      >
                        {stack.icon}
                      </span>
                      <div>
                        <h2
                          className="text-xl font-bold mb-1"
                          style={{ color: 'hsl(var(--foreground))' }}
                        >
                          {stack.name}
                        </h2>
                        <p
                          className="text-sm"
                          style={{ color: 'hsl(var(--muted-foreground))' }}
                        >
                          {stack.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill bars */}
                    <div className="flex flex-col gap-4">
                      {stack.skills.map((skill, ski) => (
                        <div key={skill.id} className="flex flex-col gap-1.5">
                          <div className="flex items-center justify-between">
                            <span
                              className="text-sm font-medium"
                              style={{ color: 'hsl(var(--foreground))' }}
                            >
                              {skill.name}
                            </span>
                            <span
                              className="text-xs font-mono"
                              style={{ color: 'hsl(var(--muted-foreground))' }}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          {/* Track */}
                          <div
                            className="h-1.5 rounded-full overflow-hidden"
                            style={{ background: 'hsl(var(--border))' }}
                          >
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background: isAccent
                                  ? 'hsl(var(--accent))'
                                  : 'hsl(var(--primary))',
                                boxShadow: isAccent
                                  ? '0 0 8px hsl(var(--accent) / 0.5)'
                                  : '0 0 8px hsl(var(--primary) / 0.4)',
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: si * 0.07 + ski * 0.06,
                                ease: 'easeOut' as const,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CURRENTLY LEARNING ───────────────────────────────────────── */}
        <section
          className="py-xxl"
          style={{
            background: 'hsl(var(--secondary))',
            borderTop: '1px solid hsl(var(--border))',
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl md:text-4xl font-black mb-10"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
            >
              {skills.learning.headline}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.learning.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="rounded-xl p-7 flex flex-col gap-3"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--accent) / 0.25)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' as const }}
                  whileHover={{
                    borderColor: 'hsl(var(--accent) / 0.6)',
                    boxShadow: '0 4px 24px hsl(var(--accent) / 0.1)',
                  }}
                >
                  {/* Pulse dot */}
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: 'hsl(var(--accent))' }}
                    />
                    <span
                      className="text-xs font-mono uppercase tracking-widest"
                      style={{ color: 'hsl(var(--accent))' }}
                    >
                      Active
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS ────────────────────────────────────────────────────── */}
        <section
          className="py-xxl"
          style={{
            background: 'hsl(var(--background))',
            borderTop: '1px solid hsl(var(--border))',
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              className="text-3xl font-black mb-8"
              style={{ color: 'hsl(var(--foreground))' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' as const }}
            >
              {skills.tools.headline}
            </motion.h2>
            <div className="flex flex-wrap gap-3">
              {skills.tools.items.map((tool, i) => (
                <motion.span
                  key={tool.id}
                  className="px-4 py-2 rounded text-sm font-mono font-medium"
                  style={{
                    background: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    color: 'hsl(var(--muted-foreground))',
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.04, ease: 'easeOut' as const }}
                  whileHover={{
                    borderColor: 'hsl(var(--primary) / 0.5)',
                    color: 'hsl(var(--foreground))',
                  }}
                >
                  {tool.label}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="py-xxl"
          style={{
            background: 'hsl(var(--secondary))',
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
                  Want to put these skills to work?
                </h2>
                <p className="text-base" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Open to full-time roles, freelance projects, and GenAI collaborations.
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
                  Get in Touch
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
                  See Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
