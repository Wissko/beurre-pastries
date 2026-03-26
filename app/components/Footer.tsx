'use client'

export default function Footer() {
  return (
    <footer
      className="py-16 px-6"
      style={{ background: 'var(--color-dark)', color: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <p
              className="font-cormorant italic"
              style={{ fontSize: '40px', letterSpacing: '-0.01em', color: 'var(--color-bg)' }}
            >
              Beurre
            </p>
            <p
              className="font-jost text-xs tracking-[0.25em] uppercase mt-1"
              style={{ color: 'rgba(184,151,90,0.7)' }}
            >
              French Pastry · Brisbane
            </p>
          </div>

          {/* Center divider line */}
          <div className="hidden md:block flex-1 mx-12 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="https://instagram.com/beurrepastriesbne"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-xs tracking-widest uppercase transition-colors duration-300 flex items-center gap-2"
              style={{ color: 'rgba(184,151,90,0.7)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(184,151,90,0.7)')}
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="13.5" cy="4.5" r="0.75" fill="currentColor"/>
              </svg>
              @beurrepastriesbne
            </a>
            <p
              className="font-jost text-xs"
              style={{ color: 'rgba(255,255,255,0.25)' }}
            >
              © 2025 Beurre Pastries. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom quote */}
        <div
          className="mt-12 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="font-cormorant italic text-lg"
            style={{ color: 'rgba(184,151,90,0.4)' }}
          >
            Made with butter, made with love — Brisbane, Queensland
          </p>
        </div>
      </div>
    </footer>
  )
}
