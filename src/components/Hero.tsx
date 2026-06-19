import { motion } from 'motion/react';
import { STATISTICS } from '../data';
import StatisticCounter from './StatisticCounter';
import LucideIcon from './LucideIcon';
import FloatingShapes from './FloatingShapes';

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

          {/* Right Column: Interactive Acrylic 3D Floating Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 15, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
              whileHover={{ rotateY: -8, rotateX: 6, scale: 1.02 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[480px] aspect-[4/3] rounded-2xl p-4 glass-panel-heavy shadow-2xl shimmer-border flex flex-col justify-between overflow-hidden transform-style-3d cursor-pointer"
            >
              {/* Diagonal shine line */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />

              {/* Top window utility bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D1008F] shadow-[0_0_5px_#D1008F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5D400]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFA52F]" />
                </div>
                <span className="text-[9px] uppercase tracking-widest font-black font-sans text-slate-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.05]">
                  SILTAWI HUB v2.5
                </span>
              </div>

              {/* Middle section: dynamic data loop widget */}
              <div className="py-6 flex flex-col gap-4">
                <div className="flex items-center gap-3.5 bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#D1008F]/20 to-[#FFA52F]/10 flex items-center justify-center text-[#F02AA6]">
                    <LucideIcon name="TrendingUp" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enterprise ROI</p>
                    <p className="text-xl font-black text-white tracking-tight mt-0.5">+480% Brand Lift</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-[#D1008F]/5 p-3 rounded-lg border border-[#D1008F]/20">
                  <div className="w-10 h-10 rounded-lg bg-black/60 flex items-center justify-center text-[#F5D400]">
                    <LucideIcon name="ShieldCheck" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#FFA52F] uppercase tracking-widest">Active Engagements</p>
                    <p className="text-sm font-black text-white mt-0.5">Verified High-Value Portfolios</p>
                  </div>
                </div>
              </div>

              {/* Bottom section: Client trust indicators */}
              <div className="bg-black/40 p-3 rounded-lg border border-white/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#D1008F] to-[#FFA52F] flex items-center justify-center text-xs font-black text-white">S</span>
                  <div>
                    <h4 className="text-[11px] font-bold text-white leading-none">Addis Ababa, ET</h4>
                    <p className="text-[9px] text-slate-400 mt-1">98% Retainer Satisfaction</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <LucideIcon key={i} name="Star" className="w-3 h-3 text-[#F5D400] fill-[#F5D400]" />
                  ))}
                </div>
              </div>
            </motion.div>
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
