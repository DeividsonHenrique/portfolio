/* eslint-disable react/prop-types */
function DetalhesProjeto({projeto,onVoltar}) {  
    
  return (
    <div>
      <button onClick={onVoltar}>Voltar</button>
      <h1>Projeto {projeto.title}</h1>
      <h3>Descrição</h3>
      <p>{projeto.subtitle}</p>
      <h3>Linguagens Utilizadas</h3>
      
    </div>
  )
}

export default DetalhesProjeto
