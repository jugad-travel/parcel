'use client';

const offers = [
  {
    title: 'Essentiel',
    description: 'Site sur-mesure, domaine & hébergement inclus, SEO de base, performance, maintenance, modifications sur demande, rapport Analytics mensuel.',
    gradient: 'from-blue-200 to-blue-300',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Pro',
    description: 'Essentiel + SEO avancé, GEO multi-zones, contenus enrichis, ajustements illimités (usage raisonnable), audit annuel, accès futur à l\'Espace Membre (stats live, demandes).',
    gradient: 'from-purple-200 to-purple-300',
    iconColor: 'text-purple-600',
  },
  {
    title: 'IA Studio',
    description: 'Pro + assistant IA, automatisations (avis, e-mails), 1 contenu/mois optimisé, stratégie territoriale avancée, recommandations IA, tableau de bord enrichi.',
    gradient: 'from-pink-200 to-pink-300',
    iconColor: 'text-pink-600',
  },
];

export default function Offers() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="offers" className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos offres
          </h2>
          <p className="text-lg text-gray-600">
            Choisissez l&apos;accompagnement, pas la complexité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={offer.title}
              className={`bg-gradient-to-br ${offer.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{offer.title}</h3>
              <p className="text-gray-700 mb-6">{offer.description}</p>
              <button
                onClick={handleContactClick}
                className="w-full bg-[#001a58] text-white px-6 py-3 rounded-full font-bold hover:bg-[#002d7a] transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Demander un devis
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

