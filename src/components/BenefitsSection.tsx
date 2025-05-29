
import { Heart, CheckCircle, Clock } from 'lucide-react';

export const BenefitsSection = () => {
  const benefits = [
    {
      image: "/img/image18.jpg",
      title: "+ de 20 Cortes Seguros",
      description: "Saiba como cortar os alimentos da forma correta para evitar o engasgo.",
      color: "text-ebook-primary"
    },
    {
      image: "/img/image19.jpg",
      title: "+ de 30 Ideias para Pratinhos",
      description: "Aprenda a montar o pratinho compondo os grupos alimentares para evitar um paladar seletivo.",
      color: "text-ebook-primary"
    },
    {
      image: "/img/image20.jpg",
      title: "+ de 60 Receitas para seu Bebê",
      description: "Tenha a sua mão uma lista de receitas para crianças de 6 meses a 2 anos muito fáceis de fazer.",
      color: "text-ebook-primary"
    },
    
  ];

  return (
    <section className="py-20 bg-ebook-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            Ao comprar hoje, você garante 03 presentes exclusivos:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-b from-ebook-background to-ebook-secondary/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="mx-auto mb-4 rounded-full w-48 h-48 object-cover"
                />
                {/* <benefit.icon className={`mx-auto ${benefit.color}`} size={48} /> */}
              </div>
              <h3 className="text-xl font-semibold text-ebook-text mb-4">
                {benefit.title}
              </h3>
              <div className="text-ebook-text/70">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 grid grid-cols-1 md:grid-cols-2 items-center bg-gradient-to-b from-ebook-background to-ebook-secondary/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-ebook-text mb-4 text-center">
              Além disso, você terá acesso ao nosso Grupo VIP! Com direito a conteúdo exclusivo!
            </h3>
          </div>
          <div className="flex justify-center">
            <img
              src="/img/image21.png"
              alt="Capa do Guia de Introdução Alimentar"
              className="rounded-xl max-w-xs w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
