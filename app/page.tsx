import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Portfolio from '@/components/portfolio/Portfolio'
import Process from '@/components/process/Process'
import Exhibitions from '@/components/exhibitions/Exhibitions'
import Contact from '@/components/contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Process />
      <Exhibitions />
      <Contact />
    </>
  )
}
