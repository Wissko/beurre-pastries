'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const workshops = [
  {
    title: 'Croissant Masterclass',
    duration: '4 hours',
    description:
      'Master the art of laminated dough. Learn hand-folding techniques and take home your own batch of golden croissants.',
  },
  {
    title: 'French Tart Atelier',
    duration: '3 hours',
    description:
      'From sablé dough to crème pâtissière — build a classic French tart from start to finish under expert guidance.',
  },
  {
    title: 'Choux & Éclairs',
    duration: '3.5 hours',
    description:
      'Conquer the delicate science of choux pastry. Pipe, bake, fill and glaze your own éclairs and Paris-Brest.',
  },
]

export default function Workshops() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="workshops"
      className="section-padding"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            ref={ref}
            className="relative img-hover order-2 md:order-1"
            style={{ aspectRatio: '4/5' }}
          >
            <Image
              src="/images/workshop.jpg"
              alt="French pastry workshop at Beurre Brisbane"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Corner accent */}
            <div
              className="absolute -top-4 -left-4 w-16 h-16 pointer-events-none"
              style={{ border: '1px solid var(--color-gold)', borderRight: 'none', borderBottom: 'none' }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-16 h-16 pointer-events-none"
              style={{ border: '1px solid var(--color-gold)', borderLeft: 'none', borderTop: 'none' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <p
              className="font-jost text-xs tracking-[0.3em] uppercase mb-5"
              style={{ color: 'var(--color-gold)' }}
            >
              Workshops
            </p>
            <h2
              className="font-cormorant italic leading-tight mb-6"
              style={{ fontSize: 'clamp(34px, 4.5vw, 54px)', color: 'var(--color-dark)' }}
            >
              Learn the Art of
              <br />
              French Pastry
            </h2>
            <p
              className="font-jost text-base leading-relaxed mb-10"
              style={{ color: 'var(--color-accent)', maxWidth: '420px' }}
            >
              Step into our kitchen and discover the joy of making pastry from scratch. Our
              intimate workshops are designed for all skill levels — from curious beginners to
              dedicated home bakers.
            </p>

            {/* Workshop list */}
            <div className="space-y-6 mb-10">
              {workshops.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="flex gap-5 items-start"
                >
                  <div
                    className="flex-shrink-0 w-px self-stretch mt-1"
                    style={{ background: 'var(--color-blush)' }}
                  />
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3
                        className="font-cormorant text-lg"
                        style={{ color: 'var(--color-dark)' }}
                      >
                        {w.title}
                      </h3>
                      <span
                        className="font-jost text-xs tracking-wider"
                        style={{ color: 'var(--color-gold)' }}
                      >
                        {w.duration}
                      </span>
                    </div>
                    <p className="font-jost text-sm leading-relaxed" style={{ color: 'var(--color-accent)' }}>
                      {w.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://instagram.com/beurrepastriesbne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-xs tracking-[0.18em] uppercase px-8 py-4 transition-all duration-400"
              style={{
                background: 'var(--color-dark)',
                color: 'var(--color-bg)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-dark)'
              }}
            >
              Book via Instagram
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
