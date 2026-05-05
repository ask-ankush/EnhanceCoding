import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, ChevronRight } from 'lucide-react'

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`border-b border-slate-100 last:border-0 transition-all ${isOpen ? 'bg-slate-50/50 py-8 px-8 rounded-3xl mb-4 border-b-0' : 'py-8'}`}>
      <button 
        onClick={toggle}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-90' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-900'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      question: 'How do you vet your team members?',
      answer: 'We only accept specialists with at least 8 years of industry experience. Every applicant goes through a rigorous technical assessment and internal review process to ensure they meet our premium standards of execution and communication.'
    },
    {
      question: 'Can I hire a single consultant?',
      answer: 'Yes! While we excel at building full teams, you can also hire individual experts by the hour or as a dedicated resource for your specific project needs. Explore our collective to find the right talent.'
    },
    {
      question: 'What is the minimum engagement period?',
      answer: 'Our standard minimum engagement is 20 hours per week for at least two weeks. This allows our talent sufficient time to integrate and start delivering meaningful results for your business.'
    },
    {
      question: 'How do payments and invoicing work?',
      answer: 'We operate on a weekly or bi-weekly billing cycle based on the hours logged by the talent or team. We handle all international payments, tax compliance, and currency conversions, making it seamless for your accounts department.'
    },
    {
      question: 'Do you work across all time zones?',
      answer: 'Enhance Coding is a distributed collective. We have specialists across 12 countries, allowing us to provide near-shore coverage for most North American and European clients, or provide round-the-clock development if needed.'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
             <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4 block">Got Questions?</span>
             <h2 className="text-4xl md:text-5xl font-display font-black leading-tight text-slate-900 tracking-tight mb-8">
               Frequently Asked <br />
               <span className="text-blue-600">Questions.</span>
             </h2>
             <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
               Cant find the answer you are looking for? Reach out to our team directly.
             </p>
             <button className="flex items-center space-x-2 text-sm font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-colors">
               <span>Contact Support</span>
               <ChevronRight size={18} />
             </button>
          </div>

          <div className="lg:w-2/3">
            <div className="max-w-4xl">
               {faqs.map((faq, idx) => (
                  <FAQItem 
                    key={idx} 
                    {...faq} 
                    isOpen={openIdx === idx} 
                    toggle={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                  />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
