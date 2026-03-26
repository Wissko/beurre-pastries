'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return
      const offset = window.scrollY * 0.3
      imgRef.current.style.transform = `translateY(${offset}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="/images/hero.jpg"
          alt="Beurre Pastries Brisbane — French artisan pastry"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(26,20,16,0.35) 0%, rgba(26,20,16,0.55) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-jost text-xs tracking-[0.35em] uppercase mb-6"
          style={{ color: 'rgba(232,213,196,0.8)' }}
        >
          Est. Brisbane, Australia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-cormorant italic leading-none mb-4"
          style={{
            fontSize: 'clamp(80px, 18vw, 200px)',
            color: '#faf8f4',
            letterSpacing: '-0.02em',
          }}
        >
          Beurre
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-cormorant italic text-xl md:text-2xl mb-10"
          style={{ color: 'rgba(232,213,196,0.85)', letterSpacing: '0.08em' }}
        >
          French Pastry · Brisbane
        </motion.p>

        <motion.a
          href="#collections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block font-jost text-xs tracking-[0.2em] uppercase px-10 py-4 border transition-all duration-400"
          style={{
            color: '#faf8f4',
            borderColor: 'rgba(184,151,90,0.6)',
            background: 'rgba(26,20,16,0.5)',
            backdropFilter: 'blur(4px)',
            letterSpacing: '0.18em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--color-gold)'
            e.currentTarget.style.borderColor = 'var(--color-gold)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(26,20,16,0.5)'
            e.currentTarget.style.borderColor = 'rgba(184,151,90,0.6)'
          }}
        >
          Explore our Collection
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-jost text-xs tracking-widest uppercase" style={{ color: 'rgba(250,248,244,0.5)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'rgba(184,151,90,0.5)' }}
        />
      </motion.div>
    </section>
  )
}
