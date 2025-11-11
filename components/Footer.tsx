'use client';

export default function Footer() {
  return (
    <footer className="bg-[#001a58] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-2xl font-bold">Parcel</span>
            </div>
            <p className="text-gray-300">
              L&apos;agence web créative pour vos sites ultra-personnalisés.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>contact@parcel-agency.fr</li>
              <li>+33 1 23 45 67 89</li>
              <li>Paris, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center animate-fade-in">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 Parcel. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

