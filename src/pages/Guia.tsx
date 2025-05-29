
import { HeroSection } from '@/components/guia/HeroSection';
import { ChallengesSection } from '@/components/guia/ChallengesSection'
import { EbookDetailsSection } from '@/components/guia/EbookDetailsSection';
import { BenefitsSection } from '@/components/guia/BenefitsSection';
import { TestimonialsSection } from '@/components/shared/TestimonialsSection';
import { PricingSection } from '@/components/guia/PricingSection';
import { FAQSection } from '@/components/guia/FAQSection';
import { AuthorSection } from '@/components/shared/AuthorSection';
import { FinalCTASection } from '@/components/guia/FinalCTASection';
import { Footer } from '@/components/shared/Footer';
import { useEffect } from 'react';
import { trackPageView } from "@/lib/google-analytics"

const Guia = () => {
  useEffect(() => {
    document.title = 'E-Book Guia de Introdução Alimentar Meu Nene Comilão';
    trackPageView('guia');
  }, []);

  return (
    <div className="min-h-screen bg-ebook-background">
      <HeroSection />
      <ChallengesSection />
      <EbookDetailsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <AuthorSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Guia;
