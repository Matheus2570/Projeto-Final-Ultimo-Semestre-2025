import React from "react";
import "./footer.css";
import logo from "../assets/FotoDoGrupo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo do Grupo" className="footer-logo" />
      </div>

      <div className="footer-center">
        <h4>Tecnologias Utilizadas</h4>
        <ul>
          <li>React.js</li>
          <li>Node.js</li>
          <li>API com IA Generativa</li>
          <li>Vercel</li>
          <li>JavaScript / CSS</li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>Contato</h4>
        <p>Email: projeto.esportes@gmail.com</p>
        <p>Escola: SESI/SENAI Vinhedo – Sala 242</p>
      </div>
    </footer>
  );
};

export default Footer;
