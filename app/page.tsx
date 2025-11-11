import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroText from '@/components/IntroText';
import Forces from '@/components/Forces';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import IAAutomation from '@/components/IAAutomation';
import Offers from '@/components/Offers';
import Approach from '@/components/Approach';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative z-[100]">
      <Navbar />
      <Hero />
      <IntroText />
      <Forces />
      <HowItWorks />
      <Services />
      <WhyChoose />
      <IAAutomation />
      <Offers />
      <Approach />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
