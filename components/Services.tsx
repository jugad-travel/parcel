'use client';

import { ReactNode } from 'react';

const services: Array<{
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  icon: string | ReactNode;
}> = [
  {
    title: 'UX/UI Design',
    description: 'Maquettes interactives, prototypes cliquables. Design moderne et intuitif.',
    gradient: 'from-pink-200 to-pink-300',
    iconColor: 'text-pink-600',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Développement Web',
    description: 'Code propre, rapide et maintenable. Technologies modernes et éprouvées.',
    gradient: 'from-blue-200 to-blue-300',
    iconColor: 'text-blue-600',
    icon: '<>',
  },
  {
    title: 'Lancement & SEO',
    description: 'Mise en ligne optimisée. Référencement naturel et performances maximales.',
    gradient: 'from-purple-200 to-purple-300',
    iconColor: 'text-purple-600',
    icon: '🚀',
  },
  {
    title: 'Maintenance',
    description: 'Support continu, mises à jour régulières. Votre site toujours au top.',
    gradient: 'from-orange-200 to-orange-300',
    iconColor: 'text-orange-600',
    icon: '⚙️',
  },
  {
    title: 'Refonte Express',
    description: 'Transformation rapide en 2-3 semaines. Design moderne, migration fluide.',
    gradient: 'from-green-200 to-green-300',
    iconColor: 'text-green-600',
    icon: '⏱️',
  },
  {
    title: 'IA Légère',
    description: 'Chatbots, recommandations, automatisation. Intelligence au service de vos users.',
    gradient: 'from-purple-200 to-purple-300',
    iconColor: 'text-purple-600',
    icon: '✨',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
          Nos services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${service.iconColor} bg-white rounded-lg flex items-center justify-center mb-4`}>
                {typeof service.icon === 'string' ? (
                  <span className="text-xl font-bold">{service.icon}</span>
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

