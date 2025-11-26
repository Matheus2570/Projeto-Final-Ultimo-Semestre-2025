import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import BotaoMudarTema from "./botaoMudaTema";

export default function NavBar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const handleClick = () => setMenuAberto(false);

  // Títulos das páginas
  const titulos = {
    "/": "Projeto Home Esportes",
    "/ia": "IA Educacional Esportiva",
    "/grupo": "Nosso Grupo",
  };

  const tituloAtual = titulos[location.pathname] || "Projeto Esportes";

  return (
    <nav className="navBar">
      <div className="navTopo">
        <h1 className="tituloSite">{tituloAtual}</h1>

        <div className="tituloComBotao">
          <i
            className={menuAberto ? "bx bx-menu-alt-right" : "bx bx-menu"}
            onClick={alternarMenu}
          ></i>
          <BotaoMudarTema />
        </div>
      </div>

      {menuAberto && (
        <div id="menu-opcoes" className="menu-opcoes">
          <ul>
            <li>
              <Link to="/" onClick={handleClick} className="navLink">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link to="/ia" onClick={handleClick} className="navLink">
                🤖 IA Esportiva
              </Link>
            </li>
            <li>
              <Link to="/grupo" onClick={handleClick} className="navLink">
                👥 Grupo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
