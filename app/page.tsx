'use client'

import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('./components/Nav'), { ssr: false })
const Hero = dynamic(() => import('./components/Hero'), { ssr: false })
const About = dynamic(() => import('./components/About'), { ssr: false })
const Collections = dynamic(() => import('./components/Collections'), { ssr: false })
const Signature = dynamic(() => import('./components/Signature'), { ssr: false })
const Workshops = dynamic(() => import('./components/Workshops'), { ssr: false })
const Gallery = dynamic(() => import('./components/Gallery'), { ssr: false })
const Visit = dynamic(() => import('./components/Visit'), { ssr: false })
const Footer = dynamic(() => import('./components/Footer'), { ssr: false })
const CustomCursor = dynamic(() => import('./components/CustomCursor'), { ssr: false })

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Nav />
      <Hero />
      <About />
      <Collections />
      <Signature />
      <Workshops />
      <Gallery />
      <Visit />
      <Footer />
    </main>
  )
}
