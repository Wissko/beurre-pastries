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
      {/* Image — no border, no shadow */}
      <div
        className="relative overflow-hidden mb-6 img-hover"
        style={{ aspectRatio: '4/5', background: 'var(--color-surface)' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-800 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Text */}
      <div>
        <h3
          className="font-cormorant italic mb-2"
          style={{
            fontSize: 'clamp(15px, 1.4vw, 18px)',
            color: 'var(--color-dark)',
            fontWeight: 300,
            letterSpacing: '0.02em',
          }}
        >
          {product.name}
        </h3>
        <p
          className="font-jost leading-relaxed"
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
      className="section-padding"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-26"
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
              fontSize: 'clamp(28px, 4vw, 45px)',
              color: 'var(--color-dark)',
              fontWeight: 300,
              letterSpacing: '0.10em',
              fontStyle: 'normal',
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

        {/* Grid — generous gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
