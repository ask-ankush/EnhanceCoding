import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
// import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    })

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Team', href: '#team' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Hire a Team', href: '#hire-a-team' },
        { name: 'Blog', href: '#blog' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="text-2xl font-display font-extrabold tracking-tight text-slate-900 border-2 border-black px-1 leading-none uppercase">
                        Enhance <span className="bg-black text-white px-1">Coding</span>
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 hover:text-black transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center">
                    <button className="bg-black text-white text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-black/10">
                        Start a Project
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? "open" : "close"}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-white border-b border-slate-100"
                >
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-semibold text-slate-900"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="bg-black text-white text-center font-bold px-6 py-3 rounded-md w-full">
                            Start a Project
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    )
}

export default Header
