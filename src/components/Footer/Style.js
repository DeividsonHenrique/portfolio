import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: linear-gradient(to left, transparent, white, transparent);

  &::after {
    position: absolute;
    content: "";
    top: 0;
    width: 75%;
    height: 1px;
    background: linear-gradient(to left, transparent, #e30606, transparent);
  }

  @media (max-width: 480px) {
    height: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 25px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 15px;
  font-family: var(--fonte1);
  font-weight: 400;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 8px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 12px;
  }
`;
