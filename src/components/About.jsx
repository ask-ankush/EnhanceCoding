import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Target, Users2, Zap } from 'lucide-react'

const About = () => {
  const steps = [
    { 
      title: 'Curated Talent', 
      description: 'We handpick top-tier designers and developers from around the globe.',
      icon: Users2,
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      title: 'Flexible Hiring', 
      description: 'Hire an individual expert or scale up to a full team in seconds.',
      icon: Zap,
      color: 'bg-yellow-50 text-yellow-600'
    },
    { 
      title: 'Built-in Quality', 
      description: 'Our internal review systems ensure high standards for every line of code.',
      icon: Target,
      color: 'bg-green-50 text-green-600'
    },
    { 
      title: 'Rapid Scaling', 
      description: 'Go from concept to execution with a team that hits the ground running.',
      icon: Rocket,
      color: 'bg-purple-50 text-purple-600'
    },
  ]

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:scale-[1.03]"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${step.color}`}>
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Decors */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 blur-3xl rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">About the Collective</span>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-slate-900 mb-8 tracking-tight">
              A Platform Built for <br />
              <span className="text-blue-600">Premium Execution.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Enhance Coding isn't just another agency. We're a distributed collective of specialized talent who've worked for world-class companies. 
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              By removing the overhead of traditional agencies, we provide direct access to the same talent that builds the tools you use every day.
            </p>
            
            <div className="flex items-center space-x-10">
              <div>
                <h4 className="text-3xl font-black text-slate-900 tracking-tight">50+</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Specialists</p>
              </div>
              <div className="h-10 w-[2px] bg-slate-200" />
              <div>
                <h4 className="text-3xl font-black text-slate-900 tracking-tight">12</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Countries</p>
              </div>
              <div className="h-10 w-[2px] bg-slate-200" />
              <div>
                <h4 className="text-3xl font-black text-slate-900 tracking-tight">95%</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Retention</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
