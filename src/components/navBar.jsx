// components/NavBar.jsx
import { Link, useLocation } from "react-router-dom"; 
import { useState } from "react"; 
import "./navBar.css"; 
import BotaoMudarTema from "./botaoMudaTema.jsx"; 

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation(); // pega a rota atual

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const handleClick = () => setMenuAberto(false);

  // Map de rotas para títulos
  const titulos = {
    "/": "🏠 Página Principal",
     "/ia": "📄 Ia Generativa",
    "/grupo": "👥 Grupo",
    
  };

  

  const tituloAtual = titulos[location.pathname] || "Estação de Esportes";

  return (
    <nav className="navBar">
      <div className="navTopo">
        <h1 className="tituloSite">{tituloAtual}</h1>
        <div className="tituloComBotao">
          <i
            className={menuAberto ? "bx bx-menu-alt-right" : "bx bx-menu"}
            onClick={alternarMenu}
            style={{ cursor: "pointer" }}
          ></i>
          <BotaoMudarTema />
        </div>
      </div>

      {menuAberto && (
        <div id="menu-opcoes" className="menu-opcoes">
          <ul>
            <li><Link to="/" onClick={handleClick} className="navLink">🏠 Página Principal</Link></li>
            <li><Link to="/ia" onClick={handleClick} className="navLink">📄 Ia Generativa</Link></li>
            <li><Link to="/grupo" onClick={handleClick} className="navLink">👥 Grupo</Link></li>
           
          </ul>
        </div>
      )}
    </nav>
  );
}