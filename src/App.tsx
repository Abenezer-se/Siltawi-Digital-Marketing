import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar height and visual triggers

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Glass Panel Interactive Tilt System
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.glass-panel, .glass-panel-heavy, .glass-panel-light') as HTMLElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalize cursor coordinates from -0.5 to 0.5
      const px = (x / rect.width) - 0.5;
      const py = (y / rect.height) - 0.5;

      // Max tilt of 12 degrees
      const tiltX = py * -12;
      const tiltY = px * 12;

      target.style.setProperty('--tilt-x', `${tiltX}deg`);
      target.style.setProperty('--tilt-y', `${tiltY}deg`);
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const card = target.closest('.glass-panel, .glass-panel-heavy, .glass-panel-light') as HTMLElement;
      if (!card) return;

      const relatedTarget = e.relatedTarget as HTMLElement;
      if (!relatedTarget || !card.contains(relatedTarget)) {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      {/* Premium Sticky Navigation Menu */}
      <Navbar activeSection={activeSection} onNavigate={navigateToSection} />

      {/* Primary Landing Page flow */}
      <main>
        {/* Hero & Counter Statistics */}
        <Hero onNavigate={navigateToSection} />

        {/* Agency details, founders and values */}
        <About />

        {/* Specialized capacities system */}
        <Services />

        {/* Interactive Case Studies project gallery */}
        <Portfolio />

        {/* Organized organizational team divisions */}
        <Team />

        {/* Testimonials Quote Carousel slider */}
        <Testimonials />

        {/* Contact info form & Google map section */}
        <Contact />
      </main>

      {/* Layout footer metadata */}
      <Footer onNavigate={navigateToSection} />
    </div>
  );
}
