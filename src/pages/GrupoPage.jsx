import React from "react";
import "./GrupoPage.css";

// =================== IMAGENS DA EQUIPE ===================
import Matheus from "../assets/Matheus.jpeg";
import MariaFreire from "../assets/MariaFreire.jpeg";
import VitorGabriel from "../assets/VitorGabriel.jpeg";
import AnaClara from "../assets/AnaClara.jpeg";
import LauraMarques from "../assets/LauraMarques.jpeg";
import Valentina from "../assets/Valentina.jpeg";

const equipe = [
  { nome: "Matheus de Carvalho", cargo: "Líder", img: Matheus },
  { nome: "Maria Clara Freire", cargo: "Vice-líder", img: MariaFreire },
  { nome: "Vitor Gabriel de Paula", cargo: "Desenvolvedor", img: VitorGabriel },
  { nome: "Ana Clara Zamoner Dias", cargo: "Desenvolvedora", img: AnaClara },
  { nome: "Laura Marques", cargo: "Desenvolvedora", img: LauraMarques },
  { nome: "Valentina Marcela Martelli", cargo: "Desenvolvedora", img: Valentina },
];



export default function GrupoSobre() {
  return (
    <>
      {/* ==================== EQUIPE ==================== */}
      <section className="equipe-section">
        <div className="container">
          <h2 className="section-title">Nossa Equipe</h2>
          <div className="equipe-grid">
            {equipe.map((membro, index) => (
              <article className="membro-card" key={index}>
                <img
                  src={membro.img}
                  alt={`Foto de ${membro.nome}`}
                  className="membro-foto"
                  loading="lazy"
                />
                <h3 className="membro-nome">{membro.nome}</h3>
                <p className="membro-cargo">{membro.cargo}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOBRE NÓS (APENAS TEXTO) ==================== */}
      <section className="sobre-section">
        <div className="container sobre-texto-center">
          <h2 className="section-title">Sobre o Grupo 5</h2>
          <div className="sobre-texto">
            <p>
              Somos o <strong>Grupo 5</strong> do curso Técnico em Análise e
              Desenvolvimento de Sistemas do SENAI Valinhos (Unidade Vinhedo).
              Estudantes apaixonados por tecnologia e comprometidos em criar
              soluções inovadoras para a educação.
            </p>
            <p>
              Trabalhamos com <strong>metodologia Scrum</strong>, colaboração
              constante, responsabilidade e foco na entrega de qualidade.
            </p>
            <p>
              Nosso objetivo é transformar o conhecimento adquirido em sala de
              aula em uma ferramenta real que auxilie professores de educação
              física e seus alunos.
            </p>
          </div>
        </div>
      </section>

     
    </>
  );
}