'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AgentHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleDemoClick = () => {
    const videoSection = document.getElementById('video-demo');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCasUsageClick = () => {
    const solutionSection = document.getElementById('solution');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const progress = Math.min(scrollY / (windowHeight * 0.5), 1);
        setScrollProgress(progress);
      });
    };

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
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20">
      {/* Image Background - Fixed pour effet parallaxe */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Image
          src="/images/fond parcel.png"
          alt="Fond Parcel"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Fond blanc qui apparaît progressivement au scroll */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none"
        style={{ 
          opacity: scrollProgress,
          backgroundColor: 'white',
          transition: 'opacity 0.05s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      ></div>
      
      {/* Overlay pour améliorer la lisibilité */}
      <div 
        className="fixed top-0 left-0 w-full h-full z-[2] pointer-events-none transition-opacity duration-300"
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          opacity: 1 - scrollProgress * 0.5
        }}
      ></div>

      {/* Contenu */}
      <div 
        className="relative z-[50] max-w-5xl mx-auto text-center"
        style={{ 
          opacity: Math.max(0, 1 - scrollProgress * 2),
          transition: 'opacity 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Noa : L&apos;Assistant d&apos;achat IA qui<br />
          <span className="block mt-2">
            <span className="relative inline-block px-2">
              <span className="relative z-10">révolutionne l&apos;achat en ligne</span>
              <span 
                className="absolute top-3 bottom-0 left-12 -right-2 bg-pink-500/40 -z-10 rounded-sm"
                style={{
                  animation: 'highlightSlide 0.8s ease-out 0.5s both',
                  transformOrigin: 'left center',
                }}
              ></span>
            </span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Noa c&apos;est l&apos;agent d&apos;achat outdoor qui conseille, sélectionne et construit un panier complet automatiquement.
        </p>

        {/* Petite indication */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-white/70 italic text-center">
            Augmentez vos conversions, simplifiez les choix clients, et offrez une expérience d&apos;achat inédite.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button 
            onClick={handleDemoClick}
            className="group relative bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-white hover:border-white shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">Demander une démo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#001a58]/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button 
            onClick={handleCasUsageClick}
            className="group relative bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-white/10 hover:border-white shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">Voir un cas d&apos;usage</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

