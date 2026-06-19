import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import LucideIcon from './LucideIcon';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Digital Marketing', 'Website Development', 'Branding & Design', 'Content Creation', 'SEO Services'];

  const getTranslatedCategory = (cat: string) => {
    if (cat === 'All') return language === 'am' ? 'ሁሉም' : 'All';
    if (cat === 'Digital Marketing') return t('service.digital-marketing.title');
    if (cat === 'Website Development') return t('service.website-development.title');
    if (cat === 'Branding & Design') return t('service.branding-design.title');
    if (cat === 'Content Creation') return t('service.content-creation.title');
    if (cat === 'SEO Services') return t('service.seo-services.title');
    return cat;
  };

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((proj) => proj.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#050505] text-[#f1f5f9] scroll-mt-12 relative overflow-hidden">
      {/* Background ambient mesh glows */}
      <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-[#D1008F]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[10%] w-[450px] h-[450px] bg-[#FFA52F]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black text-[#FF7BC1] tracking-widest uppercase font-display bg-[#D1008F]/15 border border-[#D1008F]/35 px-4 py-2 rounded-full inline-block">
            {t('portfolio.pretitle')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t('portfolio.title')}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Filter Navigation - Glass pill buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D1008F] to-[#F02AA6] text-white shadow-[0_0_15px_rgba(209,0,143,0.35)]'
                    : 'bg-white/[0.02] border border-white/[0.05] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {getTranslatedCategory(cat)}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const projectTitle = t(`project.${proj.id}.title`);
              const projectDesc = t(`project.${proj.id}.description`);
              const projectCategoryTranslated = getTranslatedCategory(proj.category);
              const projectMetricLabel = t(`project.${proj.id}.metricLabel`);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  className="group relative flex flex-col h-full bg-[#0d0d11] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-[#D1008F]/40 shadow-xl transition-all duration-300"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                    <img
                      src={proj.imageUrl}
                      alt={projectTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/[0.08] font-display text-[9px] uppercase tracking-wider font-extrabold text-[#FF7BC1]">
                      {projectCategoryTranslated}
                    </div>
                    
                    {/* Results success metric overlay if present */}
                    {proj.metrics && (
                      <div className="absolute bottom-4 right-4 bg-gradient-to-r from-[#FFA52F] to-[#F02AA6]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white font-display text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-lg">
                        <LucideIcon name="TrendingUp" size={12} />
                        {projectMetricLabel}: {proj.metrics.value}
                      </div>
                    )}
                  </div>

                  {/* Content body */}
                  <div className="flex flex-col flex-1 p-6 space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] text-[#FFA52F] font-bold tracking-widest uppercase">
                        {t('portfolio.client')}: {proj.client} • {proj.year}
                      </span>
                      <h3 className="font-display font-black text-base sm:text-lg text-white group-hover:text-[#F02AA6] transition-colors leading-snug uppercase tracking-wide">
                        {projectTitle}
                      </h3>
                    </div>

                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed font-light">
                      {projectDesc}
                    </p>

                    {/* Tag capsules */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[#FF7BC1] font-bold text-[9px] uppercase tracking-wider border border-white/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Button */}
                    <div className="pt-4 border-t border-white/[0.05] mt-auto flex justify-end">
                      <button
                        onClick={() => setActiveProjectModal(proj)}
                        className="text-xs font-black text-[#FF7BC1] hover:text-[#FFA52F] transition-colors flex items-center gap-1 focus:outline-none cursor-pointer uppercase tracking-wider"
                      >
                        {t('portfolio.caseDetails')}
                        <LucideIcon name="ExternalLink" size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Modal Case Details */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectModal(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Modal Body Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                className="relative bg-[#0d0d11] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-white/[0.08] z-10 p-6 sm:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all focus:outline-none border border-white/[0.05] z-20 cursor-pointer"
                  aria-label="Close details"
                >
                  <LucideIcon name="X" size={16} />
                </button>

                {/* Cover Image */}
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-white/[0.06]">
                  <img
                    src={activeProjectModal.imageUrl}
                    alt={t(`project.${activeProjectModal.id}.title`)}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Texts block */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#D1008F]/10 border border-[#D1008F]/25 text-[9px] uppercase tracking-widest font-extrabold font-display text-[#FF7BC1]">
                        {getTranslatedCategory(activeProjectModal.category)}
                      </span>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        {t('portfolio.year')}: {activeProjectModal.year}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-tight uppercase">
                      {t(`project.${activeProjectModal.id}.title`)}
                    </h3>
                    <p className="text-xs font-bold text-[#FFA52F] uppercase tracking-wider">
                      {t('portfolio.clientBusiness')}: {activeProjectModal.client}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {t(`project.${activeProjectModal.id}.description`)} {language === 'am' ? `ተጨማሪ መረጃ፡ ይህንን ፕሮጀክት ስኬታማ ለማድረግ ከ ${activeProjectModal.client} ጋር በቅርበት በመስራት፣ በኢትዮጵያና በምስራቅ አፍሪካ የሚገኙ ደንበኞችን የሚስቡ ዲጂታል ስራዎችን አከናውነናል።` : `Let's expand on this beautiful project: We teamed up with ${activeProjectModal.client} to construct a modern digital experience, targeting their exact demographic audience in Ethiopia and East Africa, producing highly scalable conversions.`}
                  </p>

                  {/* Highlights and Metrics */}
                  <div className="grid grid-cols-2 gap-4 bg-white/[0.02] rounded-2xl p-4 border border-white/[0.05]">
                    <div>
                      <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">{t('portfolio.deployed')}</p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {activeProjectModal.tags.map((tag) => (
                          <span key={tag} className="text-[9px] bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded text-[#FF7BC1] font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">{t('portfolio.results')}</p>
                      {activeProjectModal.metrics ? (
                        <p className="text-base sm:text-lg font-black text-[#FFA52F] font-display mt-1">
                          {activeProjectModal.metrics.value} <span className="text-[9px] uppercase text-slate-400 font-semibold block mt-0.5">{t(`project.${activeProjectModal.id}.metricLabel`)}</span>
                        </p>
                      ) : (
                        <p className="text-xs font-bold text-[#FF7BC1] mt-1 flex items-center gap-1 uppercase tracking-wide">
                          <LucideIcon name="CheckCircle" className="text-emerald-500 w-4 h-4" /> {t('portfolio.successful')}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveProjectModal(null)}
                      className="px-6 py-3 bg-gradient-to-r from-[#D1008F] to-[#F02AA6] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:shadow-[0_0_15px_rgba(209,0,143,0.3)] transition-all cursor-pointer focus:outline-none"
                    >
                      {t('portfolio.done')}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
