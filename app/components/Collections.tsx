'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    id: 1,
    image: '/images/cafecroissant.jpg',
    name: 'Café & Croissant',
    description: 'Seventy-two-hour laminated dough, AOP cultured butter, paired with our house blend',
  },
  {
    id: 2,
    image: '/images/fraise.jpg',
    name: 'Strawberry Tart',
    description: 'Seasonal Queensland strawberries, pastry cream, almond frangipane, sablé breton',
  },
  {
    id: 3,
    image: '/images/crepe.jpg',
    name: 'Crêpe Dentelle',
    description: 'Delicate lace crêpe, salted caramel, Breton butter, folded to perfection',
  },
  {
    id: 4,
    image: '/images/confitur.jpg',
    name: 'House Jam',
    description: 'Small-batch seasonal fruit conserves, slow-cooked, minimally sweetened',
  },
  {
    id: 5,
    image: '/images/blanc.jpg',
    name: 'Blanc',
    description: 'Whipped chantilly, white chocolate glaze, vanilla bean, pure and precise',
  },
  {
    id: 6,
    image: '/images/matcha.jpg',
    name: 'Matcha Délice',
    description: 'Ceremonial grade matcha, light mousse, almond dacquoise, miso caramel',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: 'easeOut' }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div
        className="relative overflow-hidden mb-6"
        style={{ aspectRatio: '3/4', background: 'var(--color-surface)' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay — text appears on hover (desktop) */}
        <div className="collection-card-overlay hidden lg:flex">
          <h3
            className="font-cormorant italic text-white mb-3 text-center"
            style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', fontWeight: 300, letterSpacing: '0.05em' }}
          >
            {product.name}
          </h3>
          <p
            className="font-jost text-center leading-relaxed"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', fontWeight: 300, letterSpacing: '0.04em', maxWidth: '220px' }}
          >
            {product.description}
          </p>
        </div>
      </div>

      {/* Text — always visible on mobile, hidden on desktop (shown in overlay) */}
      <div className="lg:block">
        <h3
          className="font-cormorant italic mb-2 lg:group-hover:text-[var(--color-accent)] transition-colors duration-300"
          style={{
            fontSize: 'clamp(16px, 1.3vw, 20px)',
            color: 'var(--color-dark)',
            fontWeight: 300,
            letterSpacing: '0.02em',
          }}
        >
          {product.name}
        </h3>
        <p
          className="font-jost leading-relaxed lg:hidden"
          style={{ fontSize: '12px', color: 'var(--color-muted)', fontWeight: 300, letterSpacing: '0.02em' }}
        >
          {product.description}
        </p>
      </div>
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
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Section number */}
      <span className="section-number hidden lg:block" style={{ top: '4rem', left: '6rem' }}>02</span>

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center section-title-decorated"
          style={{ marginBottom: '104px' }}
        >
          <p
            className="font-jost uppercase mb-5"
            style={{ fontSize: '10px', letterSpacing: '0.32em', color: 'var(--color-muted)', fontWeight: 300 }}
          >
            Collections
          </p>
          <h2
            className="font-cormorant leading-tight"
            style={{
              fontSize: 'clamp(28px, 4vw, 5rem)',
              color: 'var(--color-dark)',
              fontWeight: 300,
              letterSpacing: '0.10em',
            }}
          >
            This Season&apos;s Creations
          </h2>
          <p
            className="font-jost mt-5 mx-auto leading-relaxed"
            style={{
              fontSize: '13px',
              color: 'var(--color-muted)',
              maxWidth: '400px',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            Inspired by the rhythms of each season — always fresh, always made by hand.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
