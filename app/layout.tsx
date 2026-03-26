import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beurre Pastries — French Pastry · Brisbane',
  description: 'Artisan French pastry crafted with butter, made with love. Discover our seasonal creations and workshops in Brisbane, Queensland.',
  keywords: 'French pastry, Brisbane, artisan, croissant, patisserie, French bakery, workshops',
  openGraph: {
    title: 'Beurre Pastries — French Pastry · Brisbane',
    description: 'Artisan French pastry crafted with butter, made with love.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
