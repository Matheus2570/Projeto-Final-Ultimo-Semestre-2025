import { useState } from "react";
import esportes from "../../api/esportes";
import "./Ia.css";

export default function Ia() {
  const [tema, setTema] = useState("geral");
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Pega os dados do tema atual (prompt, placeholder, exemplos...)
  const atual = esportes[tema];

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
    <div className="ia-container">
      <h1 className="ia-titulo">Pergunte o que quiser e tenha ótimos estudos</h1>

      {/* Input com Enter */}
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

      {/* Exemplos fixos do tema atual */}
      <div className="ia-sugestoes">
        {atual.exemplos.map((ex, i) => (
          <p
            key={i}
            className="ia-sugestao-item"
            onClick={() => setPergunta(ex)}
          >
            {ex}
          </p>
        ))}
      </div>

      <div className="ia-categorias-texto">
        Ou selecione uma categoria e obtenha respostas direcionadas
      </div>

      {/* Botões de categorias - Geral sempre visível */}
      <div className="ia-botoes">
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

      {/* Resposta da IA */}
      {resposta && (
        <div className="ia-resposta">
          <h3>Resposta:</h3>
          <p style={{ whiteSpace: "pre-wrap" }}>{resposta}</p>
        </div>
      )}
    </div>
  );
}