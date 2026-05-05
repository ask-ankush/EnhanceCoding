import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send, CheckCircle2 } from 'lucide-react'

const InquiryForm = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 block">Ready to start?</span>
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight text-slate-900 tracking-tight mb-10">
              Build Your Perfect <br />
              <span className="text-blue-600">Team in Minutes.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              Drop us a line about your project. We usually respond within 4 hours to schedule a consultation call.
            </p>
            
            <div className="space-y-6">
              {[
                'Vetted, high-end specialists',
                'Flexible weekly billing',
                'No long-term commitments',
                'Scale up or down in 24 hours'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-lg font-bold text-slate-900 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[40px] p-10 md:p-14 shadow-2xl relative"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-slate-900 font-bold focus:ring-2 focus:ring-blue-600/20 transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-slate-900 font-bold focus:ring-2 focus:ring-blue-600/20 transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Project Details</label>
                <textarea rows={4} placeholder="Tell us about your project or what kind of talent you need..." className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-slate-900 font-bold focus:ring-2 focus:ring-blue-600/20 transition-all outline-none resize-none" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Budget Range</label>
                  <select className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-slate-900 font-bold focus:ring-2 focus:ring-blue-600/20 transition-all outline-none appearance-none">
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Timeline</label>
                  <select className="w-full bg-slate-50 border-0 rounded-2xl p-5 text-slate-900 font-bold focus:ring-2 focus:ring-blue-600/20 transition-all outline-none appearance-none">
                    <option>Within 2 months</option>
                    <option>3 - 6 months</option>
                    <option>6 months+</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-black hover:bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-black/10 transition-all flex items-center justify-center space-x-4 active:scale-[0.98]">
                <span>Send Request</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InquiryForm
