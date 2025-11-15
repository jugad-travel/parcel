'use client';

const raisons = [
  'Explosion de la demande outdoor',
  'Clients saturés d\'informations',
  'IA conversationnelle = nouveau standard',
  'Les e-commerces doivent se différencier',
  'Le conseil expert n\'est plus scalable humainement',
];

export default function AgentPourquoiMaintenant() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Pourquoi c&apos;est le bon moment
          </h2>
          <div className="bg-[#001a58] rounded-2xl p-8 text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              <strong>Vos clients n&apos;achètent plus un produit.</strong>
              <br />
              <strong>Ils veulent un parcours. Une recommandation. Une solution.</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {raisons.map((raison, index) => (
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-lg font-semibold">{raison}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

