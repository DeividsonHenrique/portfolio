import styled from "styled-components";

export const DetalhesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  padding-top: 50px;

  @media (min-width: 480px) and (max-width: 640px) {
    width: 95%;
  }

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 992px) and (max-width: 1440px) {
    justify-content: space-around;
  }
`;

export const Descricao = styled.div`
  max-width: 620px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media (min-width: 992px) and (max-width: 1260px) {
    max-width: 500px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    max-width: 600px;
  }
`;

export const DivButtons = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    font-family: var(--fonte1);
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #770000;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    }

    .link {
      margin-left: 5px;
    }

    .seta {
      margin-right: 5px;
    }
  }

  @media (max-width: 480px) {
    height: 70px;

    button {
      width: 100px;
      height: 30px;
      font-size: 12px;
    }
  }

  @media (min-width: 481px) and (max-width: 1260px) {
    height: 70px;
    justify-content: space-around;

    button {
      width: 100px;
      height: 30px;
      font-size: 12px;
    }
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    height: 70px;
    justify-content: space-between;

    button {
      width: 100px;
      height: 30px;
      font-size: 13px;
    }
  }
`;

export const Sobre = styled.div`
  margin-block: 20px;
`;
export const Subtitle = styled.h2`
  color: white;
  font-family: var(--fonte1);
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  transition: all 0.5s ease-in-out;

  img {
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const DivTechAndFunc = styled.div`
  margin-block: 20px;
`;

export const Text = styled.p`
  color: white;
  font-family: var(--fonte1);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  transition: all 0.5s ease-in-out;
  text-indent: 10px;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const LiList = styled.li`
  list-style-type: none;
  color: white;
  font-family: var(--fonte1);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  transition: all 0.5s ease-in-out;

  strong {
    margin-right: 5px;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
  }

  @media (min-width: 481px) and (max-width: 1440px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const Data = styled.span`
  color: white;
  font-family: var(--fonte1);
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-block: 20px;
  transition: all 0.5s ease-in-out;

  strong {
    margin-right: 5px;
    transition: all 0.5s ease-in-out;
  }

  img {
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
  }

  @media (min-width: 481px) and (max-width: 1260px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 100vh;
  background-color: #770000;

  @media (max-width: 991px) {
    width: 90%;
    height: 1px;
    margin-block: 10px;
  }
`;

export const DivImages = styled.div`
  max-width: 620px;
  width: 100%;

  img {
    width: 100%;
    margin-block: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    max-width: 450px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    max-width: 550px;
  }
`;
