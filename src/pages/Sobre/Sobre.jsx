import {
  SobreContainer,
  Title,
  Tags,
  Card,
  Ano,
  Ball,
  Text,
  AnoTitle,
} from "./style";
import { UseConfig } from "../../CreateContext";
import { Fade } from "react-awesome-reveal";
function Sobre() {
  const { info } = UseConfig();

  return (
    <>
      <Fade direction="down" triggerOnce>
        <SobreContainer>
          <Fade triggerOnce duration={1000} delay={500}>
            <Title>Minha História</Title>
          </Fade>
          <Tags>
            {info.map((info) => (
              <Card key={info.id}>
                <Ano>
                  <Fade
                    cascade
                    triggerOnce
                    direction="up"
                    delay={1000}
                    duration={1000}
                  >
                    <div>
                      <Ball></Ball>
                      <AnoTitle>{info.year}</AnoTitle>
                    </div>
                  </Fade>
                  <span style={{ background: info.color }}></span>
                  <span style={{ background: info.color }}></span>
                </Ano>
                <Fade
                  triggerOnce
                  cascade
                  direction="left"
                  duration={1000}
                  delay={500}
                  style={{ height: "100%" }}
                >
                  <Text>{info.text}</Text>
                </Fade>
              </Card>
            ))}
          </Tags>
        </SobreContainer>
      </Fade>
    </>
  );
}

export default Sobre;

// <Text style={{ textAlign: info.align }}>{info.text}</Text>
