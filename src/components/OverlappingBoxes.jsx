import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const BenefitCard = ({ index, title, description, color, scrollYProgress }) => {
  // Each card animation starts at a different scroll point
  const start = 0.2 + (index * 0.2)
  const end = start + 0.3
  
  const y = useTransform(scrollYProgress, [start, end], [500, 0])
  const opacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1])
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1])
  
  // Stacking effect (each card slightly smaller than the next)
  const z = 10 + index
  const topOffset = index * 40 // Offset for visual stacking

  return (
    <motion.div
      style={{ y, opacity, scale, zIndex: z, top: `${topOffset}px` }}
      className={`sticky w-full aspect-[16/10] md:aspect-[2/1] rounded-[48px] p-8 md:p-12 flex flex-col justify-end overflow-hidden shadow-2xl border border-white/20`}
    >
      <div className={`absolute inset-0 ${color} opacity-90`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="relative z-20 max-w-lg">
        <span className="text-white/60 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Benefit 0{index + 1}</span>
        <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 uppercase tracking-tight">{title}</h3>
        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

const OverlappingBoxes = () => {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const benefits = [
    { 
      title: "Direct Talent Access", 
      description: "No middlemen. Communicate directly with the developers and designers building your project.",
      color: "bg-blue-600"
    },
    { 
      title: "Flexible Engagement", 
      description: "Scale your team up or down based on project demands. Pay only for the expertise you need.",
      color: "bg-indigo-600"
    },
    { 
      title: "Built-In Seniority", 
      description: "Every member of our collective has at least 8 years of industry experience.",
      color: "bg-purple-600"
    },
    { 
      title: "Rapid Execution", 
      description: "Our distributed model ensures 24/7 productivity across various time zones.",
      color: "bg-slate-900"
    }
  ]

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="max-w-2xl lg:sticky lg:top-32 h-fit">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Key Advantages</span>
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight text-slate-900 tracking-tight mb-8">
              Why Forward-Thinking <br />
              <span className="text-blue-600">Companies Choose Us.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-lg mb-12">
              We bridge the gap between traditional agencies and unpredictable freelancer marketplaces.
            </p>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 font-black">01</div>
                <p className="text-lg font-bold text-slate-900 uppercase tracking-tight">Vetted Talent</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 font-black">02</div>
                <p className="text-lg font-bold text-slate-900 uppercase tracking-tight">Full Project Accountability</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 font-black">03</div>
                <p className="text-lg font-bold text-slate-900 uppercase tracking-tight">Agile Workflow</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[150vh] space-y-[40vh] md:space-y-[60vh] py-12">
             {benefits.map((benefit, i) => (
                <BenefitCard 
                  key={i} 
                  index={i} 
                  {...benefit} 
                  scrollYProgress={scrollYProgress} 
                />
             ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverlappingBoxes
