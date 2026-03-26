'use client'

export default function Footer() {
  return (
    <footer
      className="py-20 px-6"
      style={{ background: 'var(--color-dark)', color: 'var(--color-bg)' }}
    >
      <div className="mx-auto" style={{ maxWidth: '1400px' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <p
              className="font-cormorant italic"
              style={{ fontSize: '36px', fontWeight: 300, letterSpacing: '0.06em', color: 'var(--color-terracotta)' }}
            >
              beurre.
            </p>
            <p
              className="font-jost uppercase mt-2"
              style={{ fontSize: '8px', letterSpacing: '0.42em', color: 'rgba(240,237,232,0.35)', fontWeight: 300 }}
            >
              Pastries · Park Road · Milton
            </p>
          </div>

          {/* Center divider */}
          <div className="hidden md:block flex-1 mx-12 h-px" style={{ background: 'rgba(240,237,232,0.06)' }} />

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <a
              href="https://instagram.com/beurrepastriesbne"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost uppercase transition-colors duration-300 flex items-center gap-2"
              style={{ fontSize: '8px', letterSpacing: '0.24em', fontWeight: 300, color: 'rgba(240,237,232,0.35)', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(240,237,232,0.7)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,237,232,0.35)')}
            >
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                <rect x="2" y="2" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="13.5" cy="4.5" r="0.75" fill="currentColor"/>
              </svg>
              @beurrepastriesbne
            </a>
            <p
              className="font-jost"
              style={{ fontSize: '9px', fontWeight: 300, color: 'rgba(240,237,232,0.15)' }}
            >
              © 2025 Beurre Pastries. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-14 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(240,237,232,0.05)' }}
        >
          <p
            className="font-cormorant italic"
            style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(240,237,232,0.18)' }}
          >
            Will Leung · formerly LeBakerman, Christchurch · now on Park Road, Brisbane
          </p>
        </div>
      </div>
    </footer>
  )
}
