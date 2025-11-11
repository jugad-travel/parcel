'use client';

const steps = [
  {
    number: '01',
    title: 'Création gratuite',
    description: 'Prototype, design sur-mesure, révisions. Vous validez avant tout.',
    gradient: 'from-blue-200 via-purple-200 to-purple-300',
    iconBg: 'bg-[#001a58]',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Lancement optimisé',
    description: 'SEO, vitesse, GEO local, conformité, IA-ready. Mise en ligne propre.',
    gradient: 'from-green-200 via-teal-200 to-teal-300',
    iconBg: 'bg-green-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Abonnement tout-inclus',
    description: 'Maintenance, mises à jour, modifications sur demande, rapport Analytics mensuel.',
    gradient: 'from-purple-200 via-indigo-200 to-indigo-300',
    iconBg: 'bg-purple-500',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <section id="how-it-works" className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-600">
            Un modèle simple : nous créons, vous profitez.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-gray-200/30">
                {step.number}
              </div>
              <div className={`w-12 h-12 ${step.iconBg} rounded-lg flex items-center justify-center mb-4 relative z-10`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
              <p className="text-gray-700 relative z-10">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={handleContactClick}
            className="bg-[#001a58] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#002d7a] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Obtenir ma maquette gratuite
          </button>
        </div>
      </div>
    </section>
  );
}

