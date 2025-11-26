import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas novas do projeto de Esportes + IA
import Home from "./pages/home";
import IA from "./pages/iaGenerativa";
import Grupo from "./pages/grupo";

// Componentes gerais
import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ia" element={<IA />} />
        <Route path="/grupo" element={<Grupo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
