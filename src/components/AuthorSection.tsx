
export const AuthorSection = () => {
  return (
    <section className="py-20 bg-ebook-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            Conheça a Autora
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Author Photo */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto rounded-full bg-ebook-secondary border-4 border-ebook-primary overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-ebook-primary/20 to-ebook-secondary flex items-center justify-center">
                  <span className="text-6xl text-ebook-primary">👩‍⚕️</span>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold text-ebook-text">
                Dra. Maria Silva
              </h3>
              <p className="text-lg text-ebook-text/80 leading-relaxed">
                Nutricionista pediátrica com mais de 10 anos de experiência, especializada em 
                alimentação infantil e introdução alimentar. Formada pela USP com pós-graduação 
                em Nutrição Materno-Infantil.
              </p>
              <p className="text-ebook-text/80">
                Apaixonada por ajudar pais a oferecerem o melhor para seus bebês, já orientou 
                mais de 2.000 famílias na jornada da alimentação saudável. Mãe de dois filhos, 
                entende na prática os desafios que os pais enfrentam.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-ebook-secondary px-4 py-2 rounded-full">
                  <span className="text-ebook-text text-sm">✓ CRN 12345</span>
                </div>
                <div className="bg-ebook-secondary px-4 py-2 rounded-full">
                  <span className="text-ebook-text text-sm">✓ Especialista em Pediatria</span>
                </div>
                <div className="bg-ebook-secondary px-4 py-2 rounded-full">
                  <span className="text-ebook-text text-sm">✓ +2000 Famílias Atendidas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
