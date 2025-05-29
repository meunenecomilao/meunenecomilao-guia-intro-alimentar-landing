
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Para qual idade o e-book é indicado?",
      answer: "O guia é especificamente desenvolvido para bebês de 6 meses a 2 anos, com receitas para todas as refeições."
    },
    {
      question: "O e-book é adequado para pais de primeira viagem?",
      answer: "Sim! O e-book foi criado pensando especialmente em pais de primeira viagem. Todas as receitas são explicadas de forma clara e didática, com linguagem acessível e de fácil preparo."
    },
    {
      question: "Como recebo o e-book?",
      answer: "Após a confirmação do pagamento, você receberá o acesso pela plataforma da Hotmart. A senha para abrir os e-books é o seu EMAIL."
    },
    {
      question: "Posso usar em dispositivos móveis?",
      answer: "Sim! O e-book está em formato PDF compatível com todos os dispositivos: smartphones, tablets, computadores e e-readers."
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
