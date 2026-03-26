'use client'

import { useRef, useEffect, useState } from 'react'

interface Props {
  number: string // e.g. "01"
}

export default function ChapterSeparator({ number }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setVisible(true)
          setTriggered(true)
          // Reset after animation so it can re-trigger on scroll-back
          // (but since once=true spirit — we keep it)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered])

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-10 pointer-events-none select-none"
      aria-hidden="true"
    >
      {visible && (
        <span
          className="chapter-number-label font-cormorant"
          style={{
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: '10px',
            letterSpacing: '0.28em',
            color: 'var(--color-terracotta)',
            marginBottom: '8px',
            display: 'block',
          }}
        >
          {number}
        </span>
      )}
      <span
        className={`chapter-separator-line${visible ? ' animated' : ''}`}
      />
    </div>
  )
}
