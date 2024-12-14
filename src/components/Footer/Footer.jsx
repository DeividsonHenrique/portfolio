import { FooterContainer, Title } from "./style";
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <>
      <Fade triggerOnce duration={5000}>
        <FooterContainer>
          <Fade triggerOnce duration={1500} delay={100} direction="down">
            <Title>Created by Deividson - 2024 </Title>
          </Fade>
        </FooterContainer>
      </Fade>
    </>
  );
}

export default Footer;
