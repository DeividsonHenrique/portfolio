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
  LinksMobile,
  CloseBtn,
  Line,
  Arrow,
} from "./style";
import { UseTheme, UseConfig } from "../../CreateContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Bounce, Fade } from "react-awesome-reveal";


function Header() {
  const { theme, toggleTheme } = UseTheme();
  const { handleToggle, handleClose, isOpen, scrolled } = UseConfig();
  const location = useLocation();
  const navigate = useNavigate();


  const goToHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer className={scrolled ? "scrolled" : ""}>
      <Bounce triggerOnce duration={1000}>
      <Logo onClick={goToHome}>
        <img src="/assets/Front-End/react.svg" alt="Logo" />
      </Logo>
      </Bounce>
      <LinksContainer>
      <Fade triggerOnce duration={500} cascade>
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
        
        </Fade>
        <MenuMobile onClick={handleToggle} />

        
          <ContainerMobile className={isOpen ? "open" : ""}>
            <LinksContainerMobile>
            <CloseBtn onClick={handleClose} />

                <LinksMobile
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                  onClick={handleClose}
                >
                  <img src="/assets/Menu-Mobile/home.svg" alt="Inicio" />
                  Início
                  <Arrow />
                </LinksMobile>
              <Line/>
              
                <LinksMobile
                  to="/sobre"
                  className={location.pathname === "/sobre" ? "active" : ""}
                  onClick={handleClose}
                >
                  <img src="/assets/Menu-Mobile/sobre.svg" alt="Sobre" />
                  Sobre
                  <Arrow />
                </LinksMobile>
              <Line/>
              
                <LinksMobile
                  to="/habilidades"
                  className={location.pathname === "/habilidades" ? "active" : ""}
                  onClick={handleClose}
                >
                  <img
                    src="/assets/Menu-Mobile/habilidades.svg" alt="Habilidades" />
                  Habilidades
                  <Arrow />
                </LinksMobile>
              <Line/>
                <LinksMobile
                  to="/projetos"
                  className={location.pathname === "/projetos" ? "active" : ""}
                  onClick={handleClose}
                >
                  <img src="/assets/Menu-Mobile/projetos.svg" alt="Projetos" />
                  Projetos
                  <Arrow />
                </LinksMobile>
              <Line/>
                <LinksMobile
                  to="/contato"
                  className={location.pathname === "/contato" ? "active" : ""}
                  onClick={handleClose}
                >
                  <img src="/assets/Menu-Mobile/contato.svg" alt="Contato" />
                  Contato
                  <Arrow />
                </LinksMobile>
                <Line/>
            </LinksContainerMobile>
          </ContainerMobile>
        

          <Bounce triggerOnce duration={1000}>
        <div>
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
        </div>
        </Bounce>
      </LinksContainer>
    </HeaderContainer>
  );
}

export default Header;
