'use client';

export default function IntroText() {
  return (
    <section className="relative z-[20] py-24 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 animate-fade-in">
          Votre site, sans aucune galère.<br />
          On le crée gratuitement, on l&apos;optimise (<span className="font-bold text-[#001a58]">SEO</span>, <span className="font-bold text-[#001a58]">GEO</span>, <span className="font-bold text-pink-500">mobile</span>, <span className="font-bold text-purple-500">vitesse</span>) et on le maintient.<br />
          Vous n&apos;avez plus rien à gérer.
        </p>
      </div>
    </section>
  );
}

