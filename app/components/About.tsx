'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Image wipe: left → right, like a page revealing
const wipeEase = [0.76, 0, 0.24, 1] as const
// Title/text easing
const textEase = [0.22, 1, 0.36, 1] as const

export default function About() {
  const mobileRef = useRef(null)
  const desktopRef = useRef(null)
  const imgRef = useRef(null)
  const isInViewMobile = useInView(mobileRef, { once: true, margin: '-80px' })
  const isInViewDesktop = useInView(desktopRef, { once: true, margin: '-80px' })
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section-padding relative" style={{ background: 'var(--color-surface)' }}>
      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>01</span>

      {/* ── Mobile layout ── */}
      <div className="lg:hidden" style={{ maxWidth: '100%' }}>
        {/* Image — horizontal wipe reveal */}
        <div
          ref={imgRef}
          className="mobile-full-bleed"
          style={{
            position: 'relative',
            aspectRatio: '3/4',
            marginBottom: '48px',
            overflow: 'hidden',
          }}
        >
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={imgInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: wipeEase }}
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

        {/* Text */}
        <motion.div
          ref={mobileRef}
          initial={{ opacity: 0, y: 16 }}
          animate={isInViewMobile ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.6, ease: textEase }}
          style={{ paddingLeft: '4px', paddingRight: '4px' }}
        >
          {/* Chapter overline */}
          <span className="chapter-overline">Chapter 01 · The Beginning</span>

          <p
            className="font-jost uppercase mb-6"
            style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Our Story
          </p>
          <h2
            className="font-cormorant italic leading-tight mb-10"
            style={{ fontSize: 'clamp(34px, 9vw, 54px)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            From Christchurch
            <br />
            to Park Road.
          </h2>
          <div
            className="font-jost leading-relaxed space-y-6 mb-12"
            style={{ fontSize: '14px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8 }}
          >
            <p>
              Will Leung baked his first croissants under the name LeBakerman in Christchurch.
              He moved to Brisbane with a simple idea: a small counter, honest pastry, and
              coffee worth waking up for.
            </p>
            <p>
              Beurre Pastries sits on Park Road in Milton, across from La Dolce Vita.
              Most mornings it's Bear Bones Coffee and something laminated. Some days there's
              a black sesame morning bun with yuzu glaze, or a Pain Suisse loaded with
              peanut butter, Belgian chocolate and morello cherries.
            </p>
            <p>
              Nothing here is mass-produced. The specials rotate. The regulars know.
            </p>
          </div>
        </motion.div>

        {/* Second image — horizontal wipe */}
        <div
          className="mobile-full-bleed"
          style={{ position: 'relative', aspectRatio: '3/2', marginTop: '32px', overflow: 'hidden' }}
        >
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInViewMobile ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.2, delay: 0.4, ease: wipeEase }}
          >
            <Image
              src="/images/beurre.jpg"
              alt="Beurre Pastries — Park Road Milton"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden lg:flex w-full" style={{ maxWidth: '1400px', margin: '0 auto', gap: '6rem', alignItems: 'stretch' }}>
        {/* Image — left column, horizontal wipe */}
        <div
          className="flex-1"
          style={{ position: 'relative', height: '80vh', flexBasis: '50%', overflow: 'hidden' }}
        >
          <motion.div
            style={{ position: 'absolute', inset: 0 }}
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={isInViewDesktop ? { clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: wipeEase }}
          >
            <Image
              src="/images/art.jpg"
              alt="Pastry craft — Beurre Pastries Brisbane"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </motion.div>
          {/* Floating second image */}
          <div style={{ position: 'absolute', bottom: '-60px', right: '-40px', width: '240px', height: '320px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(26,18,8,0.10)' }}>
            <motion.div
              style={{ position: 'absolute', inset: 0 }}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={isInViewDesktop ? { clipPath: 'inset(0 0% 0 0)' } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: wipeEase }}
            >
              <Image
                src="/images/beurre.jpg"
                alt="Beurre counter"
                fill
                className="object-cover"
                sizes="240px"
              />
            </motion.div>
          </div>
        </div>

        {/* Text — right column, slow fade-in after image */}
        <motion.div
          ref={desktopRef}
          className="flex-1 flex flex-col justify-center"
          style={{ flexBasis: '50%', maxWidth: '480px' }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInViewDesktop ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.6, ease: textEase }}
        >
          {/* Chapter overline */}
          <span className="chapter-overline">Chapter 01 · The Beginning</span>

          <div className="section-title-decorated">
            <p
              className="font-jost uppercase mb-7"
              style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}
            >
              Our Story
            </p>
          </div>
          <h2
            className="font-cormorant italic leading-tight mb-10"
            style={{ fontSize: 'clamp(2.5rem, 3.5vw, 4rem)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            From Christchurch
            <br />
            to Park Road.
          </h2>
          <div
            className="font-jost leading-relaxed space-y-6"
            style={{ fontSize: '15px', color: 'var(--color-muted)', fontWeight: 300, lineHeight: 1.8 }}
          >
            <p>
              Will Leung baked his first croissants under the name LeBakerman in Christchurch.
              He moved to Brisbane with a simple idea: a small counter, honest pastry, and
              coffee worth waking up for.
            </p>
            <p>
              Beurre Pastries sits on Park Road in Milton, across from La Dolce Vita.
              Most mornings it's Bear Bones Coffee and something laminated. Some days there's
              a black sesame morning bun with yuzu glaze, or a Pain Suisse loaded with
              peanut butter, Belgian chocolate and morello cherries.
            </p>
            <p>
              Nothing here is mass-produced. The specials rotate. The regulars know.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
