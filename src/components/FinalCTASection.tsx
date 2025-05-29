
import { Button } from '@/components/ui/button';

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ebook-secondary to-ebook-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1200&h=800&fit=crop&crop=center"
          alt="Alimentos saudáveis para bebês"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-ebook-text mb-6">
            Comece a Jornada Alimentar do Seu Bebê{' '}
            <span className="text-ebook-primary">Hoje!</span>
          </h2>
          
          <p className="text-xl text-ebook-text/80 mb-8 leading-relaxed">
            Não perca tempo! Garante agora o guia que vai transformar a alimentação do seu bebê 
            e dar a você a confiança que precisa nesta jornada tão importante.
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-ebook-text">
              ⏰ <strong>Mais de 1.500 pais já baixaram</strong>
            </p>
            <p className="text-lg text-ebook-text">
              🔒 <strong>Compra 100% segura e garantida</strong>
            </p>
            <p className="text-lg text-ebook-text">
              📱 <strong>Acesso imediato em todos os dispositivos</strong>
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-ebook-primary hover:bg-ebook-primary/90 text-ebook-background text-2xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            Baixe Agora por R$ 49,90
          </Button>

          <p className="text-sm text-ebook-text/60 mt-4">
            Oferta por tempo limitado • Garantia de 7 dias
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-ebook-primary/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-ebook-secondary/40 rounded-full blur-3xl"></div>
    </section>
  );
};
