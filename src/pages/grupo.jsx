import React from "react";

// =================== IMAGENS DA EQUIPE ===================
import Matheus from "../assets/Matheus.jpeg";
import MariaFreire from "../assets/MariaFreire.jpeg";
import VitorGabriel from "../assets/VitorGabriel.jpeg";
import AnaClara from "../assets/AnaClara.jpeg";
import LauraMarques from "../assets/LauraMarques.jpeg";
import Valentina from "../assets/Valentina.jpeg";

// =================== IMAGENS DO SOBRE NÓS ===================
import FotoLogo from "../assets/LogoDoGrupo.jpeg";      // logo ou foto principal
import FotoGrupo from "../assets/FotoDoGrupo2.jpeg";     // foto do grupo juntos

// =================== CSS ===================
import "./grupo.css";   // ou o nome que você estiver usando (GrupoSobre.css, etc.)

export default function GrupoSobre() {
  const membros = [
    { nome: "Matheus de Carvalho (Líder)",         img: Matheus },
    { nome: "Maria Clara Freire (Vice-líder)",     img: MariaFreire },
    { nome: "Vitor Gabriel de Paula",              img: VitorGabriel },
    { nome: "Ana Clara Zamoner Dias",              img: AnaClara },
    { nome: "Laura Marques",                       img: LauraMarques },
    { nome: "Valentina Marcela Martelli",          img: Valentina },
  ];

  return (
    <>
      {/* ==================== EQUIPE ==================== */}
      <section className="equipe-page">
        <h2>NOSSA EQUIPE</h2>
        <div className="equipe-container">
          {membros.map((membro, i) => (
            <div className="membro-foto" key={i}>
              <img src={membro.img} alt={membro.nome} />
              <p>{membro.nome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== TEXTO SOBRE NÓS ==================== */}
      <section className="sobre-texto-section">
        <div className="container-texto">
          <img src={FotoLogo} alt="Logo do Grupo" className="foto-grupo" />
          
          <div className="texto-linhas">
            <p>
              Somos o <strong>Grupo 5</strong> do curso Técnico em Análise e Desenvolvimento de
              Sistemas do SENAI Valinhos (Unidade Vinhedo). Nosso time é formado por
              estudantes comprometidos com a inovação tecnológica e com a criação
              de soluções voltadas à educação.
            </p>
            <p>
              Trabalhamos com colaboração, responsabilidade e organização,
              utilizando a metodologia <strong>SCRUM</strong> para dividir etapas e garantir que
              cada parte do projeto seja desenvolvida com qualidade e evolução contínua.
            </p>
            <p>
              Nosso principal objetivo é aplicar na prática todo o conhecimento
              adquirido ao longo do curso, criando uma ferramenta funcional e
              acessível que possa atender às necessidades do professor de educação física.
            </p>
          </div>
        </div>

        {/* Foto do grupo inteiro (opcional – você pode trocar ou deixar as duas) */}
        <div className="foto-grupo-completo">
          <img src={FotoGrupo} alt="Foto do grupo completo" />
        </div>
      </section>

      {/* ==================== OBJETIVOS DO PROJETO ==================== */}
      <section className="objetivos">
        <div className="container-objetivos">
          <h2>Objetivos do Projeto</h2>
          <div className="cards">
            <div className="card">
              <div className="card-title">APOIAR O APRENDIZADO</div>
              <div className="card-content">
                <h3>Apoiar o aprendizado dos alunos</h3>
                <p>
                  Oferecer uma ferramenta que auxilie os estudantes nas pesquisas escolares,
                  permitindo que encontrem informações de forma rápida e organizada através da IA.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-title">IA NO DIA A DIA</div>
              <div className="card-content">
                <h3>Utilizar IA para facilitar estudos</h3>
                <p>
                  A plataforma usa a API Gemini para gerar explicações, resumos e respostas
                  relacionadas ao conteúdo pesquisado, tornando o estudo mais prático e acessível.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-title">EXPERIÊNCIA REAL</div>
              <div className="card-content">
                <h3>Desenvolver experiência prática em tecnologia</h3>
                <p>
                  Aplicar conhecimentos de desenvolvimento web, integração de APIs,
                  banco de dados e metodologia SCRUM em um projeto real de software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}