
import { motion } from 'framer-motion'

const FooterMain = () => {
    const links = [
        { name: 'Company', items: ['About', 'Team', 'Press', 'Careers'] },
        { name: 'Resources', items: ['Blog', 'Case Studies', 'Pricing', 'Hire a Team'] },
        { name: 'Legal', items: ['Privacy', 'Terms', 'Security', 'Cookies'] }
    ]
    return (
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
                <div className="lg:col-span-4 max-w-sm">
                    <a href="/" className="text-2xl font-display font-black tracking-tight text-slate-900 border-2 border-black px-1 leading-none uppercase mb-8 inline-block">
                        Enhance <span className="bg-black text-white px-1">Coding</span>
                    </a>
                    <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
                        A distributed collective of high-end independent designers and developers building the future of digital products.
                    </p>
                    <div className="flex space-x-6">
                        {[].map((Icon, idx) => (
                            <motion.a
                                key={idx}
                                href="#"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-black transition-colors border border-slate-100"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
                    {links.map((group) => (group && group.items && (
                        <div key={group.name} className="flex flex-col space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{group.name}</h4>
                            <ul className="flex flex-col space-y-4">
                                {group.items.map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-bold text-slate-600 hover:text-black transition-colors uppercase tracking-widest">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )))}
                </div>
            </div>


        </div>
    )
}

export default FooterMain