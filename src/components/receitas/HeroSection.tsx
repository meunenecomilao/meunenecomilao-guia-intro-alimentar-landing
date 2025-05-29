
import { Button } from '@/components/ui/button';

import data from '@/data.json';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ebook-secondary to-ebook-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            
            <h1 className="text-4xl md:text-6xl font-bold text-ebook-text leading-tight">
              E-Book com mais de{' '}
              <span className="text-ebook-primary">60 Receitas</span>{' '}
              para o seu bebê
            </h1>
            
            <p className="text-xl text-ebook-text/80 leading-relaxed">
              Fáceis, saudáveis e práticas para seu bebê de 6 meses ou mais!
            </p>
            
            <Button 
              size="lg" 
              className="bg-ebook-primary hover:bg-ebook-primary/90 text-ebook-background text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open(data.receitas.buy_link, "_blank")}
            >
              Adquira o E-Book Agora
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img/image07.jpg"
                alt="Receita com alimentos saudáveis"
                className="w-full h-1/2 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ebook-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-ebook-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-ebook-secondary/30 rounded-full blur-3xl"></div>
    </section>
  );
};
