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
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const { theme, toggleTheme } = UseTheme();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
 
  return (
    <HeaderContainer>
      <Logo>
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
