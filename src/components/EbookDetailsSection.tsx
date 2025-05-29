
import { CheckCircle } from 'lucide-react';

export const EbookDetailsSection = () => {
  const features = [
    "Plano completo para introdução alimentar de 6 meses a 2 anos",
    "Receitas simples e nutritivas para bebês",
    "Dicas para identificar e evitar alergias alimentares",
    "Estratégias para lidar com recusas e engasgos",
    "Cronograma de alimentos por idade",
    "Lista de compras organizada por fase",
    "Orientações para transição para alimentos sólidos"
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
            
            <p className="text-lg text-ebook-text/80">
              Um guia completo e prático, desenvolvido por especialistas em nutrição infantil
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
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
                <div className="w-full h-48 bg-ebook-secondary rounded-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop&crop=center"
                    alt="Capa do eBook"
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>
                <p className="text-ebook-text/70 text-sm mt-4">
                  Formato PDF • 120 páginas • Acesso imediato
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
