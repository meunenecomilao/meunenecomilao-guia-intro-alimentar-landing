
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana, mãe do Pedro",
      text: "Este guia me deu confiança para começar a introdução alimentar! As receitas são práticas e meu bebê adora.",
      rating: 5
    },
    {
      name: "Carlos, pai da Sofia",
      text: "Finalmente um guia completo que explica tudo de forma clara. Recomendo para todos os pais!",
      rating: 5
    },
    {
      name: "Mariana, mãe do Lucas",
      text: "O cronograma por idade facilitou muito minha vida. Agora sei exatamente o que oferecer e quando.",
      rating: 5
    },
    {
      name: "Roberto, pai da Júlia",
      text: "As dicas de segurança me tranquilizaram muito. Sinto que estou oferecendo o melhor para minha filha.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-ebook-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            O Que Outros Pais Estão Dizendo
          </h2>
          <p className="text-lg text-ebook-text/70">
            Depoimentos reais de famílias que transformaram a alimentação dos seus bebês
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ebook-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-ebook-primary text-lg">★</span>
                ))}
              </div>
              <p className="text-ebook-text mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-ebook-primary font-semibold">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
