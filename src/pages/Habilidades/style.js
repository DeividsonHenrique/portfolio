import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 480px) {
    min-height: 100vh;
    padding-top: 50px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 100vh;
    padding-top: 100px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 100vh;
    padding-top: 100px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    height: 100vh;
    padding-top: 30px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    height: auto;
    padding-top: 30px;
  }

  @media (min-width: 1441px) {
    padding-top: 50px;
  }
`;

export const Details = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--cor-fonte1);
    font-family: var(--fonte1);
    font-size: 27px;
    font-weight: 400;
    transition: all 0.5s ease-in-out;
  }

  p {
    font-family: arial;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.5s ease-in-out;
  }

  @media (max-width: 480px) {
    text-align: center;
    height: auto;
    margin-top: 20px;

    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    text-align: center;
    height: auto;
    margin-top: 20px;

    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    text-align: center;
    height: auto;
    margin-top: 20px;

    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    text-align: center;
    height: auto;
    margin-top: 20px;

    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    text-align: center;
    height: auto;
    margin-top: 20px;

    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 12px;
    }
  }
    
  @media (min-width: 1441px) {
    padding-bottom: 50px;
  }
`;

export const CardSkills = styled.div`
  height: 590px;
  width: 415px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    height: auto;

    &:last-child {
      padding-bottom: 50px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 300px;
    height: auto;
    margin: 0 5px;
    padding-top: 20px;

    &:last-child {
      padding-bottom: 50px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 300px;
    height: auto;
    margin: 0 5px;
    padding-top: 20px;

    &:last-child {
      padding-bottom: 50px;
    }
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    width: 300px;
    height: auto;
    margin: 0 5px;
    padding-top: 20px;

    &:last-child {
      padding-bottom: 50px;
    }
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    width: 350px;
    height: auto;
    margin: 0 5px;
    padding-top: 20px;

    &:last-child {
      padding-bottom: 50px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) and (max-width: 930px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 931px) and (max-width: 991px) {
    align-items: start;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    align-items: start;
    padding-top: 20px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    align-items: start;
    padding-top: 20px;
  }

  
`;

export const Modulo = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    @media (min-width: 481px) and (max-width: 767px) {
      height: auto;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      height: auto;
    }

    @media (min-width: 992px) and (max-width: 1260px) {
      height: auto;
    }

    @media (min-width: 1261px) and (max-width: 1440px) {
      height: auto;
    }
  }

  span {
    &:nth-child(2) {
      width: 1px;
      height: 80px;
      background-color: black;
      border-radius: 50%;

      @media (max-width: 480px) {
        display: none;
      }

      @media (min-width: 768px) and (max-width: 1260px) {
        height: 50px;
        width: 2px;
      }

      @media (min-width: 1261px) and (max-width: 1440px) {
        height: 50px;
        width: 2px;
      }
    }

    &:nth-child(3) {
      width: 100%;
      height: 6px;
      background-color: aqua;
      display: block;
      border-radius: 5px;

      @media (max-width: 480px) {
        height: 5px;
        width: 95%;
      }
    }
  }
`;

export const ModuloTitle = styled.h1`
  color: #fff;
  font-size: 18px;
  font-family: var(--fonte1);
  margin-left: 5px;
  text-align: center;
  width: 100%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    font-size: 15px;
    margin-bottom: 10px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const ModuloBall = styled.span`
  width: 13px;
  height: 13px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 11px;
    height: 11px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 11px;
    height: 11px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    width: 11px;
    height: 11px;
  }
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;

  div {
    width: 85px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 80px;
    height: 80px;
  }

  p {
    font-family: var(--fonte1);
    font-size: 12px;
    font-weight: 500;
    color: white;
  }

  abbr {
    text-decoration: none;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
    width: 90%;

    div {
      width: 50px;
      height: 80px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      text-align: center;
      font-size: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 50px;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    margin-top: 20px;
    width: 90%;

    div {
      width: 50px;
      height: 80px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      text-align: center;
      font-size: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 50px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-top: 20px;
    width: 90%;

    div {
      width: 50px;
      height: 80px;
    }

    img {
      width: 50px;
      height: 50px;
    }

    p {
      text-align: center;
      font-size: 10px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 50px;
    }
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    margin-top: 20px;
    width: 100%;

    div {
      width: 60px;
      height: 90px;
    }

    img {
      width: 60px;
      height: 60px;
    }

    p {
      text-align: center;
      font-size: 10px;
    }
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    margin-top: 20px;
    width: 100%;

    div {
      width: 70px;
      height: 100px;
    }

    img {
      width: 65px;
      height: 65px;
    }

    p {
      text-align: center;
      font-size: 11px;
    }
  }
`;

export const Line = styled.div`
  height: 350px;
  width: 2px;
  background-color: #770000;
  margin-top: 150px;
  margin-inline: 1px;

  @media (max-width: 623px) {
    display: none;
  }

  @media (min-width: 624px) and (max-width: 767px) {
    height: 300px;

    &:nth-child(4) {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 930px) {
    height: 300px;
    margin-top: 100px;
    &:nth-child(4) {
      display: none;
    }
  }

  @media (min-width: 931px) and (max-width: 991px) {
    height: 300px;
    display: flex;
  }

  @media (min-width: 992px) and (max-width: 1440px) {
    height: 300px;
    margin-inline: 5px;
  }
`;
