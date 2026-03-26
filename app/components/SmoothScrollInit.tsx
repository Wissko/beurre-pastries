'use client'

import { useEffect } from 'react'

/**
 * SmoothScrollInit — applique scroll-behavior: smooth côté client
 * et ajoute une légère résistance perceptuelle au scroll via les
 * durées d'animation (aucun hack de wheel event pour rester natif).
 */
export default function SmoothScrollInit() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return null
}
