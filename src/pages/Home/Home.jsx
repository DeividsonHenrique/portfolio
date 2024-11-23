import { useNavigate } from "react-router-dom";
import { HomeContainer, Intro, Perfil, Title, Subtitle, Button } from "./style";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/sobre");
  }

  return (
    <HomeContainer>
      <Intro>
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
      </Intro>
      <Perfil>
        <img src="./src/assets/Front-End/react.svg" alt="" />
      </Perfil>
    </HomeContainer>
  );
}

export default Home;
