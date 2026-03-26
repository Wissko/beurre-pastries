'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const mobileRef = useRef(null)
  const desktopRef = useRef(null)
  const isInViewMobile = useInView(mobileRef, { once: true, margin: '-80px' })
  const isInViewDesktop = useInView(desktopRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding relative" style={{ background: 'var(--color-surface)' }}>
      {/* Section number */}
      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>01</span>

      {/* ── Mobile layout ── */}
      <div className="lg:hidden max-w-2xl mx-auto">
        <motion.div
          ref={mobileRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isInViewMobile ? { opacity: 1, y: 0 } : {}}
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
            style={{ fontSize: 'clamp(28px, 6vw, 46px)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            Crafted with butter,
            <br />
            made with love.
          </h2>
          <div
            className="font-jost leading-relaxed space-y-6 mb-12"
            style={{ fontSize: '14px', color: 'var(--color-accent)', fontWeight: 300, letterSpacing: '0.01em' }}
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

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={isInViewMobile ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <div style={{ aspectRatio: '3/4', position: 'relative' }}>
            <Image
              src="/images/beurre.jpg"
              alt="Beurre — our café and patisserie space"
              fill
              className="object-cover img-hover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div style={{ aspectRatio: '3/2', position: 'relative' }}>
            <Image
              src="/images/art.jpg"
              alt="Artisan pastry making at Beurre"
              fill
              className="object-cover img-hover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Desktop layout: 50/50 — image left, text right ── */}
      <div className="hidden lg:flex w-full" style={{ maxWidth: '1400px', margin: '0 auto', gap: '6rem', alignItems: 'stretch' }}>
        {/* Image — full height left column */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -40 }}
          animate={isInViewDesktop ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          style={{ position: 'relative', height: '80vh', flexBasis: '50%' }}
        >
          <Image
            src="/images/art.jpg"
            alt="Artisan pastry at Beurre Brisbane"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div
            className="absolute bottom-0 right-0 w-1/2"
            style={{ height: '40%', marginRight: '-3rem', marginBottom: '-3rem', position: 'absolute' }}
          >
            <div style={{ position: 'relative', width: '260px', height: '340px', bottom: '-60px', left: 'calc(100% - 220px)' }}>
              <Image
                src="/images/beurre.jpg"
                alt="Beurre pastries"
                fill
                className="object-cover"
                sizes="260px"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Text — right column, vertically centered */}
        <motion.div
          ref={desktopRef}
          className="flex-1 flex flex-col justify-center"
          style={{ flexBasis: '50%', maxWidth: '480px' }}
          initial={{ opacity: 0, x: 40 }}
          animate={isInViewDesktop ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="section-title-decorated">
            <p
              className="font-jost uppercase mb-7"
              style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'var(--color-muted)', fontWeight: 300 }}
            >
              Our Story
            </p>
          </div>
          <h2
            className="font-cormorant italic leading-tight mb-10"
            style={{ fontSize: 'clamp(2.5rem, 3.5vw, 4rem)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            Crafted with butter,
            <br />
            made with love.
          </h2>
          <div
            className="font-jost leading-relaxed space-y-6"
            style={{ fontSize: '15px', color: 'var(--color-accent)', fontWeight: 300, letterSpacing: '0.01em' }}
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
      </div>
    </section>
  )
}
