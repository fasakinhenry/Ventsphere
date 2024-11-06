import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PartnerSection from './components/PartnerSection';
import FinancialSection from './components/FinancialSection';
import UnlockingSection from './components/UnlockingSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
// import CTASection from './components/CTASection';
// import Footer from './components/Footer';

const App = () => {
  return (
    <div className='font-instrumentSans'>
      <Header />
      <HeroSection />
      <PartnerSection />
      <FinancialSection />
      <UnlockingSection />
      <TestimonialSection />
      <FAQSection />
      {/* <CTASection />
      <Footer /> */}
    </div>
  );
};

export default App;
