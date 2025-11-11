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
        <div className="flex items-center animate-slide-in">
          <span className={`text-2xl font-bold transition-colors duration-200 ${scrolled ? 'text-gray-900' : 'text-white'}`}>Parcel</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className={`transition-colors duration-200 font-medium ${scrolled ? 'text-gray-700 hover:text-[#001a58]' : 'text-white hover:text-white/80'}`}>
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

