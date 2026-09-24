import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/horizontal.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'hsl(var(--background) / 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid hsl(var(--border))' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Dishant Bisht"
            className="block h-auto max-h-9 w-auto max-w-[160px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{
                  color: active
                    ? 'hsl(var(--primary))'
                    : 'hsl(var(--muted-foreground))',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'hsl(var(--foreground))')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = active
                    ? 'hsl(var(--primary))'
                    : 'hsl(var(--muted-foreground))')
                }
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="px-4 py-2 rounded text-sm font-semibold transition-all duration-150"
            style={{
              background: 'hsl(var(--primary))',
              color: 'hsl(var(--foreground))',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.opacity = '0.85')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = '1')
            }
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: 'hsl(var(--foreground))',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: 'hsl(var(--foreground))',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-200"
            style={{
              background: 'hsl(var(--foreground))',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{
            background: 'hsl(var(--background) / 0.98)',
            borderBottom: '1px solid hsl(var(--border))',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium"
              style={{ color: 'hsl(var(--muted-foreground))' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-4 py-2 rounded text-sm font-semibold text-center"
            style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--foreground))' }}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  );
}
