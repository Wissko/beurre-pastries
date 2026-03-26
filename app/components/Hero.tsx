'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      id="hero"
      style={{ background: '#f0ede8', minHeight: '100svh' }}
    >
      {/* Subtle background image — very low opacity for warmth */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          aria-hidden
        />
      </div>

      {/* ── Mobile layout ── */}
      <div
        className="lg:hidden flex flex-col items-center justify-center w-full relative z-10"
        style={{ paddingTop: '120px', paddingBottom: '100px', paddingLeft: '24px', paddingRight: '24px' }}
      >
        {/* Overline */}
        <p
          className="font-jost uppercase anim-in stagger-0"
          style={{ fontSize: '9px', letterSpacing: '0.38em', color: 'var(--color-muted)', fontWeight: 300, marginBottom: '28px' }}
        >
          Park Road · Milton · Brisbane
        </p>

        {/* Thin ornament */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          style={{ width: '32px', height: '1px', background: 'var(--color-terracotta)', marginBottom: '32px', transformOrigin: 'center' }}
        />

        {/* Monumental title */}
        <h1
          className="font-cormorant italic leading-none text-center anim-in stagger-2"
          style={{
            fontSize: 'clamp(80px, 26vw, 140px)',
            color: 'var(--color-terracotta)',
            letterSpacing: '0.06em',
            fontWeight: 300,
            marginBottom: '16px',
          }}
        >
          beurre.
        </h1>

        <p
          className="font-jost uppercase text-center anim-in stagger-3"
          style={{
            fontSize: '10px',
            letterSpacing: '0.45em',
            color: 'var(--color-muted)',
            fontWeight: 300,
            marginBottom: '32px',
          }}
        >
          Pastries
        </p>

        {/* Tagline */}
        <p
          className="font-cormorant italic text-center anim-in stagger-3"
          style={{
            fontSize: 'clamp(16px, 4.5vw, 22px)',
            color: 'var(--color-dark)',
            letterSpacing: '0.06em',
            fontWeight: 300,
            opacity: 0.75,
            marginBottom: '52px',
            maxWidth: '280px',
          }}
        >
          Morning pastry. Real craft. Bear Bones Coffee.
        </p>

        {/* CTA */}
        <a
          href="#collections"
          className="btn-underline font-jost uppercase anim-in stagger-4"
          style={{
            fontSize: '9px',
            letterSpacing: '0.28em',
            color: 'var(--color-dark)',
            paddingBottom: '4px',
            fontWeight: 300,
          }}
        >
          See our specialties
        </a>
      </div>

      {/* ── Desktop layout ── */}
      <div
        className="hidden lg:flex flex-col items-center justify-center w-full relative z-10"
        style={{ minHeight: '100svh', paddingTop: '80px', paddingBottom: '80px' }}
      >
        <p
          className="font-jost uppercase anim-in stagger-0"
          style={{ fontSize: '9px', letterSpacing: '0.38em', color: 'var(--color-muted)', fontWeight: 300, marginBottom: '36px' }}
        >
          Park Road · Milton · Brisbane
        </p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          style={{ width: '40px', height: '1px', background: 'var(--color-terracotta)', marginBottom: '40px', transformOrigin: 'center' }}
        />

        <h1
          className="font-cormorant italic leading-none text-center anim-in stagger-2"
          style={{
            fontSize: 'clamp(8rem, 16vw, 20rem)',
            color: 'var(--color-terracotta)',
            letterSpacing: '0.08em',
            fontWeight: 300,
            marginBottom: '12px',
          }}
        >
          beurre.
        </h1>

        <p
          className="font-jost uppercase text-center anim-in stagger-2"
          style={{
            fontSize: '11px',
            letterSpacing: '0.55em',
            color: 'var(--color-muted)',
            fontWeight: 300,
            marginBottom: '36px',
          }}
        >
          Pastries
        </p>

        <p
          className="font-cormorant italic anim-in stagger-3"
          style={{
            fontSize: 'clamp(16px, 1.4vw, 22px)',
            color: 'var(--color-dark)',
            letterSpacing: '0.08em',
            fontWeight: 300,
            opacity: 0.7,
            marginBottom: '52px',
          }}
        >
          Morning pastry. Real craft. Bear Bones Coffee.
        </p>

        <a
          href="#collections"
          className="btn-underline font-jost uppercase anim-in stagger-4"
          style={{
            fontSize: '9px',
            letterSpacing: '0.28em',
            color: 'var(--color-dark)',
            paddingBottom: '4px',
            fontWeight: 300,
          }}
        >
          See our specialties
        </a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-jost uppercase" style={{ fontSize: '8px', letterSpacing: '0.32em', color: 'var(--color-muted)' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10"
            style={{ background: 'var(--color-border)' }}
          />
        </motion.div>
      </div>

      {/* Mobile scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'var(--color-border)' }}
        />
      </motion.div>
    </section>
  )
}
