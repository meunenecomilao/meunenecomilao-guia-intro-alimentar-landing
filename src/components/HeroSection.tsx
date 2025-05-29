
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ebook-secondary to-ebook-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge className="bg-ebook-secondary text-ebook-text border-ebook-primary">
              Aprovado por Nutricionistas
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-ebook-text leading-tight">
              Transforme a{' '}
              <span className="text-ebook-primary">Introdução Alimentar</span>{' '}
              do Seu Bebê com o Guia Definitivo!
            </h1>
            
            <p className="text-xl text-ebook-text/80 leading-relaxed">
              Descubra como oferecer uma alimentação saudável e segura para bebês de 6 meses a 2 anos.
            </p>
            
            <Button 
              size="lg" 
              className="bg-ebook-primary hover:bg-ebook-primary/90 text-ebook-background text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Baixe o Guia Agora
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop&crop=center"
                alt="Bebê feliz comendo alimentos saudáveis"
                className="w-full h-96 object-cover"
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
