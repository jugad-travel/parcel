'use client';

const benefices = [
  {
    titre: '+ Conversion immédiate',
    description: 'L\'utilisateur est guidé, rassuré, accompagné.',
    bgColor: 'bg-[#001a58]',
  },
  {
    titre: '+ Panier moyen',
    description: 'Plus de cross-sell naturels → panier complet.',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
  },
  {
    titre: '- Abandon',
    description: 'Moins d\'hésitation, moins d\'analyse, moins de fuite.',
    bgColor: 'bg-purple-600',
  },
  {
    titre: '+ Différenciation',
    description: 'Un service que vos concurrents n\'ont pas encore.',
    bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
  },
  {
    titre: '+ Récurrence',
    description: 'Chaque nouvelle aventure = nouvel achat.',
    bgColor: 'bg-indigo-600',
  },
  {
    titre: '+ Image de marque',
    description: 'Vous devenez une enseigne experte, moderne, utile.',
    bgColor: 'bg-[#001a58]',
  },
];

export default function AgentBenefices() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bénéfices Business — Ce que vous gagnez
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefices.map((benefice, index) => (
            <div
              key={index}
              className={`${benefice.bgColor} rounded-2xl p-8 shadow-lg text-white animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefice.titre}</h3>
              <p className="text-white/90">{benefice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

