import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Plus, Minus, Users, DollarSign, Clock, ShieldCheck, Zap } from 'lucide-react'

const HireTeamInteractive = () => {
  const [selectedIds, setSelectedIds] = useState([1, 2])
  
  const teamPool = [
    { id: 1, name: 'Sarah Chen', role: 'Dev', rate: 150, avatar: 'https://i.pravatar.cc/100?u=sarah' },
    { id: 2, name: 'Marcus Rodriguez', role: 'Design', rate: 120, avatar: 'https://i.pravatar.cc/100?u=alex' },
    { id: 3, name: 'Julian Vance', role: 'Motion', rate: 130, avatar: 'https://i.pravatar.cc/100?u=julian' },
    { id: 4, name: 'Elena Kostas', role: 'DevOps', rate: 180, avatar: 'https://i.pravatar.cc/100?u=elena' },
  ]

  const toggleMember = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) setSelectedIds(selectedIds.filter(i => i !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const selectedMembers = teamPool.filter(m => selectedIds.includes(m.id))
  const totalRate = selectedMembers.reduce((acc, m) => acc + m.rate, 0)

  return (
    <section id="hire-a-team" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-4 block">Interactive Builder</span>
          <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-white tracking-tight">
            Build Your Own <span className="text-blue-500">Dream Team.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto mt-6">
            Mix and match our top talent to see how your perfect project team would look. Get an instant estimate for your collective hourly rate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Pool Area */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {teamPool.map((member) => (
                <motion.div
                  key={member.id}
                  onClick={() => toggleMember(member.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer p-5 rounded-[32px] border-2 transition-all flex flex-col items-center text-center ${
                    selectedIds.includes(member.id) 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-500/20 scale-105' 
                    : 'bg-slate-800 border-slate-700 text-slate-400 opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                >
                  <div className="relative mb-4">
                    <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/10" />
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center ${
                      selectedIds.includes(member.id) ? 'bg-white text-blue-600' : 'bg-slate-700 text-slate-400'
                    }`}>
                      {selectedIds.includes(member.id) ? <Check size={12} strokeWidth={4}/> : <Plus size={12} />}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold truncate w-full uppercase tracking-tighter">{member.name}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest mt-1 opacity-70">{member.role}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Visual Indicator of Connection */}
            <div className="hidden xl:flex items-center justify-center py-12">
               <motion.div 
                animate={{ width: [100, 150, 100], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"
               />
               <Users className="text-blue-600 mx-4" size={48} />
               <motion.div 
                animate={{ width: [100, 150, 100], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="h-1 bg-gradient-to-l from-blue-600 to-transparent rounded-full"
               />
            </div>
          </div>

          {/* Right: Summary Panel */}
          <div className="lg:col-span-12 xl:col-span-5 relative">
            <motion.div 
              layout
              className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-slate-100"
            >
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-8">
                <div>
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-2 leading-none">Estimate Summary</h3>
                  <p className="text-2xl font-display font-black text-slate-900 tracking-tight">Your Collective Unit</p>
                </div>
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <ShieldCheck size={28} />
                </div>
              </div>

              <div className="space-y-6 mb-12">
                <AnimatePresence mode='popLayout'>
                  {selectedMembers.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-xl" />
                        <div>
                          <p className="text-sm font-bold text-slate-900 leading-none mb-1">{m.name}</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{m.role}</p>
                        </div>
                      </div>
                      <span className="text-sm font-black text-slate-900">${m.rate}/hr</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 mb-8 border border-slate-100">
                 <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center">
                      <DollarSign size={14} className="mr-1" /> Estimated Hourly
                    </span>
                    <span className="text-3xl font-display font-black text-slate-900 tracking-tighter">${totalRate}</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center">
                      <Clock size={14} className="mr-1" /> Weekly Block
                    </span>
                    <span className="text-sm font-bold text-slate-900 tracking-tight">40 hrs / wk</span>
                 </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black uppercase tracking-[0.1em] text-sm shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center space-x-3 active:scale-[0.98]">
                <Zap size={18} className="fill-white" />
                <span>Request This Team</span>
              </button>
            </motion.div>
            
            {/* Visual background decorations for the panel */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 blur-3xl -z-10 rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/10 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HireTeamInteractive
