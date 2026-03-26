'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const wipeEase = [0.76, 0, 0.24, 1] as const
const textEase = [0.22, 1, 0.36, 1] as const

// Particules organiques
const PARTICLES = [
  { left: '8%',  top: '40%', duration: '10s', delay: '0s' },
  { left: '85%', top: '60%', duration: '8s',  delay: '1.8s' },
  { left: '92%', top: '30%', duration: '12s', delay: '0.5s' },
]

export default function About() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const textRef = useRef(null)
  const text2Ref = useRef(null)
  const text3Ref = useRef(null)

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' })
  const textInView = useInView(textRef, { once: true, margin: '-80px' })

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: '#faf8f4' }}
    >
      {/* Particules */}
      {sectionInView && PARTICLES.map((p, i) => (
        <span key={i} className="particle" style={{ left: p.left, top: p.top, animationDuration: p.duration, animationDelay: p.delay }} />
      ))}

      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>01</span>

      {/* ── Mobile layout ── */}
      <div className="lg:hidden" style={{ maxWidth: '100%' }}>
        {/* Image — wipe reveal horizontal */}
        <div
          ref={imgRef}
          className="mobile-full-bleed"
          style={{ position: 'relative', aspectRatio: '3/4', marginBottom: '48px', overflow: 'hidden' }}
        >
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={imgInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.4, delay: 0, ease: wipeEase }}
          >
            <Image
              src="/images/art.jpg"
              alt="Will Leung crafting pastry at Beurre Pastries, Milton Brisbane"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>

        {/* Text block — séquencé */}
        <div ref={textRef} style={{ paddingLeft: '4px', paddingRight: '4px' }}>
          {/* Chapter overline — +300ms */}
          <motion.span
            className="chapter-overline"
            initial={{ opacity: 0 }}
            animate={textInView ? { opacity: 0.85 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: textEase }}
          >
            Chapter 01 · The Beginning
          </motion.span>

          {/* Label — +700ms */}
          <motion.p
            className="font-jost uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: textEase }}
            style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Our Story
          </motion.p>

          {/* Title — +700ms */}
          <motion.h2
            className="font-cormorant italic leading-tight mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: textEase }}
            style={{ fontSize: 'clamp(34px, 9vw, 54px)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            From Christchurch
            <br />to Park Road.
          </motion.h2>

          {/* Paragraphe 1 — +700ms */}
          <motion.p
            className="font-jost leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: textEase }}
            style={{ fontSize: '14px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: '24px' }}
          >
            Will Leung baked his first croissants under the name LeBakerman in Christchurch.
            He moved to Brisbane with a simple idea: a small counter, honest pastry, and
            coffee worth waking up for.
          </motion.p>

          {/* Paragraphe 2 — +900ms */}
          <motion.p
            className="font-jost leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.9, ease: textEase }}
            style={{ fontSize: '14px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: '24px' }}
          >
            Beurre Pastries sits on Park Road in Milton, across from La Dolce Vita.
            Most mornings it's Bear Bones Coffee and something laminated. Some days there's
            a black sesame morning bun with yuzu glaze, or a Pain Suisse loaded with
            peanut butter, Belgian chocolate and morello cherries.
          </motion.p>

          {/* Paragraphe 3 — +1100ms */}
          <motion.p
            className="font-jost leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.1, ease: textEase }}
            style={{ fontSize: '14px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8 }}
          >
            Nothing here is mass-produced. The specials rotate. The regulars know.
          </motion.p>
        </div>

        {/* Second image */}
        <div className="mobile-full-bleed" style={{ position: 'relative', aspectRatio: '3/2', marginTop: '32px', overflow: 'hidden' }}>
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={textInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: wipeEase }}
          >
            <Image src="/images/beurre.jpg" alt="Beurre Pastries — Park Road Milton" fill className="object-cover" sizes="100vw" />
          </motion.div>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:flex w-full" style={{ maxWidth: '1400px', margin: '0 auto', gap: '6rem', alignItems: 'stretch' }}>
        {/* Image — left 60%, wipe reveal */}
        <div className="flex-1" style={{ position: 'relative', height: '80vh', flexBasis: '55%', overflow: 'hidden' }}>
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={imgInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.4, delay: 0, ease: wipeEase }}
            ref={imgRef}
          >
            <Image src="/images/art.jpg" alt="Pastry craft — Beurre Pastries Brisbane" fill className="object-cover" sizes="55vw" />
          </motion.div>
          {/* Floating second image */}
          <div style={{ position: 'absolute', bottom: '-60px', right: '-40px', width: '240px', height: '320px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(26,18,8,0.10)' }}>
            <motion.div
              style={{ position: 'absolute', inset: 0 }}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={imgInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.4, delay: 0.5, ease: wipeEase }}
            >
              <Image src="/images/beurre.jpg" alt="Beurre counter" fill className="object-cover" sizes="240px" />
            </motion.div>
          </div>
        </div>

        {/* Text — right 40%, séquencé */}
        <div ref={textRef} className="flex-1 flex flex-col justify-center" style={{ flexBasis: '45%', maxWidth: '480px' }}>
          {/* Image overlay — 0ms */}
          {/* Chapter overline — +300ms */}
          <motion.span
            className="chapter-overline"
            initial={{ opacity: 0 }}
            animate={textInView ? { opacity: 0.85 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: textEase }}
          >
            Chapter 01 · The Beginning
          </motion.span>

          {/* Title — +700ms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: textEase }}
          >
            <p className="font-jost uppercase mb-7" style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}>
              Our Story
            </p>
            <h2
              className="font-cormorant italic leading-tight mb-10"
              style={{ fontSize: 'clamp(2.5rem, 3.5vw, 4rem)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.04em' }}
            >
              From Christchurch
              <br />to Park Road.
            </h2>
          </motion.div>

          {/* Paragraphe 1 — +700ms */}
          <motion.p
            className="font-jost leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: textEase }}
            style={{ fontSize: '15px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: '24px' }}
          >
            Will Leung baked his first croissants under the name LeBakerman in Christchurch.
            He moved to Brisbane with a simple idea: a small counter, honest pastry, and
            coffee worth waking up for.
          </motion.p>

          {/* Paragraphe 2 — +900ms */}
          <motion.p
            className="font-jost leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.9, ease: textEase }}
            style={{ fontSize: '15px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: '24px' }}
          >
            Beurre Pastries sits on Park Road in Milton, across from La Dolce Vita.
            Most mornings it's Bear Bones Coffee and something laminated. Some days there's
            a black sesame morning bun with yuzu glaze, or a Pain Suisse loaded with
            peanut butter, Belgian chocolate and morello cherries.
          </motion.p>

          {/* Paragraphe 3 — +1100ms */}
          <motion.p
            className="font-jost leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.1, ease: textEase }}
            style={{ fontSize: '15px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8 }}
          >
            Nothing here is mass-produced. The specials rotate. The regulars know.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
