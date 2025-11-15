'use client';

const etapes = [
  {
    numero: '1',
    titre: 'Le client décrit son activité',
    description: 'Ex : randonnée, trek, trail, bivouac, ski…',
    bgColor: 'bg-[#001a58]',
  },
  {
    numero: '2',
    titre: 'Noa analyse le besoin',
    description: 'Saison, durée, météo, intensité, budget.',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
  },
  {
    numero: '3',
    titre: 'Checklist personnalisée',
    description: 'Une liste complète et précise, adaptée au contexte.',
    bgColor: 'bg-purple-600',
  },
  {
    numero: '4',
    titre: 'Sélection produits dans votre catalogue',
    description: 'Seulement les articles qui correspondent à la pratique réelle.',
    bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
  },
  {
    numero: '5',
    titre: 'Alternatives intelligentes',
    description: 'En fonction du budget, de la gamme, ou du niveau.',
    bgColor: 'bg-indigo-600',
  },
  {
    numero: '6',
    titre: 'Panier complet & achat immédiat',
    description: 'Avec ajout direct en panier + analytics.',
    bgColor: 'bg-[#001a58]',
  },
];

export default function AgentCommentCaMarche() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment Noa permet un parcours d&apos;achat 10X plus simple
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {etapes.map((etape, index) => (
            <div
              key={index}
              className={`${etape.bgColor} rounded-2xl p-8 shadow-lg text-white animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 text-3xl font-bold">
                {etape.numero}
              </div>
              <h3 className="text-2xl font-bold mb-3">{etape.titre}</h3>
              <p className="text-white/90">{etape.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

