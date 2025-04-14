
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Schedule />
        <Location />
        <Contact />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
