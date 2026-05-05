import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const StickyScrollSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smoothly transform values based on scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.3])
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0.3, 1, 0.3])
  const opacity3 = useTransform(scrollYProgress, [0.75, 1], [0.3, 1])

  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.95])
  const scale2 = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0.95, 1, 0.95])
  const scale3 = useTransform(scrollYProgress, [0.75, 1], [0.95, 1])

  const images = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
  ]

  // Image indexing for the sticky side
  const imageIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2])

  return (
    <section ref={containerRef} className="relative bg-white min-h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden flex-col md:flex-row">
        {/* Left Side: Sticky Image Area */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 relative flex items-center justify-center">
          <div className="relative w-full h-full max-w-lg md:max-w-none rounded-[40px] overflow-hidden shadow-2xl group">
            {images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Process step ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                style={{
                  opacity: idx === 0 ? opacity1 : idx === 1 ? opacity2 : opacity3,
                  scale: idx === 0 ? scale1 : idx === 1 ? scale2 : scale3,
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right Side: Scroll Content Holder */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 py-12 md:py-0">
          <div className="max-w-lg">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 block">Our Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-slate-900 mb-12 tracking-tight">
              A Seamless Execution <br />
              <span className="text-blue-600">Model.</span>
            </h2>

            <div className="space-y-48 md:space-y-64 pb-[50vh]">
              <motion.div style={{ opacity: opacity1, scale: scale1 }}>
                <span className="text-5xl font-black text-slate-100 mb-4 block leading-none tracking-tighter">01</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request & Consult</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  Tell us about your project requirements or specific talent needs. We'll consult with you to help define the perfect team structure.
                </p>
              </motion.div>

              <motion.div style={{ opacity: opacity2, scale: scale2 }}>
                <span className="text-5xl font-black text-slate-100 mb-4 block leading-none tracking-tighter">02</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Talent Selection</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  We match you with specialists who've done this before. From high-end UI design to complex system architecture, you're in safe hands.
                </p>
              </motion.div>

              <motion.div style={{ opacity: opacity3, scale: scale3 }}>
                <span className="text-5xl font-black text-slate-100 mb-4 block leading-none tracking-tighter">03</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Execute & Deliver</h3>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  The team integrates directly into your workflow or works as a standalone unit. We iterate fast and deliver pixel-perfect brilliance.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StickyScrollSection
