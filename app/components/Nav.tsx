'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Our Story', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Visit Us', href: '#visit' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(250,248,244,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(184,151,90,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-cormorant italic text-3xl tracking-wide"
          style={{ color: scrolled ? 'var(--color-dark)' : 'var(--color-bg)' }}
        >
          Beurre
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-jost text-sm tracking-widest uppercase transition-colors duration-300"
                style={{
                  color: scrolled ? 'var(--color-text)' : 'rgba(250,248,244,0.85)',
                  letterSpacing: '0.12em',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = scrolled
                    ? 'var(--color-text)'
                    : 'rgba(250,248,244,0.85)')
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300"
              style={{ background: scrolled ? 'var(--color-dark)' : 'var(--color-bg)' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
          style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-blush)' }}
        >
          <ul className="flex flex-col py-6 px-6 gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-jost text-sm tracking-widest uppercase"
                  style={{ color: 'var(--color-text)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
