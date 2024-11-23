import { SobreContainer, Card, Ano, Ball, Text, AnoTitle } from "./style";
import { UseTheme } from "../../CreateContext";
function Sobre() {
  const { info } = UseTheme();

  return (
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
          <Text style={{ textAlign: info.align }}>{info.text}</Text>
        </Card>
      ))}
    </SobreContainer>
  );
}

export default Sobre;
