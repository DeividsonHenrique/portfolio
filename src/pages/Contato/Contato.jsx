import { UseTheme, UseConfig } from "../../CreateContext";
import { DivContatos, Cards, DivCards, Title } from "./style";
import { Bounce, Fade } from "react-awesome-reveal";
function Contato() {
  const { contato } = UseConfig();
  const { theme } = UseTheme();

  return (
    <DivContatos>
      <Fade>
        <Title>Contato</Title>
      </Fade>
      <DivCards>
        <Bounce triggerOnce duration={1000}>
          {contato.map((c, index) => (
            <Cards key={index} onClick={() => window.open(c.link, "_blank")}>
              <img
                src={c.img}
                alt=""
                style={{ filter: theme === "dark" ? c.filter : "" }}
              />
              <Fade direction="up" triggerOnce duration={1000} delay={500}>
                <p>{c.title}</p>
              </Fade>
            </Cards>
          ))}
        </Bounce>
      </DivCards>
    </DivContatos>
  );
}

export default Contato;
