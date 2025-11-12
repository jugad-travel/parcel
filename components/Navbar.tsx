'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999]">
      <div className="bg-purple-100/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg flex items-center justify-center relative">
        {/* Liens de navigation centrés */}
        <div className="flex items-center gap-6 relative z-10">
          <a 
            href="#how-it-works" 
            onClick={handleHowItWorksClick}
            className="relative text-black font-bold text-sm uppercase tracking-wide hover:opacity-70 transition-opacity px-2 cursor-pointer"
            style={{ position: 'relative', zIndex: 10 }}
          >
            <span className="relative z-10">Commencer</span>
            <span 
              className="absolute inset-0 top-1 bottom-0 left-0 right-0 bg-pink-500/40 transform -skew-x-12 rounded-sm" 
              style={{ zIndex: -1, pointerEvents: 'none' }}
            ></span>
          </a>
          <a 
            href="#services" 
            onClick={handleServicesClick}
            className="text-black font-bold text-sm uppercase tracking-wide hover:opacity-70 transition-opacity px-2 cursor-pointer relative z-10"
          >
            Services
          </a>
          <a 
            href="#contact" 
            onClick={handleContactClick}
            className="text-black font-bold text-sm uppercase tracking-wide hover:opacity-70 transition-opacity px-2 cursor-pointer relative z-10"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

