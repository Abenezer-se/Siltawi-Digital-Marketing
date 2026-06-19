import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import LucideIcon from './LucideIcon';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((service) => service.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-[#050505] text-[#f1f5f9] border-y border-white/[0.06] scroll-mt-12 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D1008F]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black text-[#FFA52F] tracking-widest uppercase font-display bg-[#FFA52F]/10 border border-[#FFA52F]/35 px-4 py-2 rounded-full inline-block">
            {t('services.pretitle')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t('services.title')}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Desktop Tab System */}
        <div className="hidden lg:flex justify-center mb-12 glass-panel-heavy p-2 rounded-2xl border border-white/[0.08] max-w-5xl mx-auto">
          <div className="flex gap-2 w-full justify-between">
            {SERVICES.map((srv) => {
              const isActive = activeTab === srv.id;
              const serviceTitleKey = `service.${srv.id}.title`;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`flex flex-col items-center gap-2 px-5 py-4 rounded-xl text-center flex-1 transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D1008F] to-[#F02AA6] text-white shadow-[0_0_20px_rgba(209,0,143,0.45)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border transition-all duration-300 ${
                    isActive ? 'bg-white/10 border-white/20 text-white' : 'bg-white/[0.03] border-white/[0.05] text-[#FF7BC1]'
                  }`}>
                    <LucideIcon name={srv.iconName} size={20} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider">{t(serviceTitleKey)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Content (Desktop) & Accordion / Grid (Mobile) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left panel - Active Content list */}
          <div className="lg:col-span-7 flex flex-col justify-center glass-panel p-8 sm:p-12 rounded-3xl border border-white/[0.08] relative overflow-hidden shimmer-border">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D1008F]/10 via-transparent to-transparent pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Heading info */}
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#D1008F]/10 border border-[#D1008F]/20 text-[#FF7BC1]">
                    <LucideIcon name={activeService.iconName} size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-2xl text-white leading-tight uppercase tracking-wide">
                      {t(`service.${activeService.id}.title`)}
                    </h3>
                    <p className="text-[9px] font-black text-[#FFA52F] uppercase tracking-widest font-display mt-0.5">
                      {t('services.division')}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {t(`service.${activeService.id}.description`)}
                </p>

                {/* Sub Bullet Details */}
                <div className="border-t border-white/[0.08] pt-6 space-y-4">
                  <h4 className="font-display font-black text-white text-xs uppercase tracking-wider">
                    {t('services.included')}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {activeService.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#F02AA6]/10 border border-[#F02AA6]/25 text-[#FF7BC1] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(240,42,166,0.15)]">
                          <LucideIcon name="Check" size={10} className="stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-300 leading-tight">
                          {t(`service.${activeService.id}.bullet.${idx}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right panel - Category Navigator (Mobile fallback triggers accordion selection) */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {SERVICES.map((srv) => {
              const isActive = activeTab === srv.id;
              const serviceTitleKey = `service.${srv.id}.title`;
              return (
                <button
                  key={srv.id}
                  onClick={() => setActiveTab(srv.id)}
                  className={`w-full group text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-slate-950 via-[#7A0058]/35 to-slate-950 border-[#D1008F]/40 text-white shadow-[0_0_20px_rgba(209,0,143,0.15)]'
                      : 'bg-white/[0.01] border-white/[0.04] hover:border-white/[0.1] text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                      isActive ? 'bg-[#D1008F]/20 border-[#D1008F]/30 text-white' : 'bg-white/[0.02] border-white/[0.05] text-[#FF7BC1] group-hover:bg-white/[0.05]'
                    }`}>
                      <LucideIcon name={srv.iconName} size={18} />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-xs sm:text-sm tracking-wide uppercase">{t(serviceTitleKey)}</h4>
                      <p className={`text-[9px] uppercase tracking-wider mt-0.5 font-bold ${isActive ? 'text-[#FF7BC1]' : 'text-slate-500'}`}>
                        {srv.bullets.length} {t('services.capabilities')}
                      </p>
                    </div>
                  </div>
                  
                  <LucideIcon
                    name="ChevronRight"
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'text-[#FF7BC1] translate-x-1' : 'text-slate-500 group-hover:translate-x-1'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
