'use client';

import Link from 'next/link';

export default function ProductsShowcase() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos solutions IA
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez nos produits phares qui transforment l&apos;expérience digitale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Noa */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-[#001a58] rounded-lg flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Noa</h3>
            <p className="text-gray-600 mb-6">
              Notre agent d&apos;achat IA qui révolutionne l&apos;achat en ligne. 
              Il conseille, sélectionne et construit un panier complet automatiquement.
            </p>
            <Link 
              href="/agent-ia-outdoor"
              className="inline-block bg-[#001a58] text-white px-6 py-3 rounded-full font-bold text-base hover:bg-[#002d7a] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Découvrez Noa notre agent d&apos;achat IA
            </Link>
          </div>

          {/* Jugad */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Jugad</h3>
            <p className="text-gray-600 mb-6">
              Notre plateforme de voyage IA qui personnalise chaque itinéraire. 
              Planifiez vos voyages avec une intelligence artificielle experte.
            </p>
            <a 
              href="https://jugadtravel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-base hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Découvrez Jugad notre plateforme de voyage IA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

