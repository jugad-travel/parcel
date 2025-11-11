'use client';

export default function IntroText() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 animate-fade-in">
          Nous créons des <span className="font-bold text-[#001a58]">sites web sur-mesure</span> qui allient
          <span className="font-bold text-pink-500"> design élégant</span> et{' '}
          <span className="font-bold text-purple-500">performances optimales</span>. De la
          maquette au lancement, <span className="font-bold">on s&apos;occupe du reste</span>.
        </p>
      </div>
    </section>
  );
}

