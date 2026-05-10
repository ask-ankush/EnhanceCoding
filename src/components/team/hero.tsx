import { motion } from 'framer-motion'

const FloatingCard = ({ member, index, speed, delay, rotate }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, -20 * speed, 0],
        opacity: 1,
        rotate: [rotate, rotate * -1.2, rotate]
      }}
      transition={{
        y: { duration: 4 * speed, repeat: Infinity, ease: "easeInOut", delay: delay },
        rotate: { duration: 5 * speed, repeat: Infinity, ease: "easeInOut", delay: delay },
        opacity: { duration: 1, delay: index * 0.2 }
      }}
      whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", rotate: 0, zIndex: 10 }}
      className="absolute bg-white/90 backdrop-blur border border-slate-100 p-4 rounded-3xl shadow-xl w-60 md:w-72 flex items-center space-x-4 cursor-pointer cursor-grab active:cursor-grabbing"
      style={{
        top: `${15 + index * 10}%`,
        left: `${10 + index * 5}%`,
      }}
    >
      <div className="relative">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl object-cover hover:scale-105 transition-transform"
        />
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm md:text-base font-bold text-slate-900 truncate tracking-tight">{member.name}</h4>
        <p className="text-xs text-slate-500 font-medium tracking-tight truncate">{member.role}</p>
        <span className="inline-flex mt-1 items-center bg-blue-50 text-[10px] md:text-[11px] font-bold text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-wide">
          x
        </span>
      </div>
    </motion.div>
  )
}

const Hero = () => {
  const members = [
    { name: 'Sarah Chen', role: 'Full Stack Developer', avatar: 'https://i.pravatar.cc/150?u=sarah', availability: 'Available Now' },
    { name: 'Marcus Rodriguez', role: 'UI/UX Designer', avatar: 'https://i.pravatar.cc/150?u=alex', availability: 'Booked' },
    { name: 'Elena Kostas', role: 'DevOps Engineer', avatar: 'https://i.pravatar.cc/150?u=elena', availability: 'Available Soon' },
    { name: 'Julian Vance', role: 'Motion Designer', avatar: 'https://i.pravatar.cc/150?u=julian', availability: 'Available Now' },
  ]

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-slate-50/50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Expert Collective</span>
            </span>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-display font-black leading-[1.05] tracking-tighter text-slate-900 mb-8 max-w-[12ch]">
              Hire Talent Like Building <br />
              <span className="text-gradient animate-gradient-x bg-[length:200%_auto]">a Perfect Team.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
              We're a curated group of high-end independent designers and developers. Hire individuals or entire teams for your next premium project.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-slate-900 hover:scale-[1.02] transition-all flex items-center justify-center space-x-3 group shadow-2xl shadow-black/20">
                <span>Explore Talent</span>

              </button>
              <button className="w-full sm:w-auto border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-slate-50 hover:border-black transition-all flex items-center justify-center space-x-2">
                <span>Build Your Team</span>
              </button>
            </div>

            <div className="mt-12 flex items-center space-x-6 text-slate-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?u=test${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    alt="Trusted client"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold tracking-tight text-slate-500">
                <span className="text-slate-900 font-bold">500+</span> teams built globally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Floating Cards (Antigravity) */}
        <div className="relative h-[500px] md:h-[650px] w-full flex items-center justify-center md:block">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-slate-50/10 to-transparent pointer-events-none" />

          <div className="relative w-full h-full">
            <FloatingCard
              member={members[0]}
              index={0}
              speed={1.2}
              delay={0}
              rotate={3}
            />
            <FloatingCard
              member={members[1]}
              index={1}
              speed={0.8}
              delay={0.5}
              rotate={-4}
            />
            <FloatingCard
              member={members[2]}
              index={2}
              speed={1.1}
              delay={1}
              rotate={2}
            />
            <div className="hidden xl:block">
              <FloatingCard
                member={members[3]}
                index={3}
                speed={0.9}
                delay={1.5}
                rotate={-2}
              />
            </div>

            {/* Visual background decorations for depth */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-100 rounded-full blur-3xl -z-10"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-purple-100 rounded-full blur-3xl -z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
