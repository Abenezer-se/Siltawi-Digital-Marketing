import { motion } from 'motion/react';
import { STATISTICS } from '../data';
import StatisticCounter from './StatisticCounter';
import LucideIcon from './LucideIcon';
import FloatingShapes from './FloatingShapes';
import ThreeDLogo from './ThreeDLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-24 overflow-hidden flex flex-col justify-center bg-[#050505] text-[#f1f5f9]"
    >
      {/* Immersive 3D Floating Shapes & Accent Mesh background */}
      <FloatingShapes />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column: Cinematic typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#D1008F]/30"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#F02AA6] animate-pulse shadow-[0_0_8px_#F02AA6]" />
              <span className="text-[10px] font-black text-white tracking-widest uppercase font-display">
                Next-Gen Creative Agency • Addis Ababa
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6.5xl text-white tracking-tight leading-[1.05]"
            >
              Elevating Brands <br className="hidden sm:inline" />
              Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1008F] via-[#F02AA6] to-[#FFA52F] drop-shadow-[0_2px_15px_rgba(209,0,143,0.35)]">
                Futuristic Design
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed"
            >
              Born in Addis Ababa, Ethiopia, <strong className="text-white font-medium">Siltawi Digital Marketing</strong> is a premium enterprise-grade agency. We craft award-winning experiences through luxury branding, high-conversion web development, immersive social marketing, and intelligent search engine optimization.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto"
            >
              {/* Premium Gradient Button with Glow */}
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-[#D1008F] to-[#F02AA6] hover:from-[#F02AA6] hover:to-[#FFA52F] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(209,0,143,0.4)] hover:shadow-[0_0_30px_rgba(255,165,47,0.6)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none"
              >
                Launch Your Project
                <LucideIcon
                  name="ArrowRight"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </button>
              
              {/* Luxury Outline Button */}
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 w-full sm:w-auto bg-transparent text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/10 hover:border-[#D1008F] hover:bg-[#D1008F]/5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                View Selected Works
              </button>
            </motion.div>
          </div>

          {/* Right Column: Futuristic CSS 3D Holographic Brand Logo Model */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center perspective-1000">
            <ThreeDLogo />
          </div>
        </div>

        {/* Dynamic Horizontal Stats Grid with customized glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 h-auto glass-panel-heavy rounded-2xl border border-white/[0.08] shadow-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8"
        >
          {STATISTICS.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-3 rounded-xl hover:bg-white/[0.03] transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#D1008F]/10 border border-[#D1008F]/20 flex items-center justify-center text-[#FF7BC1] group-hover:bg-[#D1008F] group-hover:text-white group-hover:shadow-[0_0_15px_#D1008F] transition-all duration-300 mb-3">
                <LucideIcon name={stat.iconName} size={18} />
              </div>
              
              <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                <StatisticCounter target={stat.value} suffix={stat.suffix} />
              </span>
              
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
