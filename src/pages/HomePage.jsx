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
      "O projeto surgiu a partir do pedido de um professor que precisava de uma ferramenta para os alunos pesquisarem em sala de aula sem fugirem do tema.",
      "A plataforma utiliza inteligência artificial para garantir que as respostas sejam sempre relacionadas ao assunto solicitado, evitando resultados aleatórios ou conteúdos que não têm relação com a atividade.",
      "O aluno digita sua dúvida e recebe uma resposta objetiva, organizada e alinhada ao contexto da aula.",
      "Assim, o professor mantém o foco dos estudantes e garante mais qualidade nas pesquisas realizadas durante as atividades."
    ]
  },
  {
    title: "Resultados Esperados",
    img: Foto2,
    text: [
      "Com a plataforma, os alunos ganham mais agilidade para encontrar respostas confiáveis e alinhadas ao tema da aula.",
      "Os professores passam a ter mais controle sobre o conteúdo pesquisado, garantindo que todos permaneçam dentro do assunto estudado.",
      "O sistema torna as aulas mais dinâmicas e produtivas, reduzindo distrações e aumentando a qualidade do aprendizado."
    ]
  }
];

const objetivos = [
  {
    titulo: "Garantir foco nas pesquisas",
    subtitulo: "Respostas alinhadas ao tema da aula",
    texto:
      "Evitar que os alunos encontrem conteúdos irrelevantes ou que desviem do assunto solicitado pelo professor."
  },
  {
    titulo: "Oferecer agilidade e confiabilidade",
    subtitulo: "IA como ferramenta de apoio",
    texto:
      "Permitir que as pesquisas sejam rápidas, seguras e com informações precisas, facilitando o andamento das atividades."
  },
  {
    titulo: "Apoiar o professor em sala de aula",
    subtitulo: "Ferramenta prática e educativa",
    texto:
      "Auxiliar na condução das aulas, garantindo que os alunos permaneçam focados e ampliando a eficiência do processo de ensino."
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

       {/* ==================== OBJETIVOS ==================== */}
      <section className="objetivos-section">
        <div className="container">
          <h2 className="section-title">Objetivos do Projeto</h2>
          <div className="objetivos-grid">
            {objetivos.map((obj, index) => (
              <article className="objetivo-card" key={index}>
                <div className="card-header">
                  <h3>{obj.subtitulo}</h3>
                </div>
                <div className="card-body">
                  <h4>{obj.titulo}</h4>
                  <p>{obj.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;