'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/grok-video-2769d6e3-899b-48f8-bbca-4f947275cade.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
      
      {/* Contenu */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 mb-4 animate-fade-in">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#001a58]">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
          </svg>
          <span className="text-sm font-medium text-gray-900">Agence Web Créative</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          L&apos;agence pour<br />
          votre futur site.
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.4s' }}>
          Des sites ultra-personnalisés, beaux et rapides — créés en un rien de temps.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button className="bg-[#001a58] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#002d7a] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            C&apos;EST PARTI !
          </button>
          <button className="bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg">
            DÉCOUVRIR
          </button>
        </div>
      </div>
    </section>
  );
}

