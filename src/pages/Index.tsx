
import { HeroSection } from '@/components/HeroSection';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { EbookDetailsSection } from '@/components/EbookDetailsSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { AuthorSection } from '@/components/AuthorSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-ebook-background">
      <HeroSection />
      <ProblemSolutionSection />
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
