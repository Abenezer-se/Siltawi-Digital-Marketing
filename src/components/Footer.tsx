import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Our Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#f1f5f9] pt-20 pb-10 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D1008F] via-[#F02AA6] to-[#FFA52F]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/[0.06]">
          
          {/* Column 1 - Brand Identity info */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3.5 group text-left focus:outline-none"
            >
              <div className="relative h-10 w-10 p-1 bg-slate-950 rounded-lg flex items-center justify-center border border-[#D1008F]/30 shadow-[0_0_8px_rgba(209,0,143,0.30)]">
                <img
                  src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
                  alt="Siltawi logo"
                  className="h-full w-auto object-contain brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col leading-none text-white">
                <span className="font-display font-black text-base tracking-tight">Siltawi</span>
                <span className="text-[9px] font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#D1008F] to-[#FFA52F] font-display mt-0.5">DIGITAL MARKETING</span>
              </div>
            </button>
            
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Based in Addis Ababa, Ethiopia, Siltawi is a digital marketing and creative agency helping startups and established projects drive customer conversion with innovative design and SEO architecture.
            </p>

            {/* Social Icons list */}
            <div className="flex items-wrap gap-2.5 pt-2">
              <a
                href="https://t.me/siltawi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#D1008F] hover:shadow-[0_0_8px_#D1008F] transition-all duration-300"
                aria-label="Siltawi on Telegram"
              >
                <LucideIcon name="Send" size={15} />
              </a>
              <a
                href="https://facebook.com/siltawi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#D1008F] hover:shadow-[0_0_8px_#D1008F] transition-all duration-300"
                aria-label="Siltawi on Facebook"
              >
                <LucideIcon name="Facebook" size={15} />
              </a>
              <a
                href="https://instagram.com/siltawi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#D1008F] hover:shadow-[0_0_8px_#D1008F] transition-all duration-300"
                aria-label="Siltawi on Instagram"
              >
                <LucideIcon name="Instagram" size={15} />
              </a>
              <a
                href="https://linkedin.com/company/siltawi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#D1008F] hover:shadow-[0_0_8px_#D1008F] transition-all duration-300"
                aria-label="Siltawi on LinkedIn"
              >
                <LucideIcon name="Linkedin" size={15} />
              </a>
              <a
                href="https://wa.me/251900000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#D1008F] hover:shadow-[0_0_8px_#D1008F] transition-all duration-300"
                aria-label="Siltawi on WhatsApp"
              >
                <LucideIcon name="MessageCircle" size={15} />
              </a>
            </div>
          </div>

          {/* Column 2 - Core Services Links */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-display font-black text-[#FFA52F] text-xs uppercase tracking-widest">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left focus:outline-none">Digital Advertising</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-slate-400 text-left focus:outline-none">Website Development</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-slate-400 text-left focus:outline-none">Branding & Identity</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-slate-400 text-left focus:outline-none">Content & Photography</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-slate-400 text-left focus:outline-none">Search Optimization</button></li>
            </ul>
          </div>

          {/* Column 3 - Navigation links */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="font-display font-black text-[#FFA52F] text-xs uppercase tracking-widest">
              Sitemap Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white transition-colors text-slate-400 text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Direct Contact details */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-display font-black text-[#FFA52F] text-xs uppercase tracking-widest">
              Our Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <p className="leading-relaxed">
                Addis Ababa, <br className="hidden md:inline" /> Ethiopia
              </p>
              <div className="space-y-1">
                <p>
                  <a href="mailto:info@siltawi.com" className="hover:text-white font-medium transition-colors">
                    info@siltawi.com
                  </a>
                </p>
                <p>
                  <a href="tel:+251900000000" className="hover:text-white font-medium transition-colors">
                    +251 900 000 000
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-xs text-slate-500 space-y-4 sm:space-y-0">
          <div>
            <p>© {currentYear} Siltawi Digital Marketing. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-slate-600">Addis Ababa, Ethiopia. Powered by premium analytics engineering.</p>
          </div>
          
          <button
            onClick={handleBackToTop}
            className="px-4 py-2 bg-white/[0.02] border border-white/[0.05] rounded-lg hover:bg-white/[0.1] hover:text-white text-slate-400 transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
            aria-label="Scroll back to top"
          >
            Back to Top
            <LucideIcon name="ChevronRight" size={12} className="-rotate-90" />
          </button>
        </div>

      </div>
    </footer>
  );
}
