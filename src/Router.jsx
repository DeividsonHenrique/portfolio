import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Habilidades from "./pages/Habilidades/Habilidades";
import Projetos from "./pages/Projetos/Projetos";
import Contato from "./pages/Contato/Contato";
import Footer from "./components/Footer/Footer";
import DetalhesProjeto from "./components/DetalhesProjeto/DetalhesProjeto";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<DetalhesProjeto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
