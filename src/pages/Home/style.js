import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 520px;

  @media (max-width: 480px) {
    margin-top: 30px;
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: var(--fonte1);
  font-size: 35px;
  font-weight: 600;
  width: 100%;
  color: var(--cor-fonte1);
  transition: all 0.5s ease-in-out;

  span {
    color: #ffd700;
    transition: all 0.5s ease-in;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    width: 80%;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--fonte1);
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  color: var(--cor-fonte1);
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 22px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

    br {
      display: none;
    }
  }
`;

export const Button = styled.button`
  background-color: var(--cor-fonte2);
  height: 45px;
  width: 220px;
  border-radius: 50px;
  text-align: center;
  font-family: arial;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px 0 var(--cor-fonte2);
  }

  @media (max-width: 480px) {
    height: 30px;
    width: 120px;
    font-size: 12px;
  }
`;

export const Perfil = styled.div`
  width: 350px;
  height: 350px;

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;
