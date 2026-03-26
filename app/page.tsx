'use client'

import dynamic from 'next/dynamic'

const Nav = dynamic(() => import('./components/Nav'), { ssr: false })
const Hero = dynamic(() => import('./components/Hero'), { ssr: false })
const ChapterSeparator = dynamic(() => import('./components/ChapterSeparator'), { ssr: false })
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
      <ChapterSeparator number="01" />
      <About />
      <ChapterSeparator number="02" />
      <Collections />
      <ChapterSeparator number="03" />
      <Signature />
      <ChapterSeparator number="04" />
      <Workshops />
      <ChapterSeparator number="05" />
      <Gallery />
      <ChapterSeparator number="06" />
      <Visit />
      <Footer />
    </main>
  )
}
