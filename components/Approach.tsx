'use client';

const steps = [
  {
    title: 'Audit',
    description: 'On cerne vos besoins, rien à préparer.',
    bgColor: 'bg-[#001a58]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
        <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Maquette Gratuite',
    description: 'Vous voyez avant d\'accepter.',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Validation & Lancement',
    description: 'Ajustements simples, site en ligne, suivi et améliorations.',
    bgColor: 'bg-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Approach() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre approche
          </h2>
          <p className="text-xl text-gray-600">
            Un processus simple et transparent. De l&apos;idée au lancement en 4 étapes.
          </p>
        </div>
        
        {/* 3 cartes en haut */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`${step.bgColor} rounded-2xl p-8 shadow-lg animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/90 text-lg">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Message principal en bas */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
            De l&apos;<span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">idée</span>
          </p>
          <p className="text-3xl md:text-4xl font-bold text-gray-700">
            Au lancement en 4 étapes.
          </p>
        </div>
      </div>
    </section>
  );
}

