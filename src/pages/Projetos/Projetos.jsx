import {
  ProjectsContainer,
  Title,
  Conatiner,
  Cards,
  ImgDiv,
  Logos,
  InfoDiv,
  ImgCard,
  Button,
  ImgContainer,
} from "./style";
import { UseConfig } from "../../CreateContext";
 
function Projetos() {
  const { projetos, logosFrontEnd } = UseConfig();

  return (
    <ProjectsContainer>
      <Title>Principais Projetos</Title>

      <Conatiner>
        {projetos.map((p, index) => (
          <Cards key={index}>
            <ImgContainer>
              <ImgDiv>
                {p.logo.map((logo, index) => (
                  <Logos key={index}>
                    <abbr title={logo}>
                      <img src={logosFrontEnd[logo]} alt="" className={logo} />
                    </abbr>
                  </Logos>
                ))}
              </ImgDiv>
              <ImgCard src={p.img} alt="" />
            </ImgContainer>
            <InfoDiv>
              <h2>{p.title}</h2>
              <p>{p.subtitle}</p>
              <Button onClick={() => window.open(p.link, "_blank")}>
                Repositorio Github
              </Button>
            </InfoDiv>
          </Cards>
        ))}
      </Conatiner>
    </ProjectsContainer>
  );
}

export default Projetos;
