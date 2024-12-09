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

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    width: 90%;
    margin: 0 auto;
    justify-content: center;
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

  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 30px;
    width: 100%;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 30px;
    width: 100%;
    align-items: start;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    margin-top: 30px;
    width: 100%;
    align-items: start;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    margin-top: 30px;
    width: 100%;
    align-items: start;
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

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 20px;
    width: 100%;
    text-align: center;

    span {
      font-size: 21px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
    width: 100%;
    text-align: start;

    span {
      font-size: 21px;
    }
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    font-size: 22px;
    width: 100%;
    text-align: start;

    span {
      font-size: 22px;
    }
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    font-size: 22px;
    width: 100%;
    text-align: start;

    span {
      font-size: 22px;
    }
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

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 12px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

    br {
      display: block;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 12px;
    line-height: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: start;
    width: 100%;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: start;
    width: 100%;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    font-size: 14px;
    line-height: 22px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: start;
    width: 100%;
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

  @media (min-width: 481px) and (max-width: 767px) {
    height: 35px;
    width: 130px;
    font-size: 13px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 35px;
    width: 130px;
    font-size: 13px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    height: 40px;
    width: 150px;
    font-size: 15px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    height: 40px;
    width: 170px;
    font-size: 15px;
  }
`;

export const Perfil = styled.div`
  width: 350px;
  height: 350px;

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    width: 300px;
    height: 300px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    width: 300px;
    height: 300px;
  }
`;
