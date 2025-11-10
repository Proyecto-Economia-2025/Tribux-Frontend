import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import CTASection from './CTASection';

function HomePage(): React.JSX.Element {
  return (
    <>
      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </>
  );
}

export default HomePage;