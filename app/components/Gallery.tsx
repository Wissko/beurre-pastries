'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const galleryImages = [
  { src: '/images/cafecroissant.jpg', caption: 'Morning ritual' },
  { src: '/images/fraise.jpg', caption: 'Strawberry season' },
  { src: '/images/poudre.jpg', caption: 'Dusted' },
  { src: '/images/confitur.jpg', caption: 'House jam' },
  { src: '/images/blanc.jpg', caption: 'Clean' },
  { src: '/images/matcha.jpg', caption: 'Black sesame' },
  { src: '/images/art.jpg', caption: 'Craft' },
  { src: '/images/late.jpg', caption: 'Late morning' },
  { src: '/images/beurre.jpg', caption: 'The counter' },
  { src: '/images/life.jpg', caption: 'In the kitchen' },
]

const ARC_RADIUS = 1400
const SPREAD = 8
const textEase = [0.22, 1, 0.36, 1] as const

export default function Gallery() {
  const headerRef = useRef(null)
  const carouselRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })
  const carouselInView = useInView(carouselRef, { once: true, margin: '-80px' })

  const [active, setActive] = useState(4)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const ITEM_WIDTH = isDesktop ? 320 : 260
  const ITEM_HEIGHT = isDesktop ? 420 : 340
  const total = galleryImages.length

  const getItemStyle = (index: number) => {
    const diff = index - active
    const angle = diff * SPREAD
    const angleRad = (angle * Math.PI) / 180
    const x = Math.sin(angleRad) * ARC_RADIUS
    const y = ARC_RADIUS - Math.cos(angleRad) * ARC_RADIUS
    const scale = 1 - Math.abs(diff) * 0.06
    const opacity = 1 - Math.abs(diff) * 0.18
    const blur = Math.abs(diff) * 0.8
    const zIndex = total - Math.abs(diff)
    return { x, y: -y * 0.6, scale, opacity, blur, zIndex }
  }

  const goTo = (index: number) => {
    setActive(Math.max(0, Math.min(total - 1, index)))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false)
    dragStart.current = e.clientX
  }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (Math.abs(e.clientX - dragStart.current) > 5) setIsDragging(true)
  }
  const handleMouseUp = (e: React.MouseEvent) => {
    const delta = dragStart.current - e.clientX
    if (Math.abs(delta) > 40) goTo(active + (delta > 0 ? 1 : -1))
  }
  const touchStart = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) goTo(active + (delta > 0 ? 1 : -1))
  }

  return (
    <section
      id="gallery"
      className="section-padding overflow-hidden relative"
      style={{ background: '#f5f2ed' }}
    >
      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>05</span>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header — séquencé */}
        <div ref={headerRef} className="text-center mb-16">
          {/* Chapter overline — 0ms */}
          <motion.span
            className="chapter-overline"
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 0.85 } : {}}
            transition={{ duration: 1.0, delay: 0, ease: textEase }}
            style={{ marginBottom: '16px' }}
          >
            Chapter 03 · The Light
          </motion.span>

          {/* Label — +300ms */}
          <motion.p
            className="font-jost uppercase mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: textEase }}
            style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Gallery
          </motion.p>

          {/* Titre — +300ms */}
          <motion.h2
            className="font-cormorant italic"
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: textEase }}
            style={{ fontSize: 'clamp(27px, 4vw, 5rem)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.08em' }}
          >
            A few mornings.
          </motion.h2>
        </div>

        {/* Arc Carousel — images avec stagger clip-path */}
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0 }}
          animate={carouselInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative select-none"
          style={{ height: `${ITEM_HEIGHT + 80}px`, cursor: 'grab' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {galleryImages.map((img, i) => {
              const { x, y, scale, opacity, blur, zIndex } = getItemStyle(i)
              // Stagger : chaque image apparaît avec un délai de +300ms par index visible
              const staggerDelay = carouselInView ? Math.abs(i - active) * 0.3 : 0

              return (
                <motion.div
                  key={`${img.src}-${i}`}
                  animate={{ x, y, scale, opacity }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute"
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    zIndex,
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                    cursor: i === active ? 'grab' : 'pointer',
                  }}
                  onClick={() => !isDragging && goTo(i)}
                >
                  <motion.div
                    className="w-full h-full overflow-hidden relative"
                    style={{
                      borderRadius: '3px',
                      boxShadow: i === active
                        ? '0 24px 64px rgba(26,18,8,0.12)'
                        : '0 4px 16px rgba(26,18,8,0.04)',
                    }}
                    initial={{ clipPath: 'inset(0 0 100% 0)' }}
                    animate={carouselInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
                    transition={{ duration: 1.0, delay: 0.4 + staggerDelay, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      className="object-cover"
                      sizes={`${ITEM_WIDTH}px`}
                      draggable={false}
                    />
                    {i !== active && (
                      <div className="absolute inset-0" style={{ background: 'rgba(245,242,237,0.3)' }} />
                    )}
                  </motion.div>
                  {i === active && (
                    <motion.p
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="font-jost text-center mt-3"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.24em',
                        color: 'var(--color-muted)',
                        fontWeight: 300,
                        textTransform: 'uppercase',
                      }}
                    >
                      {img.caption}
                    </motion.p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? '20px' : '5px',
                height: '5px',
                borderRadius: '3px',
                background: i === active ? 'var(--color-terracotta)' : 'var(--color-border)',
                cursor: 'pointer',
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow nav */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className="w-10 h-10 flex items-center justify-center border transition-all duration-300 disabled:opacity-30"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-dark)', cursor: 'pointer' }}
            onMouseEnter={(e) => { if (!(e.currentTarget as HTMLButtonElement).disabled) e.currentTarget.style.borderColor = 'var(--color-terracotta)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            className="w-10 h-10 flex items-center justify-center border transition-all duration-300 disabled:opacity-30"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-dark)', cursor: 'pointer' }}
            onMouseEnter={(e) => { if (!(e.currentTarget as HTMLButtonElement).disabled) e.currentTarget.style.borderColor = 'var(--color-terracotta)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
