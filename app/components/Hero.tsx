'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      id="hero"
      style={{ background: 'var(--color-bg)', minHeight: '100svh' }}
    >
      {/* ── Desktop: full-bleed background image (fixed parallax) ── */}
      <div className="hidden lg:block hero-bg-fixed">
        <Image
          src="/images/beurre.jpg"
          alt="Beurre Pastries Brisbane — artisan French pastry"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Elegant overlay — light at top, slight dark at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0.32) 100%)',
          }}
        />
      </div>

      {/* ── Mobile layout ── */}
      <div
        className="lg:hidden flex flex-col items-center justify-center w-full"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-jost uppercase mb-10"
          style={{ fontSize: '10px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}
        >
          Est. Brisbane, Australia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-cormorant leading-none mb-6"
          style={{
            fontSize: 'clamp(64px, 14vw, 120px)',
            color: 'var(--color-dark)',
            letterSpacing: '0.10em',
            fontWeight: 300,
            fontStyle: 'normal',
          }}
        >
          Beurre
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-cormorant italic mb-16"
          style={{ fontSize: 'clamp(14px, 1.8vw, 20px)', color: 'var(--color-muted)', letterSpacing: '0.08em', fontWeight: 300 }}
        >
          French Pastry · Brisbane
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
          className="relative img-hover"
          style={{ width: 'min(380px, 80vw)', aspectRatio: '4/5', marginBottom: '52px' }}
        >
          <Image
            src="/images/beurre.jpg"
            alt="Beurre Pastries Brisbane"
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 380px"
          />
        </motion.div>

        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-jost uppercase inline-block transition-all duration-300"
          style={{
            fontSize: '10px',
            letterSpacing: '0.22em',
            color: 'var(--color-dark)',
            borderBottom: '1px solid var(--color-border)',
            paddingBottom: '4px',
            fontWeight: 300,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--color-gold)'
            e.currentTarget.style.color = 'var(--color-accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--color-border)'
            e.currentTarget.style.color = 'var(--color-dark)'
          }}
        >
          Explore our Collection
        </motion.a>
      </div>

      {/* ── Desktop layout — content over fixed background ── */}
      <div
        className="hidden lg:flex flex-col items-center justify-center w-full relative z-10"
        style={{ minHeight: '100svh', paddingTop: '80px', paddingBottom: '80px' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-jost uppercase mb-10"
          style={{ fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}
        >
          Est. Brisbane, Australia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-cormorant italic leading-none mb-8 text-center"
          style={{
            fontSize: 'clamp(8rem, 15vw, 18rem)',
            color: '#ffffff',
            letterSpacing: '0.15em',
            fontWeight: 300,
            textShadow: '0 2px 40px rgba(0,0,0,0.2)',
          }}
        >
          Beurre
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-cormorant italic mb-16"
          style={{
            fontSize: 'clamp(16px, 1.4vw, 22px)',
            color: 'rgba(255,255,255,0.8)',
            letterSpacing: '0.12em',
            fontWeight: 300,
          }}
        >
          French Pastry · Brisbane
        </motion.p>

        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-jost uppercase inline-block transition-all duration-300"
          style={{
            fontSize: '10px',
            letterSpacing: '0.28em',
            color: 'rgba(255,255,255,0.9)',
            borderBottom: '1px solid rgba(255,255,255,0.4)',
            paddingBottom: '5px',
            fontWeight: 300,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderBottomColor = 'var(--color-gold)'
            e.currentTarget.style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.4)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.9)'
          }}
        >
          Explore our Collection
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-jost uppercase" style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.5)' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10"
            style={{ background: 'rgba(255,255,255,0.3)' }}
          />
        </motion.div>
      </div>

      {/* Mobile scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-jost uppercase" style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'var(--color-muted)' }}>
          Scroll
        </span>
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
