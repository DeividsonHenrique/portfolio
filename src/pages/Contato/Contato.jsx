import { UseTheme, UseConfig } from "../../CreateContext";
import { DivContatos, Cards, DivCards, Title } from "./style"

function Contato() {
    const {contato} = UseConfig()
    const {theme} = UseTheme()

  return (
    <DivContatos>
      <Title>Contato</Title>
      <DivCards>
        {
            contato.map((c, index) =>(
            <Cards key={index} onClick={() => window.open(c.link, "_blank")}>
                <img src={c.img} alt="" style={{ filter: theme === "dark" ? c.filter : "" }} />
                <p>{c.title}</p>
            </Cards>
            ))
        }
        
      </DivCards>
    </DivContatos>
  )
}

export default Contato
