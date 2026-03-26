'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * SectionTransition — remplace ChapterSeparator
 * Une fine ligne terracotta qui glisse de gauche à droite au scroll,
 * puis disparaît — comme la page qui se tourne.
 */
export default function SectionTransition() {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true)
          setShow(true)
          // Disparaît après 1.2s (0.8s glisse + 0.4s fade out)
          setTimeout(() => setShow(false), 1200)
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered])

  return (
    <div ref={ref} className="section-transition-wrap" aria-hidden="true">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              scaleX: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              opacity: { duration: 0.4, delay: 0.8 },
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'var(--color-terracotta)',
              transformOrigin: 'left center',
              opacity: 0.5,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
