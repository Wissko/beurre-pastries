'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const wipeEase = [0.76, 0, 0.24, 1] as const
const textEase = [0.22, 1, 0.36, 1] as const

// Particules — section sombre
const PARTICLES = [
  { left: '15%', top: '35%', duration: '10s', delay: '0s' },
  { left: '80%', top: '55%', duration: '8s',  delay: '2s' },
  { left: '55%', top: '75%', duration: '13s', delay: '1s' },
]

const workshops = [
  {
    title: 'Croissant Masterclass',
    duration: '4 hours',
    description:
      'Start with flour, end with a dozen golden croissants to take home. Will walks you through the lamination, the turns, the resting. No shortcuts.',
  },
  {
    title: 'Morning Bun Atelier',
    duration: '3 hours',
    description:
      'Roll your own cinnamon monkey cube or black sesame bun. Learn the dough, the shaping, the glazing. Small group, hands-on.',
  },
  {
    title: 'Pastry Foundations',
    duration: '3.5 hours',
    description:
      'Sablé, crème pâtissière, frangipane — the building blocks of everything at Beurre. A session for people who want to understand the why, not just the how.',
  },
]

export default function Workshops() {
  const sectionRef = useRef(null)
  const mobileImgRef = useRef(null)
  const mobileTextRef = useRef(null)
  const desktopImgRef = useRef(null)
  const desktopTextRef = useRef(null)

  const sectionInView = useInView(sectionRef, { once: true, amount: 0, margin: "0px 0px -5% 0px" })
  const mobileImgInView = useInView(mobileImgRef, { once: true, amount: 0, margin: "0px 0px -5% 0px" })
  const mobileTextInView = useInView(mobileTextRef, { once: true, amount: 0, margin: "0px 0px -5% 0px" })
  const desktopImgInView = useInView(desktopImgRef, { once: true, amount: 0, margin: "0px 0px -5% 0px" })
  const desktopTextInView = useInView(desktopTextRef, { once: true, amount: 0, margin: "0px 0px -5% 0px" })

  return (
    <section
      ref={sectionRef}
      id="workshops"
      className="section-padding relative"
      style={{ background: '#1a1208', overflowX: 'hidden' }}
    >
      {/* Particules sur fond sombre */}
      {sectionInView && PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
            background: 'rgba(194, 96, 31, 0.18)',
          }}
        />
      ))}

      <span
        className="section-number hidden lg:block"
        style={{ top: '4rem', left: '6rem', color: 'rgba(194,96,31,0.35)' }}
      >
        04
      </span>

      {/* ── Mobile layout ── */}
      <div className="lg:hidden motion-safe-fallback" style={{ maxWidth: '100%' }}>
        {/* Image — wipe + noir et blanc doux */}
        <div
          ref={mobileImgRef}
          className="relative mobile-full-bleed"
          style={{ aspectRatio: '4/5', marginBottom: '48px', overflow: 'hidden' }}
        >
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={mobileImgInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.4, delay: 0, ease: wipeEase }}
          >
            <Image
              src="/images/poudre.jpg"
              alt="Pastry workshop at Beurre Brisbane"
              fill
              className="object-cover"
              sizes="100vw"
              style={{ filter: 'grayscale(30%)' }}
            />
          </motion.div>
        </div>

        <div ref={mobileTextRef} style={{ paddingLeft: '4px', paddingRight: '4px' }}>
          {/* Chapter overline — 0ms */}
          <motion.span
            className="chapter-overline"
            initial={{ opacity: 0 }}
            animate={mobileTextInView ? { opacity: 0.85 } : {}}
            transition={{ duration: 1.0, delay: 0, ease: textEase }}
          >
            Chapter 04 · The Hands
          </motion.span>

          {/* Label — +300ms */}
          <motion.p
            className="font-jost uppercase mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={mobileTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: textEase }}
            style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(194,150,100,0.6)', fontWeight: 300 }}
          >
            Workshops
          </motion.p>

          {/* Titre — +300ms, blanc cassé */}
          <motion.h2
            className="font-cormorant italic leading-tight mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={mobileTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: textEase }}
            style={{ fontSize: 'clamp(34px, 9vw, 52px)', color: '#f5f0e8', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            Come learn
            <br />in the kitchen.
          </motion.h2>

          {/* Texte — +700ms */}
          <motion.p
            className="font-jost leading-relaxed mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={mobileTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: textEase }}
            style={{ fontSize: '14px', color: 'rgba(245,240,232,0.6)', fontWeight: 300, lineHeight: 1.8 }}
          >
            Small groups only. Will teaches. You leave with your own batch and a better
            understanding of what goes into the counter every morning.
          </motion.p>

          {/* Workshop list — item par item */}
          <WorkshopList isInView={mobileTextInView} />
          <WorkshopCTA />
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div
        className="hidden lg:flex gap-24 items-start motion-safe-fallback"
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        {/* Text — 60% */}
        <div ref={desktopTextRef} className="flex-1" style={{ flexBasis: '60%' }}>
          {/* Chapter overline — 0ms */}
          <motion.span
            className="chapter-overline"
            initial={{ opacity: 0 }}
            animate={desktopTextInView ? { opacity: 0.85 } : {}}
            transition={{ duration: 1.0, delay: 0, ease: textEase }}
          >
            Chapter 04 · The Hands
          </motion.span>

          {/* Label — +300ms */}
          <motion.p
            className="font-jost uppercase mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={desktopTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: textEase }}
            style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'rgba(194,150,100,0.6)', fontWeight: 300 }}
          >
            Workshops
          </motion.p>

          {/* Titre — +300ms */}
          <motion.h2
            className="font-cormorant italic leading-tight mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={desktopTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: textEase }}
            style={{ fontSize: 'clamp(3rem, 4vw, 5rem)', color: '#f5f0e8', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            Come learn
            <br />in the kitchen.
          </motion.h2>

          {/* Texte — +700ms */}
          <motion.p
            className="font-jost leading-relaxed mb-16"
            initial={{ opacity: 0, y: 16 }}
            animate={desktopTextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.7, ease: textEase }}
            style={{ fontSize: '15px', color: 'rgba(245,240,232,0.6)', maxWidth: '500px', fontWeight: 300, lineHeight: 1.8 }}
          >
            Small groups only. Will teaches. You leave with your own batch and a better
            understanding of what goes into the counter every morning.
          </motion.p>

          {/* Workshop list — item par item */}
          <WorkshopList isInView={desktopTextInView} desktop />
          <WorkshopCTA />
        </div>

        {/* Image — 40%, sticky, noir et blanc doux */}
        <div
          ref={desktopImgRef}
          className="workshops-sticky-img"
          style={{ flexBasis: '40%', aspectRatio: '4/5', position: 'relative', overflow: 'hidden' }}
        >
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={desktopImgInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.4, delay: 0, ease: wipeEase }}
          >
            <Image
              src="/images/poudre.jpg"
              alt="Will Leung teaching a pastry workshop at Beurre Brisbane"
              fill
              className="object-cover"
              sizes="40vw"
              style={{ filter: 'grayscale(30%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WorkshopList({ isInView, desktop }: { isInView: boolean; desktop?: boolean }) {
  const ease = [0.22, 1, 0.36, 1] as const
  return (
    <div className="space-y-8 mb-12">
      {workshops.map((w, i) => (
        <motion.div
          key={w.title}
          initial={{ opacity: 0, x: 16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.9 + i * 0.2, ease }}
          className="flex gap-5 items-start motion-safe-fallback"
        >
          <div className="flex-shrink-0 w-px self-stretch mt-1" style={{ background: 'rgba(194,96,31,0.3)' }} />
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <h3
                className="font-cormorant italic"
                style={{ fontSize: desktop ? '20px' : '19px', color: '#f5f0e8', fontWeight: 300, letterSpacing: '0.03em' }}
              >
                {w.title}
              </h3>
              <span className="font-jost" style={{ fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(194,150,100,0.55)', fontWeight: 300 }}>
                {w.duration}
              </span>
            </div>
            <p className="font-jost leading-relaxed" style={{ fontSize: '13px', color: 'rgba(245,240,232,0.55)', fontWeight: 300, lineHeight: 1.7 }}>
              {w.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function WorkshopCTA() {
  return (
    <a
      href="https://instagram.com/beurrepastriesbne"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 font-jost uppercase"
      style={{
        fontSize: '9px',
        letterSpacing: '0.20em',
        fontWeight: 300,
        color: 'var(--color-terracotta)',
        paddingBottom: '3px',
        borderBottom: '1px solid rgba(194,96,31,0.35)',
        transition: 'border-color 0.3s',
      }}
    >
      Book via Instagram
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  )
}
