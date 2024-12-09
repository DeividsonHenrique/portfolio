import styled from "styled-components";

export const SobreContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: start;
    height: 100vh;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    min-height: 70vh;
    margin-top: 50px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    min-height: 70vh;
    margin-top: 50px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    min-height: 70vh;
    margin-top: 50px;
  }
`;

export const Title = styled.h1`
  color: var(--cor-fonte1);
  font-family: var(--fonte1);
  font-size: 27px;
  font-weight: 400;
  margin: 40px 0px 25px 0px;
  transition: all 0.5s ease-in-out;
  width: 100%;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 120px;
    margin-bottom: 40px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 20px;
    margin-top: 120px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
    margin-top: 120px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    font-size: 20px;
    margin-top: 50px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    font-size: 20px;
    margin-top: 50px;
  }
`;

export const Card = styled.div`
  height: 545px;
  width: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: row;
    align-items: start;
    height: auto;
    padding-bottom: 50px;

    &:last-child {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 350px;
    margin: 5px;
    padding-bottom: 0px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 350px;
    margin: 5px;
    padding-bottom: 0px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    height: 350px;
    margin: 5px;
    padding-bottom: 0px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    width: 95%px;
    margin: 5px;
    padding-bottom: 0px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Text = styled.p`
  height: 390px;
  color: var(--cor-fonte1);
  font-family: arial;
  font-size: 14px;
  line-height: 22px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
    text-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100%;
    margin-top: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100%;
    margin-top: 0px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: start;
    height: 100%;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: start;
    width: 95%;
    height: 100%;
    padding-top: 20px;
  }
`;

export const Ano = styled.div`
  height: 85px;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-bottom: -10px;

    @media (min-width: 481px) and (max-width: 991px) {
      flex-direction: column-reverse;
    }

    @media (min-width: 992px) and (max-width: 1260px) {
      flex-direction: column-reverse;
    }
  }

  span {
    &:nth-child(2) {
      width: 2px;
      height: 70px;
      background-color: aqua;
      display: block;
      border-radius: 50%;
      margin-left: 6px;

      @media (max-width: 480px) {
        display: none;
      }

      @media (min-width: 481px) and (max-width: 767px) {
        height: 50px;
        margin-left: 50%;
      }

      @media (min-width: 768px) and (max-width: 991px) {
        display: none;
      }

      @media (min-width: 992px) and (max-width: 1260px) {
        display: none;
      }

      @media (min-width: 1261px) and (max-width: 1440px) {
        height: 50px;
      }
    }

    &:nth-child(3) {
      width: 100%;
      height: 7px;
      background-color: aqua;
      display: block;
      border-radius: 5px;

      @media (max-width: 480px) {
        width: 5px;
        height: 100%;
        margin: 0px 5px 0px 5px;
      }

      @media (min-width: 481px) and (max-width: 991px) {
        height: 5px;
      }

      @media (min-width: 992px) and (max-width: 1260px) {
        height: 5px;
      }

      @media (min-width: 1261px) and (max-width: 1440px) {
        height: 5px;
      }
    }
  }

  @media (max-width: 480px) {
    height: 100%;
    display: flex;
  }
`;

export const AnoTitle = styled.h1`
  color: #fff;
  font-size: 18px;
  font-family: var(--fonte1);
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 15px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    text-align: center;
    font-size: 15px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding-bottom: 5px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding-bottom: 5px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    margin: 0px 0px 0px 5px;
    font-size: 15px;
  }
`;

export const Ball = styled.span`
  width: 14px;
  height: 14px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 10px;
    height: 10px;
    margin: 0px 0px 0px 2px;
  }
`;
