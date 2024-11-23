import styled from "styled-components";

export const SkillsContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Details = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--cor-fonte1);
    font-family: var(--fonte1);
    font-size: 30px;
    font-weight: 400;
    transition: all 0.5s ease-in-out;
  }

  p {
    font-family: arial;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.5s ease-in-out;
  }
`;

export const CardSkills = styled.div`
  height: 600px;
  width: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Modulo = styled.div`
  height: 120px;
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
      width: 2px;
      height: 85px;
      background-color: black;
      border-radius: 50%;
    }

    &:nth-child(3) {
      width: 100%;
      height: 7px;
      background-color: aqua;
      display: block;
      border-radius: 5px;
    }
  }
`;

export const ModuloTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-family: var(--fonte1);
  margin-left: 5px;
  text-align: center;
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

export const ModuloBall = styled.span`
  width: 15px;
  height: 15px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;

export const Icons = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
    
    

    div{
        width: 100px;
        height: 125px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    img{
        width: 90px;
        height: 90px;
    }

    p{
        font-family: var(--fonte1)
        font-size: 15px;
        font-weight: 500;
        color: white;
    }

    abbr{
        text-decoration: none;
    }
`;

export const Line = styled.div`
  height: 400px;
  width: 2px;
  background-color: #770000;
  margin-top: 150px;
  margin-inline: 1px;
`;
