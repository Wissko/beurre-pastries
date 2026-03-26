'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      id="hero"
      style={{ background: 'var(--color-bg)', minHeight: '100svh', paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Top label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-jost uppercase mb-10"
        style={{
          fontSize: '10px',
          letterSpacing: '0.35em',
          color: 'var(--color-muted)',
          fontWeight: 300,
        }}
      >
        Est. Brisbane, Australia
      </motion.p>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
        className="font-cormorant leading-none mb-6"
        style={{
          fontSize: 'clamp(64px, 14vw, 160px)',
          color: 'var(--color-dark)',
          letterSpacing: '0.10em',
          fontWeight: 300,
          fontStyle: 'normal',
        }}
      >
        Beurre
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55 }}
        className="font-cormorant italic mb-16"
        style={{
          fontSize: 'clamp(14px, 1.8vw, 20px)',
          color: 'var(--color-muted)',
          letterSpacing: '0.08em',
          fontWeight: 300,
        }}
      >
        French Pastry · Brisbane
      </motion.p>

      {/* Centred product image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        className="relative img-hover"
        style={{
          width: 'min(480px, 80vw)',
          aspectRatio: '4/5',
          marginBottom: '52px',
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Beurre Pastries Brisbane — French artisan pastry"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="(max-width: 768px) 80vw, 480px"
        />
      </motion.div>

      {/* CTA */}
      <motion.a
        href="#collections"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-jost uppercase"
          style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'var(--color-muted)' }}
        >
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
