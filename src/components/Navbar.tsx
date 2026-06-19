import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LucideIcon from './LucideIcon';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Our Team' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/75 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Futuristic Logo container */}
          <button
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-3.5 group focus:outline-none text-left"
            aria-label="Siltawi Home"
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden flex items-center justify-center rounded-xl bg-slate-950 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(240,42,166,0.4)] border border-[#D1008F]/25">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D1008F]/10 via-transparent to-[#F5D400]/5" />
              <img
                src="https://workshop.siltawi.com/siltawi_logo_normal_eng_v2.svg"
                alt="Siltawi Digital Marketing Logo"
                className="h-full w-auto object-contain brightness-110 contrast-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const fallback = document.getElementById('logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div id="logo-fallback" className="hidden font-display font-extrabold text-xs text-white">
                SLTW
              </div>
            </div>
            
            <div className="flex flex-col items-start leading-none">
              <span className="font-display font-black text-lg tracking-tight text-white group-hover:text-[#F02AA6] transition-colors">
                Siltawi
              </span>
              <span className="text-[9px] uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#D1008F] to-[#FFA52F] font-bold font-display mt-0.5">
                Digital Marketing
              </span>
            </div>
          </button>

          {/* Desktop futuristic links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-gradient-to-r from-[#D1008F] to-[#FFA52F] rounded-full shadow-[0_0_8px_rgba(240,42,166,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            
            {/* Gradient button with neon glow */}
            <button
              onClick={() => handleItemClick('contact')}
              className="ml-6 px-5 py-2.5 bg-gradient-to-r from-[#D1008F] to-[#F02AA6] hover:from-[#F02AA6] hover:to-[#FFA52F] text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(209,0,143,0.35)] hover:shadow-[0_0_20px_rgba(255,165,47,0.5)] focus:outline-none active:scale-95 cursor-pointer"
            >
              Consult Now
            </button>
          </nav>

          {/* Mobile menu and indicator */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-350 hover:text-white focus:outline-none border border-slate-800"
              aria-label="Toggle Menu"
            >
              <LucideIcon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Container */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[69px] bg-black/90 backdrop-blur-md z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 top-[69px] bg-[#050505] border-b border-white/[0.08] shadow-2xl z-50 overflow-hidden"
            >
              <div className="px-5 pt-4 pb-8 space-y-1 bg-[#050505]">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`flex w-full items-center px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all focus:outline-none ${
                        isActive
                          ? 'bg-gradient-to-r from-[#D1008F]/15 to-transparent text-[#FF7BC1] border-l-2 border-[#D1008F]'
                          : 'text-slate-400 hover:text-white hover:bg-white/[0.02]'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
                <div className="pt-6 px-4">
                  <button
                    onClick={() => handleItemClick('contact')}
                    className="w-full py-3.5 bg-gradient-to-r from-[#D1008F] to-[#F02AA6] text-white font-bold text-center text-xs uppercase tracking-widest rounded-xl shadow-[0_0_15px_rgba(209,0,143,0.3)]"
                  >
                    Get Connected
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
