import { motion } from 'motion/react';
import { CORE_VALUES } from '../data';
import LucideIcon from './LucideIcon';

export default function About() {
  const targetClients = [
    'Small Businesses',
    'Startups',
    'Restaurants & Cafes',
    'Educational Institutions',
    'Real Estate Companies',
    'NGOs',
    'Healthcare Providers',
    'E-commerce Businesses'
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
  };

  return (
    <section id="about" className="py-24 bg-[#050505] text-[#f1f5f9] overflow-hidden scroll-mt-12 relative">
      {/* Background radial soft light blobs for depth */}
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] bg-[#7A0058]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] bg-[#D1008F]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] font-black text-[#FF7BC1] tracking-widest uppercase font-display bg-[#D1008F]/10 border border-[#D1008F]/30 px-4 py-2 rounded-full inline-block">
            About Our Agency
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Empowering the Next Generation of African Enterprise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Founded in 2023 in the heart of Addis Ababa, <strong className="text-white font-medium">Siltawi Digital Marketing</strong> was built on the core belief that businesses thrive when armed with exceptional digital assets and analytical marketing. Today, we deliver holistic, world-class branding, tech engineering, and SEO strategies.
          </p>
        </div>

        {/* Mission & Vision Section - Beautiful glowing glass containers */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group hover:border-[#D1008F]/40 transition-all duration-300 shimmer-border">
            <div className="absolute -right-16 -top-16 w-44 h-44 bg-[#D1008F]/10 rounded-full blur-2xl group-hover:bg-[#D1008F]/20 transition-all duration-300" />
            <div className="w-12 h-12 bg-[#D1008F]/10 rounded-xl flex items-center justify-center text-[#FF7BC1] mb-6 border border-[#D1008F]/25">
              <LucideIcon name="Crown" size={24} />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-3 tracking-tight">Our Mission</h3>
            <p className="text-slate-300 font-light leading-relaxed text-sm">
              To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful customer connections. We bridge creative storytelling with robust data reporting to produce exceptional ROI.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-panel relative overflow-hidden group hover:border-[#FFA52F]/40 transition-all duration-300 shimmer-border">
            <div className="absolute -right-16 -top-16 w-44 h-44 bg-[#FFA52F]/5 rounded-full blur-2xl group-hover:bg-[#FFA52F]/10 transition-all duration-300" />
            <div className="w-12 h-12 bg-[#FFA52F]/10 rounded-xl flex items-center justify-center text-[#FFA52F] mb-6 border border-[#FFA52F]/25">
              <LucideIcon name="Lightbulb" size={24} />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-3 tracking-tight">Our Vision</h3>
            <p className="text-slate-300 font-light leading-relaxed text-sm">
              To become one of Africa's leading digital marketing agencies by delivering highly creative, data-driven, and results-oriented digital solutions. We strive to be the standard of design craftsmanship and local business growth.
            </p>
          </div>
        </div>

        {/* Target Clients Section with futuristic tag chips */}
        <div className="mb-24 py-10 px-8 rounded-2xl glass-panel-heavy border border-white/[0.08]">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h4 className="font-display font-black text-[#FFA52F] text-xs uppercase tracking-widest mb-2.5">Our Target Industries</h4>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">Whom We Serve</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                From micro-cafes to educational establishments, our bespoke structures deliver high visibility, organic engagement, and conversion optimization.
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-wrap gap-2.5">
              {targetClients.map((client, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#D1008F]/50 hover:bg-[#D1008F]/5 text-slate-300 hover:text-[#FF7BC1] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F02AA6]" />
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">Our Core Values</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-3">
              The fundamental principles that guide our work, our corporate relationships, and our growth.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CORE_VALUES.map((val) => (
              <motion.div
                key={val.title}
                variants={cardVariants}
                className="p-8 rounded-2xl glass-panel hover:border-[#D1008F]/40 transition-all duration-300 group flex flex-col items-start shimmer-border"
              >
                <div className="p-3.5 rounded-xl bg-[#D1008F]/10 border border-[#D1008F]/20 text-[#FF7BC1] mb-6 group-hover:bg-[#D1008F] group-hover:text-white group-hover:shadow-[0_0_15px_#D1008F] transition-all duration-300">
                  <LucideIcon name={val.iconName} size={20} />
                </div>
                <h4 className="font-display font-black text-lg text-white group-hover:text-[#F02AA6] transition-colors uppercase tracking-wide">
                  {val.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
