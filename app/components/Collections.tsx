'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const products = [
  {
    id: 1,
    image: '/images/p1.jpg',
    name: 'Mille-Feuille Vanille',
    description: 'Crisp caramelised pastry, Tahitian vanilla cream, fondant glacé',
  },
  {
    id: 2,
    image: '/images/p2.jpg',
    name: 'Tarte Citron Meringuée',
    description: 'Burnt Italian meringue, lemon curd, shortcrust sablé',
  },
  {
    id: 3,
    image: '/images/p3.jpg',
    name: 'Croissant au Beurre',
    description: 'Seventy-two-hour laminated dough, AOP cultured butter',
  },
  {
    id: 4,
    image: '/images/p4.jpg',
    name: 'Paris-Brest Praliné',
    description: 'Choux pastry ring, hazelnut mousseline, pralin feuilletine',
  },
  {
    id: 5,
    image: '/images/p5.jpg',
    name: 'Éclair au Chocolat',
    description: 'Dark Valrhona ganache, crisp choux, mirror glaze',
  },
  {
    id: 6,
    image: '/images/p6.jpg',
    name: 'Tarte aux Fraises',
    description: 'Seasonal Queensland strawberries, pastry cream, almond frangipane',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div
        className="relative overflow-hidden mb-5 img-hover"
        style={{ aspectRatio: '4/5' }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'rgba(26,20,16,0.08)' }}
        />
      </div>

      {/* Text */}
      <div className="transition-transform duration-500 group-hover:-translate-y-1">
        <h3
          className="font-cormorant italic text-xl mb-1.5"
          style={{ color: 'var(--color-dark)' }}
        >
          {product.name}
        </h3>
        <p
          className="font-jost text-sm leading-relaxed"
          style={{ color: 'var(--color-accent)' }}
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
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <p
            className="font-jost text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--color-gold)' }}
          >
            Collections
          </p>
          <h2
            className="font-cormorant italic leading-tight"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--color-dark)' }}
          >
            This Season&apos;s Creations
          </h2>
          <p
            className="font-jost text-sm mt-4 max-w-md mx-auto leading-relaxed"
            style={{ color: 'var(--color-accent)' }}
          >
            Inspired by the rhythms of each season, our collection changes to reflect the finest
            ingredients available — always fresh, always made by hand.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
