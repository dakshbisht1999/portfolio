import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { home } from '../contents/content';
import devtinderProjectImg from '@/assets/devtinder-project.png'

// ─── Animated role switcher ───────────────────────────────────────────────────
function RoleSwitcher() {
  const roles = home.hero.roles;
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        color: 'hsl(var(--primary))',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-6px)',
      }}
    >
      {roles[idx]}
    </span>
  );
}

// ─── Floating orb ─────────────────────────────────────────────────────────────
function FloatingOrb({
  size,
  x,
  y,
  color,
  duration,
}: {
  size: number;
  x: string;
  y: string;
  color: string;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: 'blur(60px)',
        opacity: 0.18,
      }}
      animate={{ y: [0, -24, 0], opacity: [0.18, 0.28, 0.18] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// ─── Node network visual ──────────────────────────────────────────────────────
function NodeNetwork() {
  const floatingTags = ['React', 'Node.js', 'LLM', 'RAG', 'MCP', 'AWS', 'Angular', 'MongoDB', 'Express.js'];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative flex items-center justify-center"
        style={{ width: 200, height: 200 }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)',
            animation: 'pulse-glow 3s ease-in-out infinite',
          }}
        />
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black"
          style={{
            background: 'hsl(var(--card))',
            border: '2px solid hsl(var(--primary) / 0.6)',
            color: 'hsl(var(--primary))',
            boxShadow: '0 0 32px hsl(var(--primary) / 0.3)',
            fontFamily: 'monospace',
          }}
        >
          {'<DB/>'}
        </div>
      </div>

      {floatingTags.map((tag, i) => {
        const angle = (i / floatingTags.length) * 2 * Math.PI;
        const radius = 140;
        const cx = Math.cos(angle) * radius;
        const cy = Math.sin(angle) * radius;
        return (
          <motion.div
            key={tag}
            className="absolute px-3 py-1 rounded-full text-xs font-mono font-semibold"
            style={{
              left: `calc(50% + ${cx}px - 32px)`,
              top: `calc(50% + ${cy}px - 14px)`,
              background: 'hsl(var(--card))',
              border: '1px solid hsl(var(--primary) / 0.4)',
              color: 'hsl(var(--primary))',
              whiteSpace: 'nowrap',
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            {tag}
          </motion.div>
        );
      })}

      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        style={{ opacity: 0.2 }}
      >
        {floatingTags.map((_, i) => {
          const angle = (i / floatingTags.length) * 2 * Math.PI;
          const r = 140;
          const x = 200 + Math.cos(angle) * r;
          const y = 200 + Math.sin(angle) * r;
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="hsl(var(--primary))"
              strokeWidth="1"
            />
          );
        })}
      </svg>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @keyframes grid-fade {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
      `}</style>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{ background: 'hsl(var(--background))' }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.06) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.06) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'grid-fade 6s ease-in-out infinite',
            }}
          />

          <FloatingOrb size={400} x="10%" y="10%" color="hsl(var(--primary))" duration={7} />
          <FloatingOrb size={300} x="60%" y="50%" color="hsl(var(--accent))" duration={9} />
          <FloatingOrb size={250} x="80%" y="5%" color="hsl(var(--primary))" duration={6} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left column */}
              <div className="flex flex-col gap-6">
                <motion.p
                  className="text-sm font-mono tracking-widest uppercase"
                  style={{ color: 'hsl(var(--accent))' }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' as const }}
                >
                  {home.hero.greeting}
                </motion.p>

                <motion.h1
                  className="text-5xl md:text-7xl font-black leading-none tracking-tight"
                  style={{ color: 'hsl(var(--foreground))' }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' as const }}
                >
                  {home.hero.name}
                </motion.h1>

                <motion.div
                  className="text-xl md:text-2xl font-semibold flex items-center gap-2 flex-wrap"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.22, ease: 'easeOut' as const }}
                >
                  <RoleSwitcher />
                </motion.div>

                <motion.p
                  className="text-base md:text-lg max-w-md leading-relaxed"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.32, ease: 'easeOut' as const }}
                >
                  {home.hero.bio}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 pt-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.44, ease: 'easeOut' as const }}
                >
                  <Link
                    to="/projects"
                    className="px-6 py-3 rounded font-semibold text-sm transition-all duration-150"
                    style={{
                      background: 'hsl(var(--primary))',
                      color: 'hsl(var(--foreground))',
                      boxShadow: '0 0 20px hsl(var(--primary) / 0.35)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    {home.hero.ctaPrimary}
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded font-semibold text-sm transition-all duration-150"
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
                    {home.hero.ctaSecondary}
                  </Link>
                </motion.div>
              </div>

              {/* Right column — node network */}
              <motion.div
                className="hidden lg:flex items-center justify-center"
                style={{ height: 400 }}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
              >
                <NodeNetwork />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ──────────────────────────────────────────────────── */}
        <div
          className="overflow-hidden py-4"
          style={{
            borderTop: '1px solid hsl(var(--border))',
            borderBottom: '1px solid hsl(var(--border))',
          }}
        >
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{ animation: 'marquee 28s linear infinite' }}
          >
            {[...home.marquee.items, ...home.marquee.items].map((item, i) => (
              <span
                key={`${item.id}-${i}`}
                className="text-sm font-mono font-medium shrink-0"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                <span style={{ color: 'hsl(var(--primary))' }}>▸</span>{' '}
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── SKILLS SNAPSHOT ──────────────────────────────────────────── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--background))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left — stat */}
              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut' as const }}
              >
                <div>
                  <span
                    className="text-8xl font-black leading-none"
                    style={{ color: 'hsl(var(--primary))' }}
                  >
                    {home.skills.statValue}
                  </span>
                  <p
                    className="text-lg font-semibold mt-2"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    {home.skills.statLabel}
                  </p>
                </div>
                <p
                  className="text-base leading-relaxed max-w-sm"
                  style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                  {home.skills.narrative}
                </p>
              </motion.div>

              {/* Right — skill chips by category */}
              <div className="flex flex-col gap-8">
                {home.skills.categories.map((cat, ci) => (
                  <motion.div
                    key={cat.id}
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.08, ease: 'easeOut' as const }}
                  >
                    <p
                      className="text-xs font-mono uppercase tracking-widest"
                      style={{
                        color:
                          cat.accent === 'accent'
                            ? 'hsl(var(--accent))'
                            : 'hsl(var(--muted-foreground))',
                      }}
                    >
                      {cat.name}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item.id}
                          className="px-3 py-1 rounded text-xs font-mono font-semibold"
                          style={
                            cat.accent === 'accent'
                              ? {
                                  background: 'hsl(var(--accent) / 0.12)',
                                  color: 'hsl(var(--accent))',
                                  border: '1px solid hsl(var(--accent) / 0.3)',
                                }
                              : {
                                  background: 'hsl(var(--primary) / 0.1)',
                                  color: 'hsl(var(--primary))',
                                  border: '1px solid hsl(var(--primary) / 0.25)',
                                }
                          }
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECT ─────────────────────────────────────────── */}
        <section className="py-xxl" style={{ background: 'hsl(var(--secondary))' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.p
              className="text-xs font-mono uppercase tracking-widest mb-4"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Featured Project
            </motion.p>
            <motion.div
              className="rounded-xl overflow-hidden"
              style={{
                border: '1px solid hsl(var(--primary) / 0.4)',
                boxShadow: '0 0 40px hsl(var(--primary) / 0.1)',
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              whileHover={{
                y: -4,
                boxShadow: '0 8px 60px hsl(var(--primary) / 0.2)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left — info */}
                <div
                  className="p-10 flex flex-col gap-6"
                  style={{ background: 'hsl(var(--card))' }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-mono font-bold"
                      style={{
                        background: 'hsl(var(--primary) / 0.15)',
                        color: 'hsl(var(--primary))',
                        border: '1px solid hsl(var(--primary) / 0.3)',
                      }}
                    >
                      {home.project.badge}
                    </span>
                  </div>
                  <h2
                    className="text-4xl font-black"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    {home.project.name}
                  </h2>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    {home.project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {home.project.techStack.map((t) => (
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
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={home.project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded font-semibold text-sm transition-all duration-150"
                      style={{
                        background: 'hsl(var(--primary))',
                        color: 'hsl(var(--foreground))',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                      {home.project.ctaLive}
                    </a>
                    <a
                      href={home.project.githubUrl}
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
                      {home.project.ctaGithub}
                    </a>
                    {home.project.githubUrl2 && (<a
                      href={home.project.githubUrl2}
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
                      {home.project.ctaGithub2}
                    </a>)}
                  </div>
                </div>

                {/* Right — image */}
                <div className="relative min-h-64 lg:min-h-0 overflow-hidden">
                  <img
                    src={devtinderProjectImg}
                    alt="devTinder project screenshot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to right, hsl(var(--card)) 0%, transparent 30%)',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── GENAI JOURNEY ────────────────────────────────────────────── */}
        <section
          className="py-xxl relative overflow-hidden"
          style={{ background: 'hsl(var(--background))' }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: 600,
              height: 300,
              background:
                'radial-gradient(ellipse, hsl(var(--accent) / 0.12) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
            >
              <p
                className="text-xs font-mono uppercase tracking-widest mb-3"
                style={{ color: 'hsl(var(--accent))' }}
              >
                {home.genai.eyebrow}
              </p>
              <h2
                className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: 'hsl(var(--foreground))' }}
              >
                {home.genai.headline}
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-10"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {home.genai.narrative}
              </p>

              <div className="flex flex-wrap gap-3">
                {home.genai.concepts.map((c, i) => (
                  <motion.span
                    key={c.id}
                    className="px-4 py-2 rounded-full text-sm font-mono font-semibold"
                    style={{
                      background: 'hsl(var(--accent) / 0.1)',
                      color: 'hsl(var(--accent))',
                      border: '1px solid hsl(var(--accent) / 0.35)',
                    }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.07, ease: 'easeOut' as const }}
                  >
                    {c.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
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
              <motion.h2
                className="text-4xl md:text-5xl font-black leading-tight"
                style={{ color: 'hsl(var(--foreground))' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut' as const }}
              >
                {home.cta.headline}
              </motion.h2>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' as const }}
              >
                <Link
                  to="/projects"
                  className="px-7 py-3.5 rounded font-semibold text-sm transition-all duration-150"
                  style={{
                    background: 'hsl(var(--primary))',
                    color: 'hsl(var(--foreground))',
                    boxShadow: '0 0 20px hsl(var(--primary) / 0.3)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {home.cta.ctaProjects}
                </Link>
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
                  {home.cta.ctaContact}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
