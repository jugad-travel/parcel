'use client';

const features = [
  {
    titre: 'Un moteur IA entraîné sur l\'outdoor',
    description: 'Membranes, R-value, imperméabilité, grammage, matériaux…',
    detail: '→ L\'IA comprend les vraies différences produits.',
    bgColor: 'bg-[#001a58]',
  },
  {
    titre: 'Sélecteur produit multi-critères',
    description: 'Poids, prix, température, résistance, compatibilité.',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
  },
  {
    titre: 'Intégration simple',
    description: 'Script JS, Module iframe, API REST',
    bgColor: 'bg-purple-600',
  },
  {
    titre: 'Connexion à votre catalogue',
    description: 'Scraping / API interne / flux produit.',
    bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
  },
  {
    titre: 'Dashboard & analytics',
    description: 'Taux d\'usage, recommandations, conversion, panier moyen.',
    bgColor: 'bg-indigo-600',
  },
];

export default function AgentTechnologie() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologie derrière Noa
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-8 shadow-lg text-white animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.titre}</h3>
              <p className="text-white/90 mb-2">{feature.description}</p>
              {feature.detail && (
                <p className="text-white/80 font-semibold">{feature.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

