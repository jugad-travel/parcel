'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-4 animate-fade-in">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#001a58]">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
          </svg>
          <span className="text-sm font-medium text-gray-700">Agence Web Créative</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          L&apos;agence pour<br />
          votre futur site.
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Des sites ultra-personnalisés, beaux et rapides — créés en un rien de temps.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button className="bg-[#001a58] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#002d7a] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            C&apos;EST PARTI !
          </button>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-200 transform hover:scale-105">
            DÉCOUVRIR
          </button>
        </div>
      </div>
    </section>
  );
}

