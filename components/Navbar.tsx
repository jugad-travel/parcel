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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 animate-slide-in">
          <div className="w-10 h-10 bg-[#001a58] rounded-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-gray-900">Parcel</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="text-gray-700 hover:text-[#001a58] transition-colors duration-200 font-medium">
            Services
          </a>
          <a 
            href="#contact" 
            className="bg-[#001a58] text-white px-6 py-2 rounded-full font-medium hover:bg-[#002d7a] transition-all duration-200 transform hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

