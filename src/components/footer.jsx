import "./footer.css";
import logo from "../assets/FotoDoGrupo.jpeg";

export default function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-left">
        <img src={logo} alt="Foto do grupo" className="footer-logo" />
      </div>

      <div className="footer-center">
        <h4>Projeto – Esportes + IA</h4>
        <ul>
         <li>Inteligência Artificial</li>
<li>Respostas Automáticas</li>
<li>Interface Web Responsiva</li>

        </ul>
      </div>

      <div className="footer-right">
        <h4>Contato do Grupo</h4>
        <p>Email: esportesia@projeto.com</p>
        <p>Telefone: (11) 99999-9999</p>
        <p>Escola: SESI / SENAI Vinhedo – Turma 242</p>
      </div>

    </footer>
  );
}
