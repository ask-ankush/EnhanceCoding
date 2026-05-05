import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO at FinFlow',
      feedback: 'The team at Enhance Coding brought a level of expertise we couldnt find anywhere else. They integrated seamlessly into our sprint cycles and delivered a world-class fintech dashboard in record time.',
      company: 'FinFlow',
      image: 'https://i.pravatar.cc/100?u=sarahj'
    },
    {
      name: 'Thomas Wu',
      role: 'CTO at CryptoVerse',
      feedback: ' hiring individual designers and developers from this collective was the best decision for our series A launch. The speed and quality are unmatched by any agency we worked with previously.',
      company: 'CryptoVerse',
      image: 'https://i.pravatar.cc/100?u=thomasw'
    },
    {
      name: 'Elena Rossi',
      role: 'Founder at ModaStyle',
      feedback: 'The motion design and front-end development provided by the Enhance Coding collective transformed our e-commerce experience. Our conversion rate increased by 40% after the redesign.',
      company: 'ModaStyle',
      image: 'https://i.pravatar.cc/100?u=elenar'
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Kind Words</span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            Trusted by Forward <br />
            <span className="text-blue-600">Thinking Founders.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 relative group transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50"
            >
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-blue-100 transition-colors">
                <Quote size={48} />
              </div>

              <div className="flex space-x-1 mb-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="fill-blue-600 text-blue-600" />
                ))}
              </div>

              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10 italic">
                "{t.feedback}"
              </p>

              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tighter leading-none mb-1">{t.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
