import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/features/HeroSection';
import TierCards from '@/components/features/TierCards';
import HowItWorks from '@/components/features/HowItWorks';
import ConsultationSection from '@/components/features/ConsultationSection';
import TestimonialsSection from '@/components/features/TestimonialsSection';
import FAQSection from '@/components/features/FAQSection';
import RegulatorsBanner from '@/components/features/RegulatorsBanner';
import WhatsAppCTA from '@/components/features/WhatsAppCTA';
import PurchaseModal from '@/components/features/PurchaseModal';
import ConsultationModal from '@/components/features/ConsultationModal';
import SplashScreen from '@/components/layout/SplashScreen';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [purchaseTier, setPurchaseTier] = useState<0 | 1>(1);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTier, setConsultationTier] = useState<2 | 3>(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleBuyTier = (tier: 0 | 1) => {
    setPurchaseTier(tier);
    setPurchaseOpen(true);
  };

  const handleBookConsultation = (tier: 2 | 3 = 2) => {
    setConsultationTier(tier);
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        {loading && <SplashScreen />}
      </AnimatePresence>

      <Header />

      <main className="flex-1">
        <HeroSection
          onGetStarted={() => handleBuyTier(1)}
          onBookConsultation={() => handleBookConsultation(2)}
        />

        <RegulatorsBanner />

        <TierCards
          onBuyTier0={() => handleBuyTier(0)}
          onBuyTier1={() => handleBuyTier(1)}
          onBookConsultation={handleBookConsultation}
        />

        <HowItWorks />

        <ConsultationSection onBookConsultation={() => handleBookConsultation(2)} />

        <TestimonialsSection />

        <FAQSection />
      </main>

      <Footer />

      <WhatsAppCTA />

      <PurchaseModal
        open={purchaseOpen}
        onClose={() => setPurchaseOpen(false)}
        tier={purchaseTier}
      />

      <ConsultationModal
        open={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTier={consultationTier}
      />
    </div>
  );
};

export default Index;
