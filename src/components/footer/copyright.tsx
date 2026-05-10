
const Copyright = () => {
    return (
        <div className="border-t border-slate-100 py-12 ">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                        © 2026 ENHANCE CODING COLLECTIVE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center space-x-8">
                        <a href="#" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-black transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-black transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copyright