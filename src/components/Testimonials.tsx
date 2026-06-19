import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import LucideIcon from './LucideIcon';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-[#050505] text-[#f1f5f9] overflow-hidden scroll-mt-12 relative border-b border-white/[0.06]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#D1008F]/5 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-[10s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] font-black text-[#FF7BC1] tracking-widest uppercase font-display bg-[#D1008F]/15 border border-[#D1008F]/35 px-4 py-2 rounded-full inline-block">
            {t('testimonials.pretitle')}
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {t('testimonials.title')}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12 md:px-16 min-h-[380px] flex flex-col justify-center glass-panel rounded-3xl p-8 border border-white/[0.08] shadow-2xl shimmer-border">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full flex flex-col items-center text-center space-y-6"
            >
              {/* Huge quote mark */}
              <span className="font-display font-black text-7xl sm:text-8xl text-[#D1008F]/20 select-none leading-none h-12">
                “
              </span>

              {/* Quote text */}
              <blockquote className="font-display font-semibold text-lg sm:text-xl md:text-2xl text-white leading-normal tracking-tight px-2 sm:px-6">
                "{t(`testimonial.${activeTestimonial.id}.quote`)}"
              </blockquote>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <LucideIcon key={i} name="Star" className="w-5 h-5 text-[#F5D400] fill-[#F5D400]" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <img
                  src={activeTestimonial.avatar}
                  alt={activeTestimonial.author}
                  className="w-14 h-14 rounded-full border-2 border-white/[0.08] shadow-lg object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <h4 className="font-display font-black text-white text-base uppercase tracking-wider">
                    {activeTestimonial.author}
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold tracking-wide">
                    {t(`testimonial.${activeTestimonial.id}.role`)} — <span className="text-[#FF7BC1] font-bold">{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2 sm:px-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/[0.02] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all pointer-events-auto cursor-pointer focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <LucideIcon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/[0.02] hover:bg-white/[0.1] border border-white/[0.08] text-slate-300 hover:text-white transition-all pointer-events-auto cursor-pointer focus:outline-none"
              aria-label="Next Testimonial"
            >
              <LucideIcon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Bullets indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                activeIndex === idx ? 'bg-[#D1008F] w-8 shadow-[0_0_8px_#D1008F]' : 'bg-white/[0.15] hover:bg-white/[0.4]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
