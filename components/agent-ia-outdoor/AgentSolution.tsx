'use client';

const etapes = [
  {
    titre: 'Pose les questions clés',
    description: 'Niveau, saison, budget, durée',
  },
  {
    titre: 'Génère la checklist complète',
    description: 'Des produits nécessaires',
  },
  {
    titre: 'Vérifie ce que le client possède déjà',
    description: 'Évite les doublons',
  },
  {
    titre: 'Sélectionne dans votre catalogue',
    description: 'Les meilleurs articles',
  },
  {
    titre: 'Propose 2–3 alternatives par produit',
    description: 'Selon le budget et les préférences',
  },
  {
    titre: 'Crée un panier complet',
    description: 'Prêt à acheter',
  },
];

export default function AgentSolution() {
  const handleTesterClick = () => {
    const videoSection = document.getElementById('video-demo');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Solution : Noa l&apos;agent IA d&apos;achat
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Un assistant intelligent intégré à votre site, qui accompagne chaque client du besoin… au panier.
          </p>
        </div>

        {/* Exemple d'utilisation */}
        <div className="bg-[#001a58] rounded-2xl p-8 mb-12 text-white animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg mb-4">Il suffit que l&apos;utilisateur explique son projet :</p>
          <div className="bg-white/10 rounded-lg p-6 mb-6">
            <p className="text-2xl font-bold italic">&quot;Je pars faire un trek de 3 jours en septembre.&quot;</p>
          </div>
          <p className="text-lg font-semibold mb-4">Noa :</p>
        </div>

        {/* Étapes de Noa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {etapes.map((etape, index) => (
            <div
              key={index}
              className={`${
                index % 3 === 0 ? 'bg-[#001a58]' : 
                index % 3 === 1 ? 'bg-gradient-to-r from-pink-500 to-purple-600' : 
                'bg-purple-600'
              } rounded-2xl p-6 shadow-lg text-white animate-fade-in-up`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{etape.titre}</h3>
              <p className="text-white/90">{etape.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <button
            onClick={handleTesterClick}
            className="bg-[#001a58] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#002d7a] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Tester maintenant
          </button>
        </div>
      </div>
    </section>
  );
}

