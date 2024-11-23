import { SkillsContainer, CardSkills, Modulo, ModuloTitle, ModuloBall, Container, Icons } from "./style"

function Habilidades() {
  return (
    <SkillsContainer>
      <div>
          <h1>Habilidades / Conhecimentos</h1>
          <p>Conhecimentos que acho relevante destacar com base nos meus projetos e estudos!</p>
      </div>

        <Container>

      <CardSkills>
        <Modulo>
            <div>
                <ModuloBall></ModuloBall>
                <ModuloTitle>React</ModuloTitle>
            </div>
            <span></span>
            <span></span>
        </Modulo>
        <Icons>
            <div>
                <img src="./src/assets/Front-End/react.svg" alt="" />
                <p>react</p>
            </div>
        </Icons>

      </CardSkills>

      </Container>
    </SkillsContainer>
  )
}

export default Habilidades
