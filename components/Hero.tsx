'use client';

import { useEffect, useRef, useState } from 'react';
import RotatingWords from './RotatingWords';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      // Utiliser requestAnimationFrame pour une transition plus fluide
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculer le progrès du scroll (0 à 1) - très rapide (0.5x la hauteur)
        const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
        setScrollProgress(progress);
      });
    };

    // Appeler une première fois pour l'état initial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
      {/* Video Background - Fixed pour effet parallaxe */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/grok-video-2769d6e3-899b-48f8-bbca-4f947275cade.mp4" type="video/mp4" />
      </video>
      
      {/* Fond blanc qui apparaît progressivement au scroll - couvre toute la page mais derrière tous les éléments */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none"
        style={{ 
          opacity: scrollProgress,
          backgroundColor: 'white',
          transition: 'opacity 0.05s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      ></div>
      
      {/* Overlay pour améliorer la lisibilité - Fixed */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-[2] pointer-events-none transition-opacity duration-300"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          opacity: 1 - scrollProgress * 0.5 // Réduit l'overlay noir au scroll
        }}
      ></div>
      
      {/* Contenu - Relative pour qu'il monte lors du scroll - disparaît progressivement au scroll */}
      <div 
        className="relative z-[50] max-w-4xl mx-auto text-center space-y-8 pt-8"
        style={{ 
          opacity: Math.max(0, 1 - scrollProgress * 2),
          transition: 'opacity 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          L&apos;agence pour<br className="leading-none" />
          <span className="block mt-1">
            votre{' '}
            <span className="relative inline-block">
              futur site.
              <span className="absolute bottom-0 left-0 right-0 h-3 bg-pink-500/40 -z-10 transform -skew-x-12"></span>
            </span>
          </span>
        </h1>

        {/* Sub-headline */}
        <div className="flex justify-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-fade-in-up drop-shadow-md text-left pl-64" style={{ width: 'fit-content' }}>
            <RotatingWords />
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={handleContactClick}
            className="group relative bg-[#001a58] text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-[#002d7a] shadow-lg hover:shadow-2xl hover:shadow-[#001a58]/50"
          >
            <span className="relative z-10">C&apos;EST PARTI !</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
          </button>
          <button 
            onClick={handleDiscoverClick}
            className="group relative bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-white hover:border-white shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">DÉCOUVRIR</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#001a58]/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-[#001a58]/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

