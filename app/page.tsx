'use client'

import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('./components/Nav'), { ssr: false })
const Hero = dynamic(() => import('./components/Hero'), { ssr: false })
const SectionTransition = dynamic(() => import('./components/SectionTransition'), { ssr: false })
const About = dynamic(() => import('./components/About'), { ssr: false })
const Collections = dynamic(() => import('./components/Collections'), { ssr: false })
const Signature = dynamic(() => import('./components/Signature'), { ssr: false })
const Workshops = dynamic(() => import('./components/Workshops'), { ssr: false })
const Gallery = dynamic(() => import('./components/Gallery'), { ssr: false })
const Visit = dynamic(() => import('./components/Visit'), { ssr: false })
const Footer = dynamic(() => import('./components/Footer'), { ssr: false })

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SectionTransition />
      <About />
      <SectionTransition />
      <Collections />
      <SectionTransition />
      <Signature />
      <SectionTransition />
      <Workshops />
      <SectionTransition />
      <Gallery />
      <SectionTransition />
      <Visit />
      <Footer />
    </main>
  )
}
