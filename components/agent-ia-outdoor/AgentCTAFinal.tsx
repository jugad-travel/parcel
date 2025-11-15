'use client';

export default function AgentCTAFinal() {
  const handlePOCClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    const videoSection = document.getElementById('video-demo');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-[20] py-24 px-6 bg-gradient-to-b from-[#001a58] to-[#002d7a]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prêt à tester Noa sur votre site ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Demandez un POC en 7 jours.
          </p>
          <p className="text-lg text-white/80 mb-12">
            Intégration légère. Résultats immédiats.
            <br />
            → Conversion, panier, satisfaction.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button 
            onClick={handlePOCClick}
            className="group relative bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-white hover:border-white shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">Demander un POC</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#001a58]/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <button 
            onClick={handleDemoClick}
            className="group relative bg-transparent text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/50 overflow-hidden transition-all duration-300 transform hover:scale-110 hover:bg-white/10 hover:border-white shadow-lg hover:shadow-2xl"
          >
            <span className="relative z-10">Planifier une démo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

