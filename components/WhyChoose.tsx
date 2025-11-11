'use client';

const benefits = [
  { text: 'Création du site offerte' },
  { text: 'Zéro complexité technique' },
  { text: 'Modifications sur simple message' },
  { text: 'Nom de domaine & hébergement inclus' },
  { text: 'SEO, GEO & vitesse au top' },
  { text: 'IA intégrée quand c\'est pertinent' },
  { text: 'Rapport Analytics mensuel' },
  { text: 'Support rapide et humain' },
];

export default function WhyChoose() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
          Pourquoi choisir Parcel ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#001a58] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-gray-900 font-medium">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

