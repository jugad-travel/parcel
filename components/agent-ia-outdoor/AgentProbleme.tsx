'use client';

const problemes = [
  'Trop de produits, trop techniques',
  'Les utilisateurs ne savent pas quoi choisir',
  'Ils ont peur d\'oublier un élément essentiel',
  'Ils passent des heures à comparer',
  'Ils abandonnent facilement leur panier',
  'Le catalogue seul n\'aide pas à prendre une décision',
];

export default function AgentProbleme() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi vos clients ont besoin de Noa ?
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
            Choisir son équipement outdoor est devenu trop complexe.
          </p>
        </div>

        {/* Liste des problèmes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problemes.map((probleme, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-gray-900 font-medium text-lg">{probleme}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-3xl md:text-4xl font-bold text-gray-900">
            Conclusion : vos visiteurs veulent acheter… mais ils n&apos;y arrivent pas.
          </p>
        </div>
      </div>
    </section>
  );
}

