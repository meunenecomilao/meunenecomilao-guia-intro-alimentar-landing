import { Mail, Instagram } from 'lucide-react';


import data from '@/data.json';

export const Footer = () => {

  return (
    <footer className="bg-ebook-text py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ebook-background">
              Guia de Introdução Alimentar
            </h3>
            <p className="text-ebook-background/70">
              Transformando a alimentação infantil com informação de qualidade e confiança para os pais.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ebook-background">
              Contato
            </h4>
            <div className="space-y-2">
              <p className="text-ebook-background/70">
                <Mail className="inline mr-2 text-ebook-primary" size={20} /> {data.contacts.email}
              </p>
              <p className="text-ebook-background/70">
                <Instagram className="inline mr-2 text-ebook-primary" size={20} />
                <a
                  href={data.contacts.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @meunenecomilao
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ebook-background/20 pt-8 text-center">
          <p className="text-ebook-background/60">
            © 2025 Guia de Introdução Alimentar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
