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
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 md:gap-26 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            ref={ref}
            className="relative img-hover order-2 md:order-1"
            style={{ aspectRatio: '4/5' }}
          >
            <Image
              src="/images/art.jpg"
              alt="French pastry art workshop at Beurre Brisbane"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <p
              className="font-jost uppercase mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'var(--color-muted)', fontWeight: 300 }}
            >
              Workshops
            </p>
            <h2
              className="font-cormorant italic leading-tight mb-7"
              style={{ fontSize: 'clamp(27px, 3.6vw, 43px)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.04em' }}
            >
              Learn the Art of
              <br />
              French Pastry
            </h2>
            <p
              className="font-jost leading-relaxed mb-13"
              style={{ fontSize: '13px', color: 'var(--color-muted)', maxWidth: '420px', fontWeight: 300, marginBottom: '52px' }}
            >
              Step into our kitchen and discover the joy of making pastry from scratch. Our
              intimate workshops are designed for all skill levels.
            </p>

            {/* Workshop list */}
            <div className="space-y-8 mb-13" style={{ marginBottom: '52px' }}>
              {workshops.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="flex gap-5 items-start"
                >
                  <div
                    className="flex-shrink-0 w-px self-stretch mt-1"
                    style={{ background: 'var(--color-border)' }}
                  />
                  <div>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3
                        className="font-cormorant"
                        style={{ fontSize: '17px', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.02em' }}
                      >
                        {w.title}
                      </h3>
                      <span
                        className="font-jost"
                        style={{ fontSize: '10px', letterSpacing: '0.12em', color: 'var(--color-muted)', fontWeight: 300 }}
                      >
                        {w.duration}
                      </span>
                    </div>
                    <p
                      className="font-jost leading-relaxed"
                      style={{ fontSize: '12px', color: 'var(--color-muted)', fontWeight: 300 }}
                    >
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
              className="inline-flex items-center gap-3 font-jost uppercase transition-all duration-300"
              style={{
                fontSize: '10px',
                letterSpacing: '0.18em',
                fontWeight: 300,
                color: 'var(--color-dark)',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: '4px',
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
              Book via Instagram
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
