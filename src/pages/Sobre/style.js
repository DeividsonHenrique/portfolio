import styled from "styled-components";

export const SobreContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;


  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const Title = styled.h1`
  color: var(--cor-fonte1);
  font-family: var(--fonte1);
  font-size: 30px;
  font-weight: 400;
  margin: 50px 0px 30px 0px;
  transition: all 0.5s ease-in-out;
  width: 100%;
  text-align: center;
`;

export const Card = styled.div`
  height: 566px;
  width: 345px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;



  @media (max-width: 480px) {
    width: 100%;
    flex-direction: row;
    align-items: start;
    
    height: auto;
  }
`;

export const Text = styled.p`
  height: 390px;
  color: var(--cor-fonte1);
  font-family: arial;
  font-size: 15px;
  line-height: 25px;
  transition: all 0.5s ease-in-out;


  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 20px;
    text-align: start;
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
  }

  span {
    &:nth-child(2) {
      width: 2px;
      height: 75px;
      background-color: aqua;
      display: block;
      border-radius: 50%;
      margin-left: 7px;

      @media (max-width: 480px) {
        display: none;
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
    }
  }


  @media (max-width: 480px) {
    height: 80%;
    display: flex;
  }
`;

export const AnoTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-family: var(--fonte1);
  margin-left: 5px;
  transition: all 0.5s ease-in-out;


  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Ball = styled.span`
  width: 15px;
  height: 15px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;


  @media (max-width: 480px) {
    display: none;
  }
`;
