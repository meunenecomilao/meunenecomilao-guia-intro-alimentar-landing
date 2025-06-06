
import { HeroSection } from '@/components/receitas/HeroSection';
import { EbookDetailsSection } from '@/components/receitas/EbookDetailsSection';
import { BenefitsSection } from '@/components/receitas/BenefitsSection';
import { TestimonialsSection } from '@/components/shared/TestimonialsSection';
import { PricingSection } from '@/components/receitas/PricingSection';
import { FAQSection } from '@/components/receitas/FAQSection';
import { AuthorSection } from '@/components/shared/AuthorSection';
import { FinalCTASection } from '@/components/receitas/FinalCTASection';
import { Footer } from '@/components/shared/Footer';
import { trackPageView } from "@/lib/google-analytics"

import { useEffect } from 'react';


const Receitas = () => {
  useEffect(() => {
    document.title = 'E-Book de Receitas Meu Nene Comilão';
    trackPageView('receitas');
  }, []);

  return (
    <div className="min-h-screen bg-ebook-background">
      <HeroSection />
      <BenefitsSection />
      <EbookDetailsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <AuthorSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Receitas;
