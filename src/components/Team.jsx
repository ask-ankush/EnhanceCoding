import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusCircle, Search, Star, Zap } from 'lucide-react'

const Team = () => {
  const [filter, setFilter] = useState('All')

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Full Stack Developer',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Golang'],
      rate: '$150/hr',
      availability: 'Available Now',
      category: 'Development',
      avatar: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'UI/UX Designer',
      skills: ['Figma', 'Prototyping', 'User Research', 'Landing Pages'],
      rate: '$120/hr',
      availability: 'Booked',
      category: 'Design',
      avatar: 'https://i.pravatar.cc/150?u=alex'
    },
    {
      id: 3,
      name: 'Elena Kostas',
      role: 'DevOps Engineer',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      rate: '$180/hr',
      availability: 'Available Soon',
      category: 'Development',
      avatar: 'https://i.pravatar.cc/150?u=elena'
    },
    {
      id: 4,
      name: 'Julian Vance',
      role: 'Motion Designer',
      skills: ['After Effects', 'Spline', 'Framer Motion', 'Lottie'],
      rate: '$130/hr',
      availability: 'Available Now',
      category: 'Animation',
      avatar: 'https://i.pravatar.cc/150?u=julian'
    },
    {
      id: 5,
      name: 'David Miller',
      role: 'WordPress Specialist',
      skills: ['PHP', 'Elementor', 'WooCommerce', 'SEO'],
      rate: '$110/hr',
      availability: 'Available Now',
      category: 'WordPress',
      avatar: 'https://i.pravatar.cc/150?u=david'
    },
    {
      id: 6,
      name: 'Chloe Kim',
      role: 'Product Designer',
      skills: ['Mobile UI', 'Figma', 'Component Libraries'],
      rate: '$140/hr',
      availability: 'Limited',
      category: 'Design',
      avatar: 'https://i.pravatar.cc/150?u=chloe'
    }
  ]

  const categories = ['All', 'Design', 'Development', 'WordPress', 'Animation']

  const filteredMembers = filter === 'All' 
    ? teamMembers 
    : teamMembers.filter(m => m.category === filter)

  return (
    <section id="team" className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Our Experts</span>
          <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-slate-900 tracking-tight">
            Meet the <span className="text-blue-600">Collective.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto mt-6">
            We've gathered a world-class group of specialists. Filter by category to find the perfect match for your requirements.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                ? 'bg-black text-white shadow-xl shadow-black/20 scale-105' 
                : 'bg-white text-slate-400 hover:text-black hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:translate-y-[-8px] transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="relative">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-20 h-20 rounded-3xl object-cover mb-4 ring-4 ring-slate-50 group-hover:ring-blue-50 transition-all shadow-md group-hover:scale-105"
                    />
                    {member.availability === 'Available Now' && (
                      <div className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-1">Rate</div>
                    <div className="text-xl font-display font-black text-slate-900 tracking-tighter">{member.rate}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase leading-none mb-1">{member.name}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{member.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 min-h-[64px]">
                  {member.skills.map(skill => (
                    <span key={skill} className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-slate-100 hover:bg-slate-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button className="bg-slate-50 hover:bg-slate-100 text-slate-900 py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all">
                    View Profile
                  </button>
                  <button className="bg-black hover:bg-blue-600 text-white py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center space-x-2">
                    <PlusCircle size={14} />
                    <span>Add to Team</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
