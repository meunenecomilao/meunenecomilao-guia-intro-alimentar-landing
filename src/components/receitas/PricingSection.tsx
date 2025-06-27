
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { onClickBuyReceitas } from "./_handlers"

import data from '@/data.json';

export const PricingSection = () => {
  const bonuses = [
    "E-Book com mais de 60 Receitas",
    "E-Book + de 20 cortes seguros",
    "E-Book + de 30 ideias para pratinhos",
    "Grupo Exclusivo no WhatsApp",
    "Acesso gratuito a novas receitas"
  ];

  return (
    <section className="py-20 bg-ebook-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            Adquira Seu E-Book Hoje Mesmo!
          </h2>
          <p className="text-lg text-ebook-text/70">
            Investimento único para uma vida inteira de alimentação saudável
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-ebook-background to-ebook-secondary p-8 rounded-3xl shadow-2xl border-2 border-ebook-primary/20">
            <div className="text-center mb-8">
              <Badge className="bg-ebook-primary text-ebook-background mb-4">
                Oferta por Tempo Limitado
              </Badge>
              <div className="mb-4">
                <span className="text-2xl text-ebook-text/50 line-through">{data.receitas.pricing.from}</span>
                <span className="text-4xl font-bold text-ebook-primary ml-4">{data.receitas.pricing.by}</span>
              </div>
              <p className="text-ebook-text/70">Acesso imediato ao E-Book + bônus</p>
            </div>

            <div className="space-y-3 mb-8">
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-ebook-primary flex-shrink-0" size={20} />
                  <span className="text-ebook-text">{bonus}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="w-full bg-ebook-primary hover:bg-ebook-primary/90 text-ebook-background text-xl py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
              onClick={() => onClickBuyReceitas()}
            >
              <ShoppingCart className="mr-2" size={24} />
              Comprar Agora
            </Button>

            <div className="text-center">
              <Badge variant="outline" className="border-ebook-primary text-ebook-primary">
                Garantia de 7 Dias ou Seu Dinheiro de Volta
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
