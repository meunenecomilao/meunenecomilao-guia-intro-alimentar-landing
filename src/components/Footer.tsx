
export const Footer = () => {
  const links = [
    "Sobre Nós",
    "Contato", 
    "Política de Privacidade",
    "Termos de Uso"
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📱" },
    { name: "Facebook", icon: "📘" },
    { name: "WhatsApp", icon: "💬" }
  ];

  return (
    <footer className="bg-ebook-text py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ebook-background">
              Guia de Introdução Alimentar
            </h3>
            <p className="text-ebook-background/70">
              Transformando a alimentação infantil com informação de qualidade e confiança para os pais.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ebook-background">
              Links Úteis
            </h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-ebook-background/70 hover:text-ebook-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ebook-background">
              Contato
            </h4>
            <div className="space-y-2">
              <p className="text-ebook-background/70">
                📧 contato@guiaalimentar.com
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="text-ebook-primary hover:text-ebook-primary/80 transition-colors text-xl"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
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
