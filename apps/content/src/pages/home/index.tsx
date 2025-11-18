import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import PricingSection from './PricingSection';
import AboutSection from './AboutSection';
import CTASection from './CTASection';

function HomePage(): React.JSX.Element {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <AboutSection />
        <CTASection />
      </main>
    </>
  );
}

export default HomePage;