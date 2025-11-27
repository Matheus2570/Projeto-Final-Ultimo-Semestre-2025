import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/home";
import Ia from "./pages/Ia";
import Grupo from "./pages/grupo";

// Componentes
import NavBar from "./components/navBar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ia" element={<Ia />} />
        <Route path="/grupo" element={<Grupo />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
