'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Signature() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: '75vh', height: '100lvh' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/life.jpg"
          alt="Beurre — the art of slowing down and savouring life"
          fill
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(17,17,17,0.25), rgba(17,17,17,0.55))' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-20">
        {/* Desktop: monumental citation with mix-blend-mode */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          className="font-cormorant italic"
          style={{
            fontSize: 'clamp(34px, 7vw, 100px)',
            color: '#ffffff',
            lineHeight: 1.1,
            fontWeight: 300,
            letterSpacing: '0.06em',
            mixBlendMode: 'overlay',
            opacity: 0.95,
          }}
        >
          Every piece
          <br />
          tells a story.
        </motion.h2>

        {/* Decorative thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto my-8"
          style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.4)' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="font-jost uppercase"
          style={{ fontSize: '9px', letterSpacing: '0.32em', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}
        >
          Beurre Pastries · Brisbane
        </motion.p>

        {/* Desktop only: large translucent background text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="hidden lg:block font-cormorant absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            fontSize: 'clamp(120px, 18vw, 260px)',
            color: 'rgba(255,255,255,0.03)',
            fontWeight: 300,
            letterSpacing: '0.15em',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-hidden
        >
          Beurre
        </motion.span>
      </div>
    </section>
  )
}
