/* eslint-disable react/prop-types */
import {
  DetalhesContainer,
  Container,
  Descricao,
  Subtitle,
  DivButtons,
  Sobre,
  DivTechAndFunc,
  Data,
  VerticalLine,
  DivImages,
  Text,
  LiList,
} from "./Style";
import { Title } from "../../pages/Projetos/style";
//import { FaExternalLinkAlt } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function DetalhesProjeto({ projeto, onVoltar }) {
  return (
    <DetalhesContainer>
      <Title className="titulo">Projeto {projeto.title}</Title>
      <Container className="container">
        <Descricao className="descricao">
          <DivButtons className="botoes">
            <button onClick={onVoltar}>
              <RiArrowGoBackFill className="seta" /> Voltar
            </button>
            <button onClick={() => window.open(projeto.link, "_blank")}>
              Github <FaGithub className="link" />
            </button>
          </DivButtons>

          <Sobre className="sobre">
            <Subtitle>
              <img src="/assets/Other/alfinete.svg" alt="" height={20} />
              Sobre o projeto
            </Subtitle>
            <Text>{projeto.sobre}</Text>
          </Sobre>

          <DivTechAndFunc className="funcionalidades">
            <Subtitle>
              <img src="/assets/Other/paleta.svg" alt="" height={20} />
              Funcionalidades
            </Subtitle>
            <ul>
              {projeto.funcionalidades.map((funcionalidade, index) => {
                const [titulo, descricao] = funcionalidade.split(":");
                return (
                  <LiList key={index}>
                    <strong>{titulo}: </strong>
                    {descricao}
                  </LiList>
                );
              })}
            </ul>
          </DivTechAndFunc>

          <DivTechAndFunc className="tecnologias">
            <Subtitle>
              <img src="/assets/Other/foguete.svg" alt="" height={20} />
              Tecnologias
            </Subtitle>
            <ul>
              {projeto.tecnologias.map((tecnologia, index) => {
                const [titulo, descricao] = tecnologia.split(":");
                return (
                  <LiList key={index}>
                    <strong>{titulo}: </strong>
                    {descricao}
                  </LiList>
                );
              })}
            </ul>
          </DivTechAndFunc>

          <Data className="data">
            <img src="/assets/Other/calendario.svg" alt="" height={20} />
            <strong>Data:</strong> {projeto.data}
          </Data>
        </Descricao>

        {/* linha vertical */}
        <VerticalLine className="line"></VerticalLine>

        <DivImages className="imagens">
          {projeto.imagens.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </DivImages>
      </Container>
    </DetalhesContainer>
  );
}

export default DetalhesProjeto;
