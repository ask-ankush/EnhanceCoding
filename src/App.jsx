import React, { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import StickyScrollSection from './components/StickyScrollSection'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import OverlappingBoxes from './components/OverlappingBoxes'
import HireTeamInteractive from './components/HireTeamInteractive'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import InquiryForm from './components/InquiryForm'
import Footer from './components/Footer'

const App = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden selection:bg-black selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <StickyScrollSection />
        <Portfolio />
        <Team />
        <OverlappingBoxes />
        <HireTeamInteractive />
        <Testimonials />
        <FAQ />
        <InquiryForm />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
