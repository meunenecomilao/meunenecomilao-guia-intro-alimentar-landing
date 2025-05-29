
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mickaele, mãe do Miguel",
      image: "/img/image13.jpg"
    },
    {
      name: "Rayana, mãe da Isis",
      image: "/img/image14.jpg"
    },
    {
      name: "Ana, mãe da Sofia",
      image: "/img/image15.jpg"
    },
    {
      name: "Melissa, mãe da Helena",
      image: "/img/image16.jpg"
    },
  ];

  return (
    <section className="py-20 bg-ebook-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            O Que Outras Mamães Estão Dizendo
          </h2>
          <p className="text-lg text-ebook-text/70">
            Depoimentos reais de famílias que transformaram a alimentação dos seus bebês
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-ebook-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="mx-auto mb-4 object-cover"
                />
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
