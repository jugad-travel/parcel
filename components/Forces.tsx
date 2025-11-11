'use client';

const forces = [
  {
    title: 'On s\'occupe de tout',
    description: 'Design, contenus, SEO, domaine, hébergement, maintenance.',
    gradient: 'from-pink-200 to-pink-300',
    iconColor: 'text-pink-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'SEO & GEO qui convertissent',
    description: 'Visibles localement, structure IA-ready, résultats mesurables.',
    gradient: 'from-teal-200 to-teal-300',
    iconColor: 'text-teal-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Vitesse & qualité',
    description: 'Code propre, performant, mobile-first.',
    gradient: 'from-purple-200 to-purple-300',
    iconColor: 'text-purple-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'IA quand c\'est utile',
    description: 'Chatbot, automatisations, contenus assistés, analytics intelligents.',
    gradient: 'from-blue-200 to-blue-300',
    iconColor: 'text-blue-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function Forces() {
  return (
    <section id="services" className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
          Nos forces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {forces.map((force, index) => (
            <div
              key={force.title}
              className={`bg-gradient-to-br ${force.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${force.iconColor} bg-white rounded-lg flex items-center justify-center mb-4`}>
                {force.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{force.title}</h3>
              <p className="text-gray-700">{force.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

