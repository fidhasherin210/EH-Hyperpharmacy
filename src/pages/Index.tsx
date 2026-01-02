import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustIndicators from '@/components/TrustIndicators';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';

import ServicesSection from '@/components/ServicesSection';
import HealthTips from '@/components/HealthTips';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <AboutSection />
        <ProductsSection />
       
        <ServicesSection />
        <HealthTips />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
