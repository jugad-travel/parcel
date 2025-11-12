'use client';

const services = [
  {
    title: 'UX/UI Design',
    description: 'Maquettes interactives, prototypes cliquables. Design moderne et intuitif.',
    bgColor: 'bg-[#001a58]',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Développement Web',
    description: 'Code propre, rapide et maintenable. Technologies modernes et éprouvées.',
    bgColor: 'bg-gradient-to-r from-pink-500 to-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18L22 12L16 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6L2 12L8 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'SEO & Lancement',
    description: 'Référencement naturel, performances, indexation propre.',
    bgColor: 'bg-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Intégration IA',
    description: 'Chatbots, automatisations, contenus assistés, analytics intelligents.',
    bgColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Nos services
        </h2>
        
        {/* 4 cartes en haut */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`${service.bgColor} rounded-2xl p-8 shadow-lg animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/90 text-lg">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Message principal en bas */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
            Des sites <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">sur-mesure</span>
          </p>
          <p className="text-3xl md:text-4xl font-bold text-gray-700">
            Qui allient design élégant et performances optimales.
          </p>
        </div>
      </div>
    </section>
  );
}

