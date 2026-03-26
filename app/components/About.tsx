'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-20 md:gap-32 items-center">
          {/* Text — 3/5 */}
          <motion.div
            ref={ref}
            className="md:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p
              className="font-jost uppercase mb-7"
              style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'var(--color-muted)', fontWeight: 300 }}
            >
              Our Story
            </p>
            <h2
              className="font-cormorant italic leading-tight mb-10"
              style={{
                fontSize: 'clamp(28px, 4vw, 46px)',
                color: 'var(--color-dark)',
                fontWeight: 300,
                letterSpacing: '0.04em',
              }}
            >
              Crafted with butter,
              <br />
              made with love.
            </h2>
            <div
              className="font-jost leading-relaxed space-y-6"
              style={{ fontSize: '14px', color: 'var(--color-accent)', fontWeight: 300, letterSpacing: '0.01em', maxWidth: '520px' }}
            >
              <p>
                Born from a deep reverence for the French pastry tradition, Beurre brings the
                artistry of a Parisian pâtisserie to the heart of Brisbane. Each piece is shaped
                by hand, layered with intention, and finished with care.
              </p>
              <p>
                We source the finest ingredients — single-origin chocolates, seasonal fruits,
                cultured butters — because great pastry begins long before it reaches your hands.
              </p>
              <p>
                This is not fast food. This is slow, deliberate, beautiful work.
              </p>
            </div>
          </motion.div>

          {/* Images — 2/5 */}
          <motion.div
            className="md:col-span-2 flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Main image: the space / café */}
            <div style={{ aspectRatio: '3/4', position: 'relative' }}>
              <Image
                src="/images/beurre.jpg"
                alt="Beurre — our café and patisserie space"
                fill
                className="object-cover img-hover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {/* Secondary image: the craft */}
            <div style={{ aspectRatio: '3/2', position: 'relative' }}>
              <Image
                src="/images/craft.jpg"
                alt="Artisan pastry making at Beurre"
                fill
                className="object-cover img-hover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
