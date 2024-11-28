import {
  HeaderContainer,
  LinksContainer,
  Links,
  Logo,
  Label,
  Input,
  Ball,
  DarkMode,
  LightMode,
  MenuMobile,
  ContainerMobile,
  LinksContainerMobile,
  LinksMobile
} from "./style";
import { UseTheme } from "../../CreateContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const { theme, toggleTheme } = UseTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false); // Estado para controle do scroll

  useEffect(() => {
    const handleScroll = () => {
      // Define a mudança de estado com base na posição do scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll); // Adiciona o listener de scroll

    return () => window.removeEventListener('scroll', handleScroll); // Remove o listener ao desmontar o componente
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const goToHome = () => {
    navigate("/");
  };
 
  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <Logo onClick={goToHome}>
        <img src="./src/assets/Front-End/react.svg" alt="" />
      </Logo>
      <LinksContainer>
        <Links to="/" className={location.pathname === "/" ? "active" : ""}>
          Início
        </Links>
        <Links
          to="/sobre"
          className={location.pathname === "/sobre" ? "active" : ""}
        >
          Sobre
        </Links>
        <Links
          to="/habilidades"
          className={location.pathname === "/habilidades" ? "active" : ""}
        >
          Habilidades
        </Links>
        <Links
          to="/projetos"
          className={location.pathname === "/projetos" ? "active" : ""}
        >
          Projetos
        </Links>
        <Links
          to="/contato"
          className={location.pathname === "/contato" ? "active" : ""}
        >
          Contato
        </Links>

        <MenuMobile onClick={handleToggle}/>

        {isOpen && (
          <ContainerMobile>
            <LinksContainerMobile>
                <LinksMobile to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleClose}>Início</LinksMobile>
                <LinksMobile to="/sobre" className={location.pathname === "/sobre" ? "active" : ""} onClick={handleClose}>Sobre</LinksMobile>
                <LinksMobile to="/habilidades" className={location.pathname === "/habilidades" ? "active" : ""} onClick={handleClose}>Habilidades</LinksMobile>
                <LinksMobile to="/projetos" className={location.pathname === "/projetos" ? "active" : ""} onClick={handleClose}>Projetos</LinksMobile>
                <LinksMobile to="/contato" className={location.pathname === "/contato" ? "active" : ""} onClick={handleClose}>Contato</LinksMobile>
            </LinksContainerMobile>
          </ContainerMobile>
        )}

        <Input
          type="checkbox"
          value={theme === "light" ? "Modo Escuro" : "Modo Claro"}
          onClick={toggleTheme}
          id="check"
        />
        <Label htmlFor="check">
          <LightMode />
          <DarkMode />
          <Ball></Ball>
        </Label>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
