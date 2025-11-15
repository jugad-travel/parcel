'use client';

export default function AgentVideoDemo() {
  return (
    <section id="video-demo" className="relative z-[20] py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Démonstration
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez Noa en action
          </p>
        </div>

        {/* Vidéo YouTube */}
        <div className="bg-gray-100 rounded-2xl p-8 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yQrpdeg7RSU"
              title="Démonstration Noa"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

