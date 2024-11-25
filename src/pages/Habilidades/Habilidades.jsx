import {
  SkillsContainer,
  CardSkills,
  Modulo,
  ModuloTitle,
  ModuloBall,
  Container,
  Icons,
  Details,
  Line,
} from "./style";

import { UseTheme, UseConfig } from "../../CreateContext";


function Habilidades() {
  const { theme } = UseTheme();
  const { habilidades } = UseConfig();

  
  return (
    <SkillsContainer>
      <Details>
        <h1>Habilidades / Conhecimentos</h1>
        <p>
          Conhecimentos que acho relevante destacar com base nos meus projetos e
          estudos!
        </p>
      </Details>

      <Container>
        {/* Front-End */}
        <CardSkills>
          {habilidades.frontEndgeral.map((fe, index) => (
            <Modulo key={index}>
              <div>
                <ModuloBall></ModuloBall>
                <ModuloTitle>{fe.category}</ModuloTitle>
              </div>
              <span style={{ background: fe.color }}></span>
              <span style={{ background: fe.color }}></span>
            </Modulo>
          ))}
          <Icons>
            {habilidades.frontEnd.map((item, index) => (
              <div key={index}>
                <abbr title={item.title}>
                  <img src={item.img} alt={item.title} />
                </abbr>
                <abbr title={`Nivel de conhecimento com ${item.title}`}>
                  <p>{item.knowledge}</p>
                </abbr>
              </div>
            ))}
          </Icons>
        </CardSkills>

        <Line />

        {/* Back-End */}

        <CardSkills>
          {habilidades.backEndgeral.map((be, index) => (
            <Modulo key={index}>
              <div>
                <ModuloBall></ModuloBall>
                <ModuloTitle>{be.category}</ModuloTitle>
              </div>
              <span style={{ background: be.color }}></span>
              <span style={{ background: be.color }}></span>
            </Modulo>
          ))}
          <Icons>
            {habilidades.backEnd.map((item, index) => (
              <div key={index}>
                <abbr title={item.title}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ filter: theme === "dark" ? item.filter : "" }}
                  />
                </abbr>
                <abbr title={`Nivel de conhecimento com ${item.title}`}>
                  <p>{item.knowledge}</p>
                </abbr>
              </div>
            ))}
          </Icons>
        </CardSkills>

        <Line />

        {/* Outros */}

        <CardSkills>
          {habilidades.outrosgeral.map((ot, index) => (
            <Modulo key={index}>
              <div>
                <ModuloBall></ModuloBall>
                <ModuloTitle>{ot.category}</ModuloTitle>
              </div>
              <span style={{ background: ot.color }}></span>
              <span style={{ background: ot.color }}></span>
            </Modulo>
          ))}
          <Icons>
            {habilidades.outros.map((item, index) => (
              <div key={index}>
                <abbr title={item.title}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="img"
                    style={{ filter: theme === "dark" ? item.filter : "" }}
                  />
                </abbr>
                <abbr title={`Nivel de conhecimento com ${item.title}`}>
                  <p>{item.knowledge}</p>
                </abbr>
              </div>
            ))}
          </Icons>
        </CardSkills>
      </Container>
    </SkillsContainer>
  );
}

export default Habilidades;
