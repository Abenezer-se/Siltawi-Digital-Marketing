import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';
import { useLanguage } from '../context/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqData: FAQItem[] = [
    {
      category: "Overview",
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      category: "Localization",
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      category: "Schedule",
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      category: "Assignments",
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      category: "Methodology",
      question: t('faq.q5'),
      answer: t('faq.a5')
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Generate real-time Structured Data (JSON-LD) for SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-[#050505] text-[#f1f5f9] border-t border-white/[0.06] scroll-mt-12 relative overflow-hidden">
      {/* JSON-LD for rich snippet SEO optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      
      {/* Background ambient noise/glowing circles */}
      <div className="absolute top-1/3 left-[-200px] w-96 h-96 bg-[#D1008F]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-[-200px] w-96 h-96 bg-[#FFA52F]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[15s]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black text-[#FFA52F] tracking-widest uppercase font-display bg-[#FFA52F]/10 border border-[#FFA52F]/35 px-4 py-2 rounded-full inline-block">
            {t('faq.pretitle')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t('faq.title')}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Dynamic Accordions Grid */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-2xl border transition-all duration-300 overflow-hidden shimmer-border ${
                  isOpen 
                    ? 'border-[#D1008F]/40 bg-gradient-to-r from-white/[0.04] to-[#D1008F]/[0.02] shadow-[0_15px_30px_rgba(209,0,143,0.06)]' 
                    : 'border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-start sm:items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    {/* Circle tag counter / Icon help */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#D1008F]/15 border-[#D1008F]/30 text-[#FF7BC1]' 
                        : 'bg-white/[0.02] border-white/[0.06] text-slate-400'
                    }`}>
                      <span className="text-xs font-black font-mono">0{index + 1}</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-black tracking-widest uppercase text-slate-500 font-mono">
                        {faq.category}
                      </span>
                      <h3 className={`text-sm sm:text-base font-bold tracking-tight text-white transition-colors ${
                        isOpen ? 'text-[#FF7BC1]' : 'group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Dynamic rotate chevron toggle indicator */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/[0.06] text-white shrink-0 transition-all duration-350 ${
                    isOpen ? 'rotate-180 bg-[#D1008F]/10 border-[#D1008F]/20 text-[#FF7BC1]' : ''
                  }`}>
                    <LucideIcon name="ChevronDown" size={14} />
                  </div>
                </button>

                {/* Animated dynamic collapsible pane */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 sm:pb-7 pl-18 sm:pl-18 pr-6 border-t border-white/[0.04] pt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {faq.answer.startsWith('*') || faq.answer.includes('\n') ? (
                          <div className="space-y-2">
                            {faq.answer.split('\n').map((line, lIdx) => (
                              <p key={lIdx}>{line}</p>
                            ))}
                          </div>
                        ) : (
                          <p>{faq.answer}</p>
                        )}
                        
                        {/* Elegant footer tag within answer */}
                        <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                          <LucideIcon name="HelpCircle" size={12} className="text-[#FFA52F]" />
                          <span>{t('faq.verifiedResponse')}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support callout footer block */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400">
            {t('faq.unanswered')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-black text-[#FF7BC1] uppercase tracking-wider mt-2 hover:text-[#FFA52F] transition-colors"
          >
            {t('faq.shootMessage')}
            <LucideIcon name="ArrowRight" size={11} />
          </a>
        </div>

      </div>
    </section>
  );
}
