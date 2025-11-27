import React from "react";
import "./HomePage.css";
import Foto1 from "../assets/imagemProjetoF.png";
import Foto2 from "../assets/imagemProjetoF2.png";

function Home() {
  const cards = [
    {
      title: "Como funciona?",
      img: Foto1,
      text: [
        "O Centro Inteligente de Recursos Pedagógicos é uma plataforma baseada em inteligência artificial que apoia a criação de conteúdos didáticos.",
        "O professor descreve o tema ou o objetivo da aula, e a ferramenta gera automaticamente planos de aula, exercícios, atividades, explicações e avaliações.",
        "Todo o conteúdo produzido pode ser ajustado manualmente pelo professor para atender às necessidades específicas de cada turma.",
        "O resultado final é um material alinhado ao currículo e adaptado à realidade dos estudantes do SESI Vinhedo."
      ]
    },
    {
      title: "Resultados Esperados",
      img: Foto2,
      text: [
        "Com o uso do Professor Assistente, os docentes ganham mais agilidade na preparação de aulas, recebendo materiais de alta qualidade produzidos de forma automática.",
        "A plataforma também permite personalizar cada conteúdo gerado, tornando o ensino mais organizado, eficiente e atrativo para os estudantes.",
        "Dessa forma, o professor economiza tempo, amplia suas possibilidades pedagógicas e fortalece o processo de ensino-aprendizagem."
      ]
    }
  ];

  return (
    <div className="home-page">
      <section className="section-a">
        <h1 className="titulo-sobre">SOBRE O PROJETO</h1>

        <div className="cards-area">
          {cards.map((card, index) => (
            <article
              key={index}
              className={`bloco-card ${index === 1 ? "reverse" : ""}`}
            >
              {/* Imagem */}
              <img
                src={card.img}
                alt={card.title}
                className="imagem-sobre"
                loading="lazy"
              />

              {/* Texto */}
              <div className="texto-sobre">
                <h2>{card.title}</h2>
                {card.text.map((paragrafo, i) => (
                  <p key={i}>{paragrafo}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;