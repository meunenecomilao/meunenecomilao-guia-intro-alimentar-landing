
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Para qual idade o guia é indicado?",
      answer: "O guia é especificamente desenvolvido para bebês de 6 meses a 2 anos, cobrindo desde a primeira introdução alimentar até a transição completa para alimentos sólidos."
    },
    {
      question: "O guia é adequado para pais de primeira viagem?",
      answer: "Sim! O guia foi criado pensando especialmente em pais de primeira viagem. Todas as orientações são explicadas de forma clara e didática, com linguagem acessível."
    },
    {
      question: "Como recebo o E-Book?",
      answer: "Após a confirmação do pagamento, você receberá o acesso pela plataforma da Hotmart. A senha para abrir os e-books é o seu EMAIL."
    },
    {
      question: "Posso usar em dispositivos móveis?",
      answer: "Sim! O eBook está em formato PDF compatível com todos os dispositivos: smartphones, tablets, computadores e e-readers."
    },
    {
      question: "O guia inclui receitas?",
      answer: "Sim! O guia contém mais de 50 receitas nutritivas e adequadas para cada fase do desenvolvimento do bebê, todas testadas, aprovadas por centenas de mamães e seguindo as recomendações oficiais de saúde."
    }
  ];

  return (
    <section className="py-20 bg-ebook-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-ebook-text/70">
            Esclarecemos as principais dúvidas sobre o guia
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-ebook-background rounded-lg px-6 border-none shadow-md"
              >
                <AccordionTrigger className="text-ebook-text hover:text-ebook-primary text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ebook-text/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
