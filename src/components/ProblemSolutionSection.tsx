
import { CheckCircle, AlertTriangle } from 'lucide-react';

export const ProblemSolutionSection = () => {
  const problems = [
    "Confuso sobre quais alimentos oferecer primeiro?",
    "Preocupado com alergias ou engasgos?",
    "Falta de tempo para planejar refeições saudáveis?",
    "Incerto sobre as quantidades adequadas?"
  ];

  const solutions = [
    "Guia passo a passo para introdução alimentar",
    "Dicas de segurança alimentar",
    "Receitas rápidas e nutritivas",
    "Cronogramas detalhados por idade"
  ];

  return (
    <section className="py-20 bg-ebook-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            Alimentação do Seu Bebê: Simplifique o Processo!
          </h2>
          <p className="text-lg text-ebook-text/70 max-w-2xl mx-auto">
            Elimine as dúvidas e transforme a hora da refeição em um momento de alegria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-ebook-text mb-6">
              Desafios Comuns dos Pais:
            </h3>
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-red-50 border-l-4 border-red-200">
                <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-ebook-text">{problem}</p>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-ebook-text mb-6">
              Nossa Solução Oferece:
            </h3>
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-green-50 border-l-4 border-ebook-primary">
                <CheckCircle className="text-ebook-primary mt-1 flex-shrink-0" size={20} />
                <p className="text-ebook-text">{solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Central Image */}
        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=400&fit=crop&crop=center"
            alt="Preparação de alimentos saudáveis para bebês"
            className="mx-auto rounded-2xl shadow-lg max-w-2xl w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};
