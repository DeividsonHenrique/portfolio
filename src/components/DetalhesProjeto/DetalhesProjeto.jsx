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
import { Fade, Bounce } from "react-awesome-reveal";
import Zoom from "react-medium-image-zoom";
import { useEffect } from "react";

function DetalhesProjeto({ projeto, onVoltar }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DetalhesContainer>
      <Fade cascade triggerOnce duration={800}>
        <Title className="titulo">Projeto {projeto.title}</Title>
      </Fade>
      <Container className="container">
        <Descricao className="descricao">
          <DivButtons className="botoes">
            <Bounce triggerOnce delay={500} duration={750}>
              <button onClick={onVoltar}>
                <RiArrowGoBackFill className="seta" /> Voltar
              </button>
              <button onClick={() => window.open(projeto.link, "_blank")}>
                Github <FaGithub className="link" />
              </button>
            </Bounce>
          </DivButtons>

          <Fade
            triggerOnce
            duration={1000}
            delay={500}
            cascade
            direction="left"
          >
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
          </Fade>
        </Descricao>

        {/* linha vertical */}
        <Fade triggerOnce duration={1000} delay={500}>
          <VerticalLine className="line"></VerticalLine>
        </Fade>

        <DivImages className="imagens">
          <Fade triggerOnce duration={1000} delay={500} cascade>
            {projeto.imagens.map((img, index) => (
              <Zoom key={index}>
                <img key={index} src={img} alt="" />
              </Zoom>
            ))}
          </Fade>
        </DivImages>
      </Container>
    </DetalhesContainer>
  );
}

export default DetalhesProjeto;
