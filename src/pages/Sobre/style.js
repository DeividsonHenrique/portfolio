import styled from "styled-components";

export const SobreContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  height: 566px;
  width: 345px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  height: 390px;
  color: var(--cor-fonte1);
  font-family: arial;
  font-size: 15px;
  line-height: 25px;
  text-align: start;
  transition: all 0.5s ease-in-out;
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

export const AnoTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  font-family: var(--fonte1);
  margin-left: 5px;
  transition: all 0.5s ease-in-out;
`;

export const Ball = styled.span`
  width: 15px;
  height: 15px;
  background-color: #fff;
  display: block;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
`;
