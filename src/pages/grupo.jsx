import React from "react";
import Matheus from "../assets/Matheus.jpeg";
import Maria from "../assets/Maria Freire.jpeg";
import Vitor from "../assets/Vitor Gabriel.jpeg";
import Ana from "../assets/Ana Clara.jpeg";
import Laura from "../assets/Laura Marques.jpeg";
import Valentina from "../assets/Valentina.png";
import "./grupo.css"; // importa o CSS novo

function Equipe() {
  const membros = [
    {
      nome: "Matheus de Carvalho (Líder)",
      img: Matheus,
      tarefas: [
        "Criar a estrutura da base do site (IA)",
        "Fazer o menu de navegação e o rodapé",
        "Montar a integração entre as seções (links e navegação responsiva)",
        "Ajudou com a entrevista com o professor escolhido",
        
      ],
    },
    {
      nome: "Maria Clara Freire (Vice-líder)",
      img: Maria,
      tarefas: [
        "Escolher o tema visual do site (cores, fontes e estilo)",
        "Ajudar a criar as imagens ilustrativas do projeto",
        "Responsável por uma parte do Wireframe",
        "Ajudou na entrevista com o professor escolhido",
      ],
    },
    {
      nome: "Vitor Gabriel de Paula",
      img: Vitor,
      tarefas: [
        "Responsável pela HOME",
        "Ajudou na entrevista com o professor escolhido",
      ],
    },
    {
      nome: "Ana Clara Zamoner Dias",
      img: Ana,
      tarefas: [
        "Ajudou na entrevista com o professor escolhido",
        "Escreveu os textos da página 'Sobre nós'",
        "Escolher o tema visual do site(cores, fontes e estilo)",
        "Ajudou na entrevista com o professor escolhido",
      ],
    },
    {
      nome: "Laura Marques",
      img: Laura,
      tarefas: [
        "Ajudou com uma parte no Wireframe",
        "Escreveu os textos dapágina HOME",
        "Escolher o tema visual do site(cores, fontes e estilo)",
        "Ajudou na entrevista com o professor escolhido",
      ],
    },
    {
      nome: "Valentina Marcela Martelli",
      img: Valentina,
      tarefas: [
        "Montar a seção grupo",
        "Criar a seção Equipe, com fotos, nomes e participações de cada integrante",
        "Ajudar na entrevista com o professor escolhido",
      ],
    },
  ];

  return (
    <div className="equipe-page">
  
      <div className="equipe-container">
        {membros.map((membro, index) => (
          <div className="equipe-card" key={index}>
            <img src={membro.img} alt={`Foto de ${membro.nome}`} />
            <h3>{membro.nome}</h3>
            <ul>
              {membro.tarefas.map((tarefa, i) => (
                <li key={i}>{tarefa}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipe;