import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Forces from '@/components/Forces';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import ProductsShowcase from '@/components/ProductsShowcase';
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
      <Forces />
      <HowItWorks />
      <Services />
      <WhyChoose />
      <ProductsShowcase />
      <IAAutomation />
      <Offers />
      <Approach />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
