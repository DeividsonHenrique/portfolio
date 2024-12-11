import { useNavigate } from "react-router-dom";
import { HomeContainer, Intro, Perfil, Title, Subtitle, Button } from "./style";
import { Fade, Zoom } from "react-awesome-reveal";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/sobre");
  }

  return (
    <Fade cascade triggerOnce>
      <HomeContainer>
        <Intro>
          <Fade triggerOnce cascade direction="down" duration={500}>
            <Title>
              Olá,
              <br />
              Eu sou o <span>Deividson</span>
              <br />
              Desenvolvedor Front-End
            </Title>
            <Subtitle>
              Mostrando um pouco dos meus
              <br />
              conhecimentos, habilidades e projetos
              <br />
              desenvolvidos até hoje durante meus dois anos e meio
              <br />
              com aplicações interativas utilizando React e Node.js!
            </Subtitle>
            <Button onClick={handleClick}>Saiba Mais</Button>
          </Fade>
        </Intro>
        <Zoom triggerOnce>
          <Perfil triggerOnce>
            <img src="/assets/Front-End/react.svg" alt="" />
          </Perfil>
        </Zoom>
      </HomeContainer>
    </Fade>
  );
}

export default Home;
