'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p
              className="font-jost text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--color-gold)' }}
            >
              Our Story
            </p>
            <h2
              className="font-cormorant italic leading-tight mb-8"
              style={{ fontSize: 'clamp(36px, 5vw, 58px)', color: 'var(--color-dark)' }}
            >
              Crafted with butter,
              <br />
              made with love.
            </h2>
            <div
              className="font-jost text-base leading-relaxed space-y-5"
              style={{ color: 'var(--color-accent)', maxWidth: '480px' }}
            >
              <p>
                Born from a deep reverence for the French pastry tradition, Beurre brings the
                artistry of a Parisian pâtisserie to the heart of Brisbane. Each piece is shaped
                by hand, layered with intention, and finished with the care that only a true
                passion for craft can inspire.
              </p>
              <p>
                We source the finest ingredients — single-origin chocolates, seasonal fruits,
                cultured butters — because great pastry begins long before it reaches your hands.
                Every morning, our kitchen fills with the warmth of freshly laminated doughs and
                the delicate perfume of vanilla and caramel.
              </p>
              <p>
                This is not fast food. This is slow, deliberate, beautiful work — and we
                wouldn't have it any other way.
              </p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              className="mt-10 h-px origin-left"
              style={{ background: 'linear-gradient(to right, var(--color-gold), transparent)', maxWidth: '120px' }}
            />
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative img-hover"
            style={{ aspectRatio: '3/4' }}
          >
            <Image
              src="/images/craft.jpg"
              alt="Artisan pastry making at Beurre"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative border */}
            <div
              className="absolute -bottom-4 -right-4 w-full h-full pointer-events-none"
              style={{ border: '1px solid var(--color-blush)', zIndex: -1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
