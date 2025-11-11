import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroText from '@/components/IntroText';
import Forces from '@/components/Forces';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative z-[100]">
      <Navbar />
      <Hero />
      <IntroText />
      <Forces />
      <Services />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
