
import { HeroSection } from '@/components/guia/HeroSection';
import { ChallengesSection } from '@/components/guia/ChallengesSection'
import { ProblemSolutionSection } from '@/components/guia/ProblemSolutionSection';
import { EbookDetailsSection } from '@/components/guia/EbookDetailsSection';
import { BenefitsSection } from '@/components/guia/BenefitsSection';
import { TestimonialsSection } from '@/components/guia/TestimonialsSection';
import { PricingSection } from '@/components/guia/PricingSection';
import { FAQSection } from '@/components/guia/FAQSection';
import { AuthorSection } from '@/components/guia/AuthorSection';
import { FinalCTASection } from '@/components/guia/FinalCTASection';
import { Footer } from '@/components/guia/Footer';

const Index = () => {
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

export default Index;
