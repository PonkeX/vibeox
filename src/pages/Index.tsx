
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <Footer />
    </div>
  );
};

export default Index;
