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
      style={{ minHeight: '80vh' }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/signature.jpg"
          alt="Beurre signature creation — every piece tells a story"
          fill
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(26,20,16,0.4), rgba(26,20,16,0.65))' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mx-auto mb-8 h-px w-20 origin-center"
          style={{ background: 'var(--color-gold)' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-cormorant italic"
          style={{
            fontSize: 'clamp(42px, 8vw, 96px)',
            color: '#faf8f4',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}
        >
          Every piece
          <br />
          tells a story.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="font-jost text-sm tracking-[0.2em] uppercase mt-8"
          style={{ color: 'rgba(232,213,196,0.7)' }}
        >
          Beurre Pastries · Brisbane
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
          className="mx-auto mt-8 h-px w-20 origin-center"
          style={{ background: 'var(--color-gold)' }}
        />
      </div>
    </section>
  )
}
