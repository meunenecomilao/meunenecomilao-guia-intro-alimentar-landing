
import { Heart, HelpCircle, Clock } from 'lucide-react';

export const ChallengesSection = () => {
  const challenges = [
    {
      image: "/img/image05.jpg",
      title: "Quais alimentos oferecer?",
      descriptions: [
        "Quais alimentos são adequados para cada fase da introdução alimentar?",
        "Posso oferecer qualquer alimento ao meu bebê?",
        "Como sei se meu bebê está pronto para experimentar um novo alimento?"
      ],
      color: "text-ebook-primary"
    },
    {
      image: "/img/image06.jpg",
      title: "Quanto de alimento é necessário?",
      descriptions: [
        "Quanto devo oferecer ao meu bebê em cada refeição?",
        "Ele está comendo o suficiente?",
        "Como posso saber se ele está satisfeito?",
        "Posso forçar meu bebê a comer?",
        "Como posso evitar o desperdício?"
      ],
      color: "text-ebook-primary"
    },
    {
      image: "/img/image08.jpg",
      title: "Como cortar os alimentos?",
      descriptions: [
        "Como posso cortar os alimentos para evitar o engasgo?",
        "O que devo fazer se meu bebê se engasgar?",
        "O que é o GAG? É igual ao engasgo?"
      ],
      color: "text-ebook-primary"
    },
    {
      image: "/img/image09.jpg",
      title: "Quais horários oferecer?",
      descriptions: [
        "Com que frequência devo alimentar meu bebê?",
        "Quais os melhores horários para as refeições?",
        "Como posso criar uma rotina alimentar saudável?",
        "Como posso conciliar a introdução alimentar com a amamentação?"
      ],
      color: "text-ebook-primary"
    },
    {
      image: "/img/image10.jpg",
      title: "E os riscos de alergias?",
      descriptions: [
        "Quais alimentos tem maior chance de alergia?",
        "Como identificar uma reação alérgica?",
        "O que fazer caso ele tenha esta reação alérgica?"
      ],
      color: "text-ebook-primary"
    },
    {
      image: "/img/image11.jpg",
      title: "Como lidar com as críticas?",
      descriptions: [
        "Como lidar com as críticas e conselhos não solicitados de familiares e amigos?",
        "Confio em quais fontes de informação sobre a introdução alimentar?",
        "Como seguir minhas próprias convicções sobre a alimentação do meu bebê?",
        "Devo me preocupar se meu bebê não está comendo a mesma coisa que os outros bebês da sua idade?"
      ],
      color: "text-ebook-primary"
    }
  ];

  return (
    <section className="py-20 bg-ebook-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ebook-text mb-4">
            Começar a I.A. pode ser um desafio cheio de medos, mas não precisa ser!
          </h2>
          <p className="text-lg text-ebook-text/70 max-w-2xl mx-auto">
            Quando estamos iniciando esta fase, nos fazemos um monte de perguntas...
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((benefit, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-b from-ebook-background to-ebook-secondary/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="mx-auto mb-4 rounded-full w-48 h-48 object-cover"
                />
                {/* <benefit.icon className={`mx-auto ${benefit.color}`} size={48} /> */}
              </div>
              <h3 className="text-xl font-semibold text-ebook-text mb-4">
                {benefit.title}
              </h3>
              <div className="text-ebook-text/70 text-left">
                {benefit.descriptions.map((desc, descIndex) => (
                  <span key={descIndex} className="block mb-2">
                    <HelpCircle className="inline mr-2 text-ebook-primary" size={20} />
                    {desc}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
