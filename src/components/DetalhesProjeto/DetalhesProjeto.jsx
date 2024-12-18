/* eslint-disable react/prop-types */
import { DetalhesContainer } from "./Style";

function DetalhesProjeto({projeto,onVoltar}) {  
    
  return (
    <DetalhesContainer>
      <h1>Projeto {projeto.title}</h1>
        <div className="container">

          <div className="descricao">

            <div className="botoes">
              <button onClick={onVoltar}>Voltar</button>
              <button onClick={() => window.open(projeto.link, "_blank")}>Github</button>
            </div>      


            <div className="sobre">
              <h2><img src="/assets/Other/alfinete.svg" alt="" height={20} />Sobre o projeto</h2>
              <p>{projeto.sobre}</p>
            </div>

            <div className="funcionalidades">
              <h2><img src="/assets/Other/paleta.svg" alt="" height={20} />Funcionalidades</h2>
              <ul>
                {projeto.funcionalidades.map((funcionalidade, index) => (
                  <li key={index}>{funcionalidade}</li>
                ))}
              </ul>
            </div>

            <div className="tecnologias">
              <h2><img src="/assets/Other/foguete.svg" alt="" height={20} />Tecnologias</h2>
              <ul>
                {projeto.tecnologias.map((tecnologia, index) => (
                  <li key={index}>{tecnologia}</li>
                ))}
              </ul>
            </div>

            <span className="data"><img src="/assets/Other/calendario.svg" alt="" height={20} />Data: {projeto.data}</span>

          </div>

          {/* linha vertical */}
          <div className="line"></div>

          <div className="imagens">
            {projeto.imagens.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))}
          </div>

        </div>
    </DetalhesContainer>
  )
}

export default DetalhesProjeto
