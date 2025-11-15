'use client';

const clients = [
  {
    titre: 'E-commerce Outdoor',
    description: 'Augmentez vos conversions, automatisez le conseil.',
    points: [
      'Recommandations pertinentes',
      'Filtrage intelligent',
      'Plus de produits complémentaires',
      'Moins d\'abandon panier',
      'Expérience premium',
    ],
    bgColor: 'bg-[#001a58]',
  },
  {
    titre: 'Boutiques physiques (avec site)',
    description: 'Un vendeur expert disponible 24/7.',
    points: [
      'Conseils adaptés',
      'Panier prêt avant la visite en magasin',
      'Expérience omnicanale fluide',
      'Mise en avant de vos meilleures marges',
    ],
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
  },
  {
    titre: 'Marques Outdoor',
    description: 'Accompagnez chaque client vers le bon équipement.',
    points: [
      'Education produit',
      'Mise en valeur de vos gammes techniques',
      'Guided selling',
      'Réduction de l\'hésitation et des retours',
    ],
    bgColor: 'bg-purple-600',
  },
];

export default function AgentPourQui() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pour qui Noa est-il destiné ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`${client.bgColor} rounded-2xl p-8 shadow-lg text-white animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{index + 1}. {client.titre}</h3>
              <p className="text-white/90 mb-4">{client.description}</p>
              <ul className="space-y-2">
                {client.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span className="text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

