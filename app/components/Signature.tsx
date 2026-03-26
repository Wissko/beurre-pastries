'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const textEase = [0.22, 1, 0.36, 1] as const
const wipeEase = [0.76, 0, 0.24, 1] as const

export default function Signature() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: '70vh', height: '100lvh' }}
    >
      {/* Background image — slow wipe reveal */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: wipeEase }}
        >
          <Image
            src="/images/late.jpg"
            alt="Morning at Beurre Pastries, Park Road Milton"
            fill
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        {/* Warm light overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(240,237,232,0.55), rgba(240,237,232,0.35))' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0, ease: textEase }}
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
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
          className="mx-auto my-8"
          style={{ width: '40px', height: '1px', background: 'var(--color-terracotta)', transformOrigin: 'center' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
          className="font-jost uppercase"
          style={{ fontSize: '8px', letterSpacing: '0.38em', color: 'var(--color-muted)', fontWeight: 300 }}
        >
          Beurre Pastries · Park Road · Milton · Brisbane
        </motion.p>
      </div>
    </section>
  )
}
