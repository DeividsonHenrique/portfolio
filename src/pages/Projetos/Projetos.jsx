import {
  ProjectsContainer,
  Title,
  Conatiner,
  Cards,
  ImgDiv,
  InfoDiv,
  Button,
} from "./style";

function Projetos() {
  return (
    <ProjectsContainer>
      <Title>Principais Projetos</Title>

      <Conatiner>
        <Cards>
          <ImgDiv>
            <img src="./src/assets/Front-End/react.svg" alt="" />
            <img
              src="https://github.com/user-attachments/assets/ebde5a38-4eec-485e-b82f-8a60f3416504"
              alt=""
            />
          </ImgDiv>
          <InfoDiv>
            <h2>Logo</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </p>
            <Button>Repositorio Github</Button>
          </InfoDiv>
        </Cards>
      </Conatiner>
    </ProjectsContainer>
  );
}

export default Projetos;
