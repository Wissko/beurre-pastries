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
      style={{ minHeight: '75vh' }}
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
          style={{ background: 'linear-gradient(to bottom, rgba(17,17,17,0.32), rgba(17,17,17,0.55))' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          className="font-cormorant italic"
          style={{
            fontSize: 'clamp(34px, 6.5vw, 77px)',
            color: '#ffffff',
            lineHeight: 1.15,
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
        >
          Every piece
          <br />
          tells a story.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-jost uppercase mt-8"
          style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}
        >
          Beurre Pastries · Brisbane
        </motion.p>
      </div>
    </section>
  )
}
