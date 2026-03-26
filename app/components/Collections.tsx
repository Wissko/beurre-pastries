'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

const products = [
  {
    id: 1,
    image: '/images/cafecroissant.jpg',
    name: 'Croissant',
    description: 'Classic laminated dough. 72-hour process, AOP butter. Honey-brown crust, open crumb, nothing to hide.',
    ratio: '3/4',
  },
  {
    id: 2,
    image: '/images/fraise.jpg',
    name: 'Pain au Chocolat',
    description: 'Belgian dark chocolate, twice-wrapped in buttery layers. Best warm, first thing.',
    ratio: '4/5',
  },
  {
    id: 3,
    image: '/images/poudre.jpg',
    name: 'Cinnamon Monkey Cube',
    description: 'Pull-apart brioche, cinnamon sugar, baked in a block. Order it while you still can.',
    ratio: '3/4',
  },
  {
    id: 4,
    image: '/images/matcha.jpg',
    name: 'Black Sesame Morning Bun',
    description: 'Rolled in black sesame, glazed with yuzu. Edgy without trying.',
    ratio: '3/4',
  },
  {
    id: 5,
    image: '/images/blanc.jpg',
    name: 'Pain Suisse',
    description: 'Peanut butter, Belgian chocolate, morello cherries. Not traditional — better.',
    ratio: '4/5',
  },
  {
    id: 6,
    image: '/images/confitur.jpg',
    name: 'Seasonal Specials',
    description: "Bespoke creations that change with what's in season. Follow @beurrepastriesbne to know first.",
    ratio: '3/4',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const imgRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const imgInView = useInView(imgRef, { once: true, margin: '-60px' })

  // Asymmetric offset — every other card nudged up
  const nudge = index % 2 === 1 ? '2.5rem' : '0'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease }}
      className="group"
      style={{ marginTop: nudge, cursor: 'default' }}
    >
      {/* Image */}
      <div
        ref={imgRef}
        className="relative overflow-hidden mb-5"
        style={{ aspectRatio: product.ratio, background: 'var(--color-warm)', borderRadius: '3px' }}
      >
        <motion.div
          style={{ position: 'absolute', inset: 0 }}
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={imgInView ? { clipPath: 'inset(0% 0 0 0)' } : {}}
          transition={{ duration: 0.95, delay: index * 0.04, ease }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
        {/* Hover overlay — desktop */}
        <div className="collection-card-overlay hidden lg:flex">
          <p
            className="font-jost text-center leading-relaxed"
            style={{ fontSize: '12px', color: 'rgba(250,248,244,0.85)', fontWeight: 300, letterSpacing: '0.03em', maxWidth: '220px' }}
          >
            {product.description}
          </p>
        </div>
      </div>

      {/* Name */}
      <h3
        className="font-cormorant italic"
        style={{
          fontSize: 'clamp(20px, 3vw, 26px)',
          color: 'var(--color-dark)',
          fontWeight: 300,
          letterSpacing: '0.04em',
          marginBottom: '6px',
        }}
      >
        {product.name}
      </h3>

      {/* Description — always visible on mobile */}
      <p
        className="font-jost lg:hidden leading-relaxed"
        style={{ fontSize: '13px', color: 'var(--color-muted)', fontWeight: 300 }}
      >
        {product.description}
      </p>
    </motion.div>
  )
}

export default function Collections() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      id="collections"
      className="section-padding relative"
      style={{ background: 'var(--color-warm)' }}
    >
      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>02</span>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="section-title-decorated text-center"
          style={{ marginBottom: '80px' }}
        >
          <p
            className="font-jost uppercase mb-5"
            style={{ fontSize: '9px', letterSpacing: '0.35em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Specialties
          </p>
          <h2
            className="font-cormorant italic leading-tight"
            style={{
              fontSize: 'clamp(36px, 8vw, 5rem)',
              color: 'var(--color-dark)',
              fontWeight: 300,
              letterSpacing: '0.06em',
            }}
          >
            What Will makes.
          </h2>
          <p
            className="font-jost mt-5 mx-auto leading-relaxed"
            style={{
              fontSize: '13px',
              color: 'var(--color-muted)',
              maxWidth: '360px',
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            Some things are on the menu most days. Others appear when the season says so.
            Always made from scratch, always in small batches.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 lg:gap-y-16">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Instagram note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="text-center mt-20"
        >
          <a
            href="https://instagram.com/beurrepastriesbne"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-underline font-jost uppercase inline-block"
            style={{
              fontSize: '9px',
              letterSpacing: '0.28em',
              color: 'var(--color-muted)',
              paddingBottom: '3px',
              fontWeight: 300,
            }}
          >
            @beurrepastriesbne — see what's in today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
