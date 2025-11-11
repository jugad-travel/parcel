'use client';

const steps = [
  {
    number: '01',
    title: 'Audit',
    description: 'Analyse de votre besoin, étude de vos objectifs et de votre audience.',
    gradient: 'from-blue-200 via-purple-200 to-purple-300',
    iconBg: 'bg-[#001a58]',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
        <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Maquette Gratuite',
    description: 'Prototype haute-fidélité offert. Vous visualisez avant de vous engager.',
    gradient: 'from-green-200 via-blue-200 to-blue-300',
    iconBg: 'bg-[#001a58]',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Validation',
    description: 'Ajustements collaboratifs. Le projet avance avec votre feedback.',
    gradient: 'from-purple-200 via-pink-200 to-pink-300',
    iconBg: 'bg-purple-700',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Lancement',
    description: 'Mise en ligne optimisée, formation et support. Votre site est live.',
    gradient: 'from-pink-200 via-orange-200 to-orange-300',
    iconBg: 'bg-pink-600',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12L2 7L12 2L22 7L19 12L12 22L5 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Approach() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre approche
          </h2>
          <p className="text-xl text-gray-600">
            Un processus simple et transparent. De l&apos;idée au lancement en 4 étapes.
          </p>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div
                  className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.15}s` }}
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
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-[#001a58] rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

