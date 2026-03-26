'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Our Story', href: '#about' },
  { label: 'Specialties', href: '#collections' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit Us', href: '#visit' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
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
        background: scrolled ? 'rgba(240, 237, 232, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
      }}
    >
      <div
        className="mx-auto px-6 md:px-10 h-20 flex items-center justify-between"
        style={{ maxWidth: '1400px' }}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-cormorant italic transition-colors duration-300"
          style={{
            fontSize: '28px',
            fontWeight: 300,
            letterSpacing: '0.06em',
            color: 'var(--color-terracotta)',
          }}
        >
          beurre.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center" style={{ gap: '3rem' }}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-desktop font-jost uppercase transition-colors duration-300"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.20em',
                  fontWeight: 300,
                  color: 'var(--color-muted)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-dark)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-muted)'
                }}
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
          style={{ cursor: 'pointer' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px transition-all duration-300"
              style={{ background: 'var(--color-dark)' }}
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
          style={{ background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}
        >
          <ul className="flex flex-col py-10 px-8 gap-8">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <a
                  href={link.href}
                  className="font-cormorant italic"
                  style={{ fontSize: '28px', fontWeight: 300, letterSpacing: '0.04em', color: 'var(--color-dark)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
