import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  

  @media (max-width: 480px) {
    height: 100vh;
    margin-top: 100px;
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
`;

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
`;

export const Line = styled.div`
  height: 350px;
  width: 2px;
  background-color: #770000;
  margin-top: 150px;
  margin-inline: 1px;

  @media (max-width: 480px) {
    display: none;
  }
`;
