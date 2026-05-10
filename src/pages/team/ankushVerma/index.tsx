import Hero from "../../../components/team/hero"
import MainLayout from "../../../layouts/main"


const AnkushVerma = () => {
    return (
        <MainLayout showFooterMain={false}>
            <Hero />
            <section className="py-10">
                <div className="container mx-auto">
                    <div className="bg-[#58B2C1] rounded-4xl p-10 text-white text-4xl">
                        <p>
                            Senior UI Developer with 14+ years of experience delivering modern, responsive, and pixel-perfect interfaces. Passionate about clean design systems, frontend precision, and smooth user experiences.
                        </p>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Sticky Left Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32">
                                <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Portfolio</span>
                                <h2 className="text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
                                    SELECTED <br /> WORKS
                                </h2>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                                    A curated selection of high-impact digital products, ranging from fintech platforms to creative agency experiences.
                                </p>
                                <div className="mt-12 space-y-4">
                                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        <span>UI Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        <span>Design Systems</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-900 font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                                        <span>Interaction Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Grid Right */}
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Item 1 - Large Top */}
                                <div className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[16/9]">
                                    <img
                                        src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/portfolio_main_work_1778432234206.png"
                                        alt="Main Project"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                                        <h3 className="text-3xl font-bold text-white mb-2">Nexus Dashboard</h3>
                                        <p className="text-white/80 font-medium">Enterprise Analytics Platform</p>
                                    </div>
                                </div>

                                {/* Item 2 & 3 */}
                                <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-square">
                                    <img
                                        src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/portfolio_item_2_1778432248859.png"
                                        alt="Project 2"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <h3 className="text-xl font-bold text-white mb-1">Luxe Commerce</h3>
                                        <p className="text-white/80 text-sm font-medium">Retail Experience</p>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-square">
                                    <img
                                        src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/portfolio_item_3_1778432264771.png"
                                        alt="Project 3"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <h3 className="text-xl font-bold text-white mb-1">FinFlow App</h3>
                                        <p className="text-white/80 text-sm font-medium">Digital Banking</p>
                                    </div>
                                </div>

                                {/* Item 4 & 5 */}
                                <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-square">
                                    <img
                                        src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/portfolio_item_4_1778432284782.png"
                                        alt="Project 4"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <h3 className="text-xl font-bold text-white mb-1">Brutal Studio</h3>
                                        <p className="text-white/80 text-sm font-medium">Agency Website</p>
                                    </div>
                                </div>
                                <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-square">
                                    <img
                                        src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/portfolio_item_5_1778432299372.png"
                                        alt="Project 5"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <h3 className="text-xl font-bold text-white mb-1">Aura AI</h3>
                                        <p className="text-white/80 text-sm font-medium">SaaS Landing Page</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Sticky Left Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32">
                                <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Capabilities</span>
                                <h2 className="text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
                                    CORE <br /> SERVICES
                                </h2>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                                    Specialized expertise in building high-end digital products with a focus on performance, scalability, and user-centric design.
                                </p>
                            </div>
                        </div>

                        {/* Stacking Cards Right */}
                        <div className="lg:w-2/3 flex flex-col gap-12">
                            {/* Card 1 */}
                            <div className="sticky top-32 h-[500px] w-full bg-slate-900 rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-colors" />
                                <div>
                                    <span className="text-white/40 font-mono text-sm mb-4 block">01 /</span>
                                    <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Technical Architecture</h3>
                                    <p className="text-white/60 text-lg max-w-md">
                                        Designing robust frontend architectures that scale. From micro-frontends to monorepos, ensuring your codebase is future-proof.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    {['React', 'Next.js', 'TypeScript'].map(tag => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="sticky top-32 h-[500px] w-full bg-blue-600 rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-colors" />
                                <div>
                                    <span className="text-white/40 font-mono text-sm mb-4 block">02 /</span>
                                    <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Design Systems</h3>
                                    <p className="text-white/80 text-lg max-w-md">
                                        Creating unified design languages that bridge the gap between design and code. Consistent, reusable, and pixel-perfect.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    {['Figma', 'Tailwind', 'Storybook'].map(tag => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="sticky top-32 h-[500px] w-full bg-indigo-500 rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-colors" />
                                <div>
                                    <span className="text-white/40 font-mono text-sm mb-4 block">03 /</span>
                                    <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">UX Interaction</h3>
                                    <p className="text-white/80 text-lg max-w-md">
                                        Crafting smooth animations and micro-interactions that make digital experiences feel alive and intuitive.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    {['Framer Motion', 'GSAP', 'Lottie'].map(tag => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="sticky top-32 h-[500px] w-full bg-teal-500 rounded-[3rem] p-12 flex flex-col justify-between shadow-2xl overflow-hidden group mb-24">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-colors" />
                                <div>
                                    <span className="text-white/40 font-mono text-sm mb-4 block">04 /</span>
                                    <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Performance Audit</h3>
                                    <p className="text-white/80 text-lg max-w-md">
                                        Optimizing web vitals and bundle sizes to ensure lightning-fast load times and smooth 60fps performance across all devices.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    {['Lighthouse', 'Vercel', 'Webpack'].map(tag => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Sticky Left Sidebar */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32">
                                <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Experience</span>
                                <h2 className="text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tighter uppercase">
                                    Career <br /> Journey
                                </h2>
                                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-sm">
                                    Building digital excellence across diverse industries, from high-scale tech giants to boutique creative studios.
                                </p>
                            </div>
                        </div>

                        {/* Experience Timeline Right */}
                        <div className="lg:w-2/3">
                            <div className="space-y-0">
                                {/* Experience Item 1 */}
                                <div className="group border-b border-slate-100 py-12 first:pt-0 hover:bg-slate-50 transition-colors px-8 -mx-8 rounded-3xl">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-8">
                                            <div className="w-20 h-20 rounded-2xl bg-black flex items-center justify-center p-4 shadow-xl">
                                                <img src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/company_logo_1_1778433276245.png" alt="Company 1" className="w-full h-full object-contain invert" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">Senior UI Architect</h3>
                                                <p className="text-xl text-slate-500 font-medium">MetaNexus Tech</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-1">2021 — PRESENT</span>
                                            <span className="inline-flex items-center bg-green-50 text-green-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Full Time</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 max-w-2xl text-slate-600 leading-relaxed font-medium">
                                        Leading the design system team for global enterprise products. Reduced development time by 40% through unified component architecture and automated UI testing pipelines.
                                    </div>
                                </div>

                                {/* Experience Item 2 */}
                                <div className="group border-b border-slate-100 py-12 hover:bg-slate-50 transition-colors px-8 -mx-8 rounded-3xl">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-8">
                                            <div className="w-20 h-20 rounded-2xl bg-slate-100 flex items-center justify-center p-4 shadow-sm border border-slate-200">
                                                <img src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/company_logo_2_1778433291159.png" alt="Company 2" className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">Lead Frontend Dev</h3>
                                                <p className="text-xl text-slate-500 font-medium">Pixel Perfect Agency</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-1">2018 — 2021</span>
                                            <span className="inline-flex items-center bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Contract</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 max-w-2xl text-slate-600 leading-relaxed font-medium">
                                        Managed a team of 12 developers delivering high-end marketing sites and complex web applications for Fortune 500 clients. Specialized in GSAP animations and high-performance React apps.
                                    </div>
                                </div>

                                {/* Experience Item 3 */}
                                <div className="group border-b border-slate-100 py-12 hover:bg-slate-50 transition-colors px-8 -mx-8 rounded-3xl">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-8">
                                            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center p-4 border border-blue-100 shadow-sm">
                                                <img src="/brain/18f5db0b-f4ae-4345-9411-2784675975b6/company_logo_3_1778433304027.png" alt="Company 3" className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">Senior Product Engineer</h3>
                                                <p className="text-xl text-slate-500 font-medium">FinFlow Systems</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-sm font-black text-slate-400 uppercase tracking-widest block mb-1">2014 — 2018</span>
                                            <span className="inline-flex items-center bg-gray-50 text-gray-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Full Time</span>
                                        </div>
                                    </div>
                                    <div className="mt-8 max-w-2xl text-slate-600 leading-relaxed font-medium">
                                        Architected the core trading dashboard for a leading fintech startup. Focused on real-time data visualization and accessible financial interfaces.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-[#F5F5F5] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-8 h-[500px]">
                        {/* Left Connect Card */}
                        <div className="lg:w-2/5 bg-white rounded-[3rem] p-16 flex flex-col justify-between shadow-sm">
                            <h2 className="text-7xl font-bold text-slate-800 leading-[1.1] tracking-tight">
                                Let's <br /> connect <br /> and chat
                            </h2>
                            <a href="mailto:ankush@example.com" className="group flex items-center gap-4 text-xl font-bold text-slate-600 hover:text-black transition-colors">
                                ANKUSH@ENHANCE.COM
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/* Right Social Card */}
                        <div className="lg:w-3/5 bg-[#58B2C1] rounded-[3rem] p-16 relative flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap gap-4 items-center justify-center max-w-md">
                                    <div className="px-10 py-5 rounded-full border border-white/40 text-white text-2xl font-bold -rotate-12 hover:bg-white hover:text-[#58B2C1] transition-all cursor-pointer">INSTAGRAM</div>
                                    <div className="px-10 py-5 rounded-full border border-white/40 text-white text-2xl font-bold rotate-6 hover:bg-white hover:text-[#58B2C1] transition-all cursor-pointer">DRIBBBLE</div>
                                    <div className="px-10 py-5 rounded-full border border-white/40 text-white text-2xl font-bold -rotate-3 hover:bg-white hover:text-[#58B2C1] transition-all cursor-pointer">BEHANCE</div>
                                    <div className="px-10 py-5 rounded-full border border-white/40 text-white text-2xl font-bold rotate-12 hover:bg-white hover:text-[#58B2C1] transition-all cursor-pointer">LINKEDIN</div>
                                    <div className="px-10 py-5 rounded-full bg-white/10 text-white text-2xl font-bold rotate-2">FOLLOW ME! 👀</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Width Hire Me CTA */}
            <section className="py-32 relative overflow-hidden">

                <div className="inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-6xl md:text-8xl font-black text-black mb-12 tracking-tighter">
                        READY TO <span className="text-blue-500">START?</span>
                    </h2>
                    <button className="bg-black text-white text-xl font-bold px-16 py-6 rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10 active:scale-95 uppercase tracking-widest">
                        Book a Discovery Call
                    </button>
                </div>
            </section>
        </MainLayout>
    )
}

export default AnkushVerma
