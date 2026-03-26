'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export default function Signature() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: '70vh', height: '100lvh' }}
    >
      {/* Background image — light overlay, not dark */}
      <div className="absolute inset-0">
        <Image
          src="/images/late.jpg"
          alt="Morning at Beurre Pastries, Park Road Milton"
          fill
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm light overlay — semi-transparent, not dark */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(240,237,232,0.55), rgba(240,237,232,0.35))' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="font-cormorant italic"
          style={{
            fontSize: 'clamp(48px, 11vw, 96px)',
            color: 'var(--color-dark)',
            lineHeight: 1.1,
            fontWeight: 300,
            letterSpacing: '0.06em',
          }}
        >
          Each one made
          <br />
          by hand.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto my-8"
          style={{ width: '40px', height: '1px', background: 'var(--color-terracotta)', transformOrigin: 'center' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="font-jost uppercase"
          style={{ fontSize: '8px', letterSpacing: '0.38em', color: 'var(--color-muted)', fontWeight: 300 }}
        >
          Beurre Pastries · Park Road · Milton · Brisbane
        </motion.p>
      </div>
    </section>
  )
}
