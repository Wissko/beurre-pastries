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
  title: 'Beurre Pastries — Park Road, Milton, Brisbane',
  description:
    'Beurre Pastries by Will Leung. Croissants, pain au chocolat, black sesame morning buns, cinnamon monkey cube, Pain Suisse. Park Road, Milton, Brisbane. Bear Bones Coffee.',
  keywords: 'Beurre Pastries, Brisbane, Milton, Park Road, Will Leung, croissant, pastry, Bear Bones Coffee, LeBakerman',
  openGraph: {
    title: 'Beurre Pastries — Park Road, Milton, Brisbane',
    description: 'Croissants, morning buns, Pain Suisse. Real pastry. Bear Bones Coffee. Park Road, Milton.',
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
