
import { CheckCircle } from 'lucide-react';

export const EbookDetailsSection = () => {
  const features = [
    "Como iniciar corretamente a introdução alimentar",
    "Como lidar com emoções, dúvidas e medos",
    "Quais métodos alimentares existentes",
    "Como prevenir ou reverter um possível engasgo",
    "Os sinais de prontidão para iniciar a I.A.",
    "Como detectar quando o bebê está satisfeito",
    "Quais alimentos podem ou não ser ofertados",
    "Como montar os grupos de alimentos da refeição",
    "Como usar os temperos e dar sabor aos alimentos",
    "Os alimentos com maiores chances de causar alergias",
    "Quais líquidos podemos ofertar e quando",
    "Como organizar sua rotina com relação às refeições",
    "Como montar o calendário de alimentação",
    "E muito mais!",
  ];

  return (
    <section className="py-20 bg-ebook-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-ebook-text">
              O Que Você Vai Encontrar no{' '}
              <span className="text-ebook-primary">Guia de Introdução Alimentar</span>
            </h2>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="text-ebook-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-ebook-text">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* eBook Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-ebook-primary to-ebook-primary/80 p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-ebook-background p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-ebook-text mb-4">
                  Guia de Introdução Alimentar
                </h3>
                <div className="w-full h-full bg-ebook-secondary rounded-lg flex items-center justify-center">
                  <img 
                    src="/img/image17.png"
                    alt="Capa do eBook"
                    className=""
                  />
                </div>
                <p className="text-ebook-text/70 text-sm mt-4">
                  Formato PDF • 15 Capítulos • Acesso imediato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
