AquiFEITO! Aqui está o seu README exatamente como você mandou — tudo junto, sem quebras desnecessárias, só arrumadinho, corrigido e bonito para colar direto no GitHub:

```markdown
# 📘 Centro Inteligente de Recursos Pedagógicos
### Plataforma com Inteligência Artificial para apoiar professores e estudantes
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-7C4DFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Gemini API](https://img.shields.io/badge/Gemini%202.5%20Flash-8A2BE2)](https://ai.google.dev)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Projeto desenvolvido pelo **Grupo 5** do curso **Técnico em Análise e Desenvolvimento de Sistemas** do **SENAI Valinhos – Unidade Vinhedo**.

Uma aplicação web que utiliza **Inteligência Artificial** (Google Gemini) para gerar conteúdos educacionais personalizados, ajudando professores na criação de materiais e estudantes no aprendizado.

---
## 📑 Sumário
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Rodar](#️-como-rodar-o-projeto)
- [Equipe](#-equipe)
- [Licença](#-licença)
- [Contribuições](#-contribuições)

---
## 🚀 Funcionalidades
### 1. Geração de Conteúdos com IA (Gemini API)
- Pergunte qualquer coisa e receba respostas instantâneas
- Usa o modelo **Gemini 2.5 Flash** (rápido e eficiente)
- Respostas formatadas em **Markdown** com suporte a tabelas, código, listas etc.
- Categorias temáticas: Futebol, Vôlei, Basquete, Handebol, Geral e mais

### 2. Interface em Três Colunas
- **Coluna esquerda**: Exemplos rápidos para inspirar perguntas
- **Coluna central**: Campo de pergunta + resposta da IA
- **Coluna direita**: Categorias com cards ilustrativos e atrativos

### 3. Páginas Institucionais
- **Sobre o Projeto**: Explicação, objetivos pedagógicos e resultados esperados
- **Nossa Equipe**: Fotos e cargos de todos os integrantes

---
## 🧠 Tecnologias Utilizadas
### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- React.js + Vite
- React Markdown + Remark GFM (para renderizar respostas)
- CSS puro (sem frameworks)

### Inteligência Artificial
![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)
- Google Gemini API – GenerateContent (modelo gemini-2.5-flash)

### Ferramentas & Metodologia
- Git & GitHub
- Scrum (sprints semanais)
- Figma (prototipagem)

---
## 📂 Estrutura do Projeto
src/
├─ pages/
│   ├─ Home.jsx
│   ├─ Ia.jsx
│   └─ GrupoSobre.jsx
├─ api/
│   └─ esportes.js
├─ assets/
│   ├─ imagens/ # Imagens gerais e de categorias
│   └─ equipe/ # Fotos da equipe
├─ components/ # (caso tenha componentes reutilizáveis)
├─ App.jsx
└─ main.jsx

---
## ⚙️ Como Rodar o Projeto
### Pré-requisitos
- Node.js (versão 18 ou superior)
- Conta no Google AI Studio para obter a chave da Gemini API

### Passo a passo
1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/centro-inteligente-recursos-pedagogicos.git
cd centro-inteligente-recursos-pedagogicos
```
2. **Instale as dependências**
```bash
npm install
```
3. **Configure a chave da API Gemini**
Crie um arquivo .env na raiz do projeto:
```env
VITE_GEMINI_API_KEY=SUA_CHAVE_AQUI
```
Obtenha sua chave grátis em: **https://aistudio.google.com/app/apikey**

4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```
Acesse em: **http://localhost:5173** (ou a porta exibida no terminal)

---
## 👥 Equipe – Grupo 5 (SENAI Valinhos – Unidade Vinhedo)
| Nome                        | Cargo                    |
|-----------------------------|--------------------------|
| Matheus de Carvalho         | Líder do Projeto         |
| Maria Clara Freire          | Vice-líder               |
| Vitor Gabriel de Paula      | Desenvolvedor Fullstack  |
| Ana Clara Zamoner Dias      | Desenvolvedora Frontend  |
| Laura Marques               | Desenvolvedora Frontend  |
| Valentina Marcela Martelli  | Desenvolvedora Frontend  |

---
## Licença
Este projeto está sob a licença **MIT** – veja o arquivo [LICENSE](LICENSE) para detalhes.

---
## 🤝 Contribuições
Contribuições são super bem-vindas! Abra uma issue ou envie um Pull Request.

# Feito com 💙 pelo Grupo 5 – SENAI Vinhedo 2025
```
