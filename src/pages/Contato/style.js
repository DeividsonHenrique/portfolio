import styled from "styled-components";

export const DivContatos = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Title = styled.h1`
  color: var(--cor-fonte1);
  font-family: var(--fonte1);
  font-size: 30px;
  font-weight: 400;
  margin-top: 50px;
  transition: all 0.5s ease-in-out;


  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const DivCards = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  

  @media (max-width: 480px) {
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    margin-top: 20px;
  }
`;

export const Cards = styled.div`
  position: relative;
  height: 125px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &::before {
    position: absolute;
    content: "";
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, purple, transparent);
    transform: scaleX(0);
    transform-origin: center;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  img {
    height: 100px;
    width: 100px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }
  }

  p {
    color: #fff;
    font-family: var(--fonte1);
    font-size: 15px;
    font-weight: 500;
    margin-top: 5px;
    transition: all 0.5s ease-in-out;
  }


  @media (max-width: 480px) {
    width: 80px
    height: auto;  
    justify-content: space-evenly;
    align-items: center;

    &::before{
      bottom: 0;
    }

    img{
      height: 50px;
      width: 50px;
    }

    p{
      font-size: 12px;
    }
  }
`;
