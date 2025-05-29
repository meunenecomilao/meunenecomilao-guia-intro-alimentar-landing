
import { Heart, CheckCircle, Clock } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Saúde do Bebê",
      description: "Promova o desenvolvimento saudável com uma alimentação equilibrada e nutritiva",
      color: "text-ebook-primary"
    },
    {
      icon: CheckCircle,
      title: "Confiança para Pais",
      description: "Tome decisões seguras com orientações baseadas em evidências científicas",
      color: "text-ebook-primary"
    },
    {
      icon: Clock,
      title: "Praticidade",
      description: "Economize tempo com receitas e cronogramas prontos para usar",
      color: "text-ebook-primary"
    }
  ];

  return (
    <section className="py-20 bg-ebook-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            Por Que Escolher o Nosso Guia?
          </h2>
          <p className="text-lg text-ebook-text/70 max-w-2xl mx-auto">
            Benefícios que fazem a diferença na jornada alimentar do seu bebê
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-b from-ebook-background to-ebook-secondary/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <benefit.icon className={`mx-auto ${benefit.color}`} size={48} />
              </div>
              <h3 className="text-xl font-semibold text-ebook-text mb-4">
                {benefit.title}
              </h3>
              <p className="text-ebook-text/70">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
