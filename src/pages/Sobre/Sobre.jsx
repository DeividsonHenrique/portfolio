import {
  SobreContainer,
  Title,
  Card,
  Ano,
  Ball,
  Text,
  AnoTitle,
} from "./style";
import { UseConfig } from "../../CreateContext";
import { Fade, Zoom } from "react-awesome-reveal";
function Sobre() {
  const { info } = UseConfig();

  return (
    <>
      <Zoom triggerOnce duration={1000} delay={500}>
        <Title>Minha História</Title>
      </Zoom>
      <Fade direction="down" triggerOnce>
        <SobreContainer>
          {info.map((info) => (
            <Card key={info.id}>
              <Ano>
                <div>
                  <Ball></Ball>
                  <AnoTitle>{info.year}</AnoTitle>
                </div>
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
        </SobreContainer>
      </Fade>
    </>
  );
}

export default Sobre;

// <Text style={{ textAlign: info.align }}>{info.text}</Text>
