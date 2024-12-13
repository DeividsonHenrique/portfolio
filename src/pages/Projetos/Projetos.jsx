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
import { Fade, Zoom as Z } from "react-awesome-reveal";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function Projetos() {
  const { projetos, logosFrontEnd } = UseConfig();

  return (
    <ProjectsContainer>
      <Fade cascade triggerOnce duration={800}>
        <Title>Principais Projetos</Title>

        <Conatiner>
          {projetos.map((p, index) => (
            <Cards key={index}>
              <ImgContainer>
                <ImgDiv>
                  <Z triggerOnce delay={500} duration={750} cascade>
                    {p.logo.map((logo, index) => (
                      <Logos key={index}>
                        <abbr title={logo}>
                          <img
                            src={logosFrontEnd[logo]}
                            alt=""
                            className={logo}
                          />
                        </abbr>
                      </Logos>
                    ))}
                  </Z>
                </ImgDiv>
                <Fade triggerOnce delay={700} duration={1000}>
                  <Zoom>
                    <ImgCard src={p.img} alt="" />
                  </Zoom>
                </Fade>
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
      </Fade>
    </ProjectsContainer>
  );
}

export default Projetos;
