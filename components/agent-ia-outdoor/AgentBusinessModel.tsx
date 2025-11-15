'use client';

const options = [
  {
    titre: 'Abonnement mensuel',
    description: 'Selon le trafic de votre site.',
    bgColor: 'bg-[#001a58]',
  },
  {
    titre: 'Option à l\'usage',
    description: 'Paiement par génération d\'analyse / panier.',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
  },
  {
    titre: 'Marque blanche',
    description: 'Branding complet.',
    bgColor: 'bg-purple-600',
  },
  {
    titre: 'Pack "Stores + Web"',
    description: 'Pour les enseignes omnicanales.',
    bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
  },
  {
    titre: 'Support premium',
    description: 'Optimisation continue des recommandations.',
    bgColor: 'bg-indigo-600',
  },
];

export default function AgentBusinessModel() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business Model — Simple & Rentable
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <div
              key={index}
              className={`${option.bgColor} rounded-2xl p-8 shadow-lg text-white animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{option.titre}</h3>
              <p className="text-white/90">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

