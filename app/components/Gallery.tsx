'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const galleryImages = [
  { src: '/images/hero.jpg', alt: 'Beurre pastry showcase' },
  { src: '/images/p1.jpg', alt: 'Mille-Feuille Vanille' },
  { src: '/images/craft.jpg', alt: 'Artisan pastry making' },
  { src: '/images/p2.jpg', alt: 'Tarte Citron Meringuée' },
  { src: '/images/signature.jpg', alt: 'Signature creation' },
  { src: '/images/p3.jpg', alt: 'Croissant au Beurre' },
  { src: '/images/workshop.jpg', alt: 'Pastry workshop' },
  { src: '/images/p4.jpg', alt: 'Paris-Brest Praliné' },
  { src: '/images/p5.jpg', alt: 'Éclair au Chocolat' },
  { src: '/images/p6.jpg', alt: 'Tarte aux Fraises' },
]

const ARC_RADIUS = 1400
const ITEM_WIDTH = 260
const ITEM_HEIGHT = 340
const SPREAD = 8 // degrees between items

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(4)
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef(0)

  const total = galleryImages.length
  const center = active

  const getItemStyle = (index: number) => {
    const diff = index - center
    const angle = diff * SPREAD
    const angleRad = (angle * Math.PI) / 180
    const x = Math.sin(angleRad) * ARC_RADIUS
    const y = ARC_RADIUS - Math.cos(angleRad) * ARC_RADIUS
    const scale = 1 - Math.abs(diff) * 0.06
    const opacity = 1 - Math.abs(diff) * 0.18
    const blur = Math.abs(diff) * 0.8
    const zIndex = total - Math.abs(diff)

    return { x, y: -y * 0.6, scale, opacity, blur, zIndex, diff }
  }

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(total - 1, index))
    setActive(clamped)
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
    if (Math.abs(delta) > 40) {
      goTo(active + (delta > 0 ? 1 : -1))
    }
  }

  // Touch support
  const touchStart = useRef(0)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) goTo(active + (delta > 0 ? 1 : -1))
  }

  return (
    <section
      id="gallery"
      className="section-padding overflow-hidden"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p
            className="font-jost uppercase mb-5"
            style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Gallery
          </p>
          <h2
            className="font-cormorant"
            style={{ fontSize: 'clamp(27px, 4vw, 43px)', color: 'var(--color-dark)', fontWeight: 300, letterSpacing: '0.10em' }}
          >
            A Visual Journey
          </h2>
        </motion.div>

        {/* Arc Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative select-none"
          style={{ height: `${ITEM_HEIGHT + 80}px` }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {galleryImages.map((img, i) => {
              const { x, y, scale, opacity, blur, zIndex } = getItemStyle(i)
              return (
                <motion.div
                  key={img.src}
                  animate={{ x, y, scale, opacity }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute cursor-pointer"
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                    zIndex,
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                  }}
                  onClick={() => !isDragging && goTo(i)}
                >
                  <div
                    className="w-full h-full overflow-hidden relative"
                    style={{
                      boxShadow:
                        i === active
                          ? '0 16px 48px rgba(17,17,17,0.10)'
                          : '0 4px 16px rgba(17,17,17,0.04)',
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="260px"
                      draggable={false}
                    />
                    {/* Overlay for non-active */}
                    {i !== active && (
                      <div
                        className="absolute inset-0"
                        style={{ background: 'rgba(255,255,255,0.25)' }}
                      />
                    )}
                  </div>
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
                background: i === active ? 'var(--color-dark)' : 'var(--color-border)',
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
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-dark)' }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) e.currentTarget.style.borderColor = 'var(--color-accent)'
            }}
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
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-dark)' }}
            onMouseEnter={(e) => {
              if (!e.currentTarget.disabled) e.currentTarget.style.borderColor = 'var(--color-accent)'
            }}
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
