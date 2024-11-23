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
} from "./style";
import { UseTheme } from "../../CreateContext";
import { useLocation } from "react-router-dom";

function Header() {
  const { theme, toggleTheme } = UseTheme();
  const location = useLocation();

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
