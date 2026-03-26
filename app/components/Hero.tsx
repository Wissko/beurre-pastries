'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

// Particules organiques CSS-only — miettes flottantes
const PARTICLES = [
  { left: '12%', top: '55%', duration: '9s', delay: '0s' },
  { left: '28%', top: '70%', duration: '11s', delay: '2.5s' },
  { left: '60%', top: '62%', duration: '8.5s', delay: '1s' },
  { left: '75%', top: '50%', duration: '12s', delay: '3.5s' },
  { left: '45%', top: '80%', duration: '10s', delay: '0.8s' },
]

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      id="hero"
      style={{ background: '#f0ede8', minHeight: '100svh' }}
    >
      {/* Background image — zoom-out respiratoire 2.5s */}
      <div className="absolute inset-0 pointer-events-none" style={{ overflow: 'hidden' }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ scale: { duration: 2.5, ease: 'easeOut' }, opacity: { duration: 0.8, ease: 'easeOut' } }}
        >
          <Image
            src="/images/beurre.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            aria-hidden
          />
        </motion.div>
        {/* Overlay gradient chaud — très doux */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            background:
              'linear-gradient(to bottom, rgba(240,237,232,0.82) 0%, rgba(240,237,232,0.55) 40%, rgba(240,237,232,0.78) 100%)',
          }}
        />
      </div>

      {/* Particules organiques flottantes */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ── Mobile layout ── */}
      <div
        className="lg:hidden flex flex-col items-center justify-center w-full relative z-10"
        style={{ paddingTop: '120px', paddingBottom: '100px', paddingLeft: '24px', paddingRight: '24px' }}
      >
        {/* Ornament line — +300ms */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          style={{ width: '32px', height: '1px', background: 'var(--color-terracotta)', marginBottom: '32px', transformOrigin: 'center' }}
        />

        {/* Monumental title — +300ms */}
        <motion.h1
          className="font-cormorant italic leading-none text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease }}
          style={{
            fontSize: 'clamp(80px, 26vw, 140px)',
            color: 'var(--color-terracotta)',
            letterSpacing: '0.06em',
            fontWeight: 300,
            marginBottom: '16px',
          }}
        >
          beurre.
        </motion.h1>

        {/* Pastries sub-label — +700ms */}
        <motion.p
          className="font-jost uppercase text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease }}
          style={{
            fontSize: '10px',
            letterSpacing: '0.45em',
            color: 'var(--color-muted)',
            fontWeight: 300,
            marginBottom: '28px',
          }}
        >
          Pastries
        </motion.p>

        {/* Tagline — +700ms */}
        <motion.p
          className="font-cormorant italic text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease }}
          style={{
            fontSize: 'clamp(16px, 4.5vw, 22px)',
            color: 'var(--color-dark)',
            letterSpacing: '0.06em',
            fontWeight: 300,
            opacity: 0,
            marginBottom: '44px',
            maxWidth: '280px',
          }}
        >
          Morning pastry. Real craft. Bear Bones Coffee.
        </motion.p>

        {/* Overline — apparaît en dernier +1200ms */}
        <motion.p
          className="font-jost uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.2, ease }}
          style={{ fontSize: '9px', letterSpacing: '0.38em', color: 'var(--color-muted)', fontWeight: 300, marginBottom: '0px' }}
        >
          Park Road · Milton · Brisbane
        </motion.p>
      </div>

      {/* ── Desktop layout ── */}
      <div
        className="hidden lg:flex flex-col items-center justify-center w-full relative z-10"
        style={{ minHeight: '100svh', paddingTop: '80px', paddingBottom: '80px' }}
      >
        {/* Ornament — +300ms */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          style={{ width: '40px', height: '1px', background: 'var(--color-terracotta)', marginBottom: '40px', transformOrigin: 'center' }}
        />

        {/* Title — +300ms */}
        <motion.h1
          className="font-cormorant italic leading-none text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease }}
          style={{
            fontSize: 'clamp(8rem, 16vw, 20rem)',
            color: 'var(--color-terracotta)',
            letterSpacing: '0.08em',
            fontWeight: 300,
            marginBottom: '12px',
          }}
        >
          beurre.
        </motion.h1>

        {/* Pastries — +700ms */}
        <motion.p
          className="font-jost uppercase text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease }}
          style={{
            fontSize: '11px',
            letterSpacing: '0.55em',
            color: 'var(--color-muted)',
            fontWeight: 300,
            marginBottom: '28px',
          }}
        >
          Pastries
        </motion.p>

        {/* Tagline — +700ms */}
        <motion.p
          className="font-cormorant italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease }}
          style={{
            fontSize: 'clamp(16px, 1.4vw, 22px)',
            color: 'var(--color-dark)',
            letterSpacing: '0.08em',
            fontWeight: 300,
            opacity: 0.75,
            marginBottom: '52px',
          }}
        >
          Morning pastry. Real craft. Bear Bones Coffee.
        </motion.p>

        {/* Overline — apparaît en dernier +1200ms */}
        <motion.p
          className="font-jost uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.2, ease }}
          style={{ fontSize: '9px', letterSpacing: '0.38em', color: 'var(--color-muted)', fontWeight: 300 }}
        >
          Park Road · Milton · Brisbane
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-jost uppercase" style={{ fontSize: '8px', letterSpacing: '0.32em', color: 'var(--color-muted)' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10"
            style={{ background: 'var(--color-border)' }}
          />
        </motion.div>
      </div>

      {/* Mobile scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.0 }}
        className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'var(--color-border)' }}
        />
      </motion.div>
    </section>
  )
}
