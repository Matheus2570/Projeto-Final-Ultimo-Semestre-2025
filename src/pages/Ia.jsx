import { useState } from "react";
import esportes from "../../api/esportes";
import "./Ia.css";

// Imagens
import geral1 from "../assets/geral1.jpeg";
import geral2 from "../assets/geral2.jpeg";
import futebol1 from "../assets/futebol1.jpeg";
import futebol2 from "../assets/futebol2.jpeg";
import volei1 from "../assets/volei1.jpeg";
import volei2 from "../assets/volei2.jpeg";
import basquete1 from "../assets/basquete1.jpeg";
import basquete2 from "../assets/basquete2.jpeg";
import handebol1 from "../assets/handebol1.jpeg";
import handebol2 from "../assets/handebol2.jpeg";
import rugby1 from "../assets/rugby1.jpeg";
import rugby2 from "../assets/rugby2.jpeg";
import lutas1 from "../assets/lutas1.jpeg";
import lutas2 from "../assets/lutas2.jpeg";

// React Markdown
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const imagensDuplas = {
  geral: [geral1, geral2],
  futebol: [futebol1, futebol2],
  volei: [volei1, volei2],
  basquete: [basquete1, basquete2],
  handebol: [handebol1, handebol2],
  rugby: [rugby1, rugby2],
  lutas: [lutas1, lutas2],
};

export default function Ia() {
  const [tema, setTema] = useState("geral");
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  const atual = esportes[tema];
  const [imgEsquerda, imgDireita] = imagensDuplas[tema] || imagensDuplas.geral;

  async function enviarPergunta() {
    if (!pergunta.trim()) return;

    setCarregando(true);
    setResposta("");

    const promptCompleto = `${atual.prompt}\n\nPergunta do usuário: ${pergunta}`;

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: promptCompleto }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 4096 },
            safetySettings: [
              { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
              { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
            ],
          }),
        }
      );

      if (!res.ok) {
        const err = await res.text();
        setResposta(`Erro ${res.status}: ${err}`);
        setCarregando(false);
        return;
      }

      const data = await res.json();
      const texto = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta.";
      setResposta(texto);
    } catch (e) {
      console.error(e);
      setResposta("Erro ao se comunicar com a IA. Verifique sua conexão.");
    } finally {
      setCarregando(false);
    }
  }

  function trocarTema(novoTema) {
    setTema(novoTema);
    setPergunta("");
    setResposta("");
  }

  return (
    <div className="ia-container-novo">
      <h1 className="ia-titulo">Pergunte o que quiser e tenha ótimos estudos</h1>

      <div className="ia-centro">
        <input
          className="ia-input"
          type="text"
          value={pergunta}
          placeholder={atual.placeholder}
          onChange={(e) => setPergunta(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !carregando && enviarPergunta()}
        />
        <button
          className="ia-btn"
          onClick={enviarPergunta}
          disabled={carregando || !pergunta.trim()}
        >
          {carregando ? "Carregando..." : "Enviar"}
        </button>
      </div>

      <div className="ia-layout-tres-colunas">
        {/* Coluna Esquerda */}
        <div className="ia-coluna-esquerda">
          <h3 className="ia-coluna-titulo">Exemplos rápidos</h3>
          <div className="ia-sugestoes">
            {atual.exemplos.map((ex, i) => (
              <p key={i} className="ia-sugestao-item" onClick={() => setPergunta(ex)}>
                {ex}
              </p>
            ))}
          </div>
          <div className="ia-imagem-lateral">
            <img src={imgEsquerda} alt="Imagem temática esquerda" />
          </div>
        </div>

        {/* Coluna Central - Resposta com Markdown + Scroll perfeito */}
        <div className="ia-coluna-centro">
          {carregando && <p className="ia-carregando">Pensando...</p>}

          {resposta && (
            <div className="ia-resposta">
              <h3>Resposta:</h3>
              <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {resposta}
                </ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        {/* Coluna Direita */}
        <div className="ia-coluna-direita">
          <h3 className="ia-coluna-titulo">Categorias</h3>
          <div className="ia-botoes-categorias">
            <button
              className={`ia-botao-categoria ${tema === "geral" ? "selecionado" : ""}`}
              onClick={() => trocarTema("geral")}
            >
              Geral
            </button>
            {Object.keys(esportes).map((key) =>
              key !== "geral" ? (
                <button
                  key={key}
                  className={`ia-botao-categoria ${tema === key ? "selecionado" : ""}`}
                  onClick={() => trocarTema(key)}
                >
                  {esportes[key].nome}
                </button>
              ) : null
            )}
          </div>
          <div className="ia-imagem-lateral">
            <img src={imgDireita} alt="Imagem temática direita" />
          </div>
        </div>
      </div>
    </div>
  );
}