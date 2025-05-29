
export const AuthorSection = () => {
  return (
    <section className="py-20 bg-ebook-background">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Author Photo */}
            <div className="text-center">
              <img 
                src="/img/image27.jpg" 
                alt="Thamires Fragoso" 
                className="rounded-full w-full h-full object-cover mx-auto mb-6 shadow-lg"
              />
            </div>

            {/* Author Bio */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
              Thamires Fragoso
            </h2>
              <p className="text-lg text-ebook-text/80 leading-relaxed">
                Conheça o <b>@meunenecomilao</b>, o guia definitivo para a introdução alimentar escrito por Thamires Fragoso, uma mãe dedicada que compartilha seu conhecimento após passar pela introdução alimentar de seu filho Noah. Com base em estudos na área, Thamires oferece orientação especializada sobre alimentação e maternidade para mães de todo o Brasil. Descubra como garantir uma alimentação saudável e equilibrada para o seu bebê com a ajuda de Thamires.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-ebook-secondary px-4 py-2 rounded-full">
                  <span className="text-ebook-text text-sm">✓ Mãe do Noah</span>
                </div>
                <div className="bg-ebook-secondary px-4 py-2 rounded-full">
                  <span className="text-ebook-text text-sm">✓ Criadora do @meunenecomilao</span>
                </div>
                <div className="bg-ebook-secondary px-4 py-2 rounded-full">
                  <span className="text-ebook-text text-sm">✓ +4000 mamães ajudadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
