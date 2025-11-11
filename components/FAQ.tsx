'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'La création du site est-elle vraiment gratuite ?',
    answer: 'Oui. Vous validez la maquette avant toute mise en ligne. L\'abonnement commence au lancement.',
  },
  {
    question: 'Que couvre l\'abonnement ?',
    answer: 'Maintenance, mises à jour, hébergement, domaine, SEO continu, modifications sur demande, rapport Analytics.',
  },
  {
    question: 'Puis-je demander des changements ?',
    answer: 'Oui, par simple message. Nous faisons les mises à jour pour vous.',
  },
  {
    question: 'Et si je résilie ?',
    answer: 'Le site est désactivé en fin de période. Vous pouvez demander un export statique et récupérer le nom de domaine.',
  },
  {
    question: 'Combien de temps pour un site ?',
    answer: 'Maquette sous 72 h ouvrées, mise en ligne après validation et contenus.',
  },
  {
    question: 'Puis-je utiliser mon propre domaine ?',
    answer: 'Oui. Sinon, nous nous occupons de l\'achat et du renouvellement.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            FAQ
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-[#001a58] transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

