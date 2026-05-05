import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Neobank Interface Design',
      category: 'Fintech / UI/UX',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
      contributors: ['Sarah Chen', 'Julian Vance']
    },
    {
      id: 2,
      title: 'Solana NFT Marketplace',
      category: 'Web3 / Blockchain',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop',
      contributors: ['Marcus Rodriguez', 'Elena Kostas']
    },
    {
      id: 3,
      title: 'AI Trading Dashboard',
      category: 'SaaS / Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      contributors: ['Sarah Chen', 'Marcus Rodriguez']
    },
    {
      id: 4,
      title: 'Premium E-Commerce',
      category: 'Retail / Branding',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop',
      contributors: ['Julian Vance', 'Elena Kostas']
    }
  ]

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Selected Cases</span>
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-slate-900 tracking-tight">
              Selected Projects <br />
              <span className="text-blue-600">Built to Win.</span>
            </h2>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
            View All Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="bg-white w-14 h-14 rounded-full flex items-center justify-center text-black shadow-2xl"
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tighter">{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {project.contributors.map((name, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-600 uppercase overflow-hidden">
                           <img 
                            src={`https://i.pravatar.cc/100?u=${name.split(' ')[0]}`} 
                            alt={name} 
                            className="w-full h-full object-cover"
                           />
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-slate-400 leading-none">
                      {project.contributors.join(' + ')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
