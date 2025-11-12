'use client';

const forces = [
  {
    title: 'On s\'occupe de tout',
    description: 'Design, contenus, SEO, domaine, hébergement, maintenance.',
    bgColor: 'bg-[#001a58]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Optimisé',
    description: 'SEO, GEO, mobile, vitesse',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Tout-inclus',
    description: 'Vous n\'avez plus rien à gérer.',
    bgColor: 'bg-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Forces() {
  return (
    <section id="services" className="relative z-[20] py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Nos forces
        </h2>
        
        {/* 3 cartes en haut */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {forces.map((force, index) => (
            <div
              key={force.title}
              className={`${force.bgColor} rounded-2xl p-8 shadow-lg animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                {force.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{force.title}</h3>
              <p className="text-white/90 text-lg">{force.description}</p>
            </div>
          ))}
        </div>

        {/* "Votre site" avec surlignement */}
        <div className="text-center mb-2 animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 leading-none">
            <span className="relative inline-block px-2">
              <span className="relative z-10">votre site</span>
              <span 
                className="absolute top-3 bottom-0 left-0 right-0 bg-pink-500/40 transform -skew-x-12 rounded-sm" 
                style={{ zIndex: -1, pointerEvents: 'none' }}
              ></span>
            </span>
          </p>
        </div>

        {/* Message principal en bas */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-2">
            On le crée <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">gratuitement</span>
          </p>
          <p className="text-3xl md:text-4xl font-bold text-gray-700">
            On l&apos;optimise et on le maintient.
          </p>
        </div>
      </div>
    </section>
  );
}

