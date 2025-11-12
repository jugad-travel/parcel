'use client';

const steps = [
  {
    title: 'Création gratuite',
    description: 'Prototype, design sur-mesure, révisions. Vous validez avant tout.',
    bgColor: 'bg-[#001a58]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Lancement optimisé',
    description: 'SEO, vitesse, GEO local, conformité, IA-ready. Mise en ligne propre.',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Abonnement tout-inclus',
    description: 'Maintenance, mises à jour, modifications sur demande, rapport Analytics mensuel.',
    bgColor: 'bg-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600">
            Un modèle simple : nous créons, vous profitez.
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
          <p className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-2">
            Nous <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">créons</span>
          </p>
          <p className="text-3xl md:text-4xl font-bold text-gray-700">
            Vous profitez.
          </p>
        </div>
      </div>
    </section>
  );
}

