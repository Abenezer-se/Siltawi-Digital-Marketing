import { motion } from 'motion/react';
import { TEAM } from '../data';
import LucideIcon from './LucideIcon';
import { useLanguage } from '../context/LanguageContext';

export default function Team() {
  const { language, t } = useLanguage();

  const getTranslatedCategory = (cat: string) => {
    if (cat === 'Digital Marketing') return t('service.digital-marketing.title');
    if (cat === 'Website Development') return t('service.website-development.title');
    if (cat === 'Branding & Design') return t('service.branding-design.title');
    if (cat === 'Content Creation') return t('service.content-creation.title');
    if (cat === 'SEO Services') return t('service.seo-services.title');
    return cat;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 280, damping: 25 }
    },
  };

  return (
    <section id="team" className="py-24 bg-[#050505] text-[#f1f5f9] border-y border-white/[0.06] scroll-mt-12 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#D1008F]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black text-[#FFA52F] tracking-widest uppercase font-display bg-[#FFA52F]/15 border border-[#FFA52F]/35 px-4 py-2 rounded-full inline-block">
            {t('team.pretitle')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t('team.title')}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group bg-[#0d0d11] rounded-2xl border border-white/[0.06] hover:border-[#D1008F]/40 overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo representation */}
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-950 border-b border-white/[0.04]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Division tag */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[9px] uppercase font-black tracking-widest font-display border border-white/[0.08]">
                  {member.role === 'Founder & Visionary Leader' ? (language === 'am' ? 'መስራች' : 'Founder') : (language === 'am' ? 'ባለሙያ' : 'Specialist Crew')}
                </div>
              </div>

              {/* Technical description */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display font-black text-base sm:text-lg text-white group-hover:text-[#FF7BC1] transition-colors uppercase tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FFA52F] uppercase tracking-wider">
                    {t(`team.${member.id}.role`)}
                  </p>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {t(`team.${member.id}.description`)}{language === 'am' ? ' ለአገር ውስጥና ለዓለም አቀፍ ንግዶች እድገት ምቹ የሆኑ ዲጂታል ስልቶች እንዘረጋለን።' : " We construct unique paths for businesses, ensuring we deliver creative and modern designs coupled with robust analytics execution."}
                </p>

                {/* Social links simulation */}
                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                    {language === 'am' ? 'ክፍል' : 'Division'}: {getTranslatedCategory(member.category)}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="#linkedin"
                      onClick={(e) => e.preventDefault()}
                      className="p-2 rounded-lg bg-white/[0.03] text-slate-400 hover:text-[#FFA52F] hover:bg-white/[0.1] border border-white/[0.05] transition-colors"
                      aria-label="LinkedIn profile"
                    >
                      <LucideIcon name="Linkedin" size={13} />
                    </a>
                    <a
                      href="#facebook"
                      onClick={(e) => e.preventDefault()}
                      className="p-2 rounded-lg bg-white/[0.03] text-slate-400 hover:text-[#FFA52F] hover:bg-white/[0.1] border border-white/[0.05] transition-colors"
                      aria-label="Facebook profile"
                    >
                      <LucideIcon name="Facebook" size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
