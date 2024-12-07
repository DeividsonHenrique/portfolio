import styled from "styled-components";

export const DivContatos = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 100px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 100px;
  }
`;

export const Title = styled.h1`
  color: var(--cor-fonte1);
  font-family: var(--fonte1);
  font-size: 27px;
  font-weight: 400;
  margin-top: 50px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
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
    width: 90%;
    height: 50%;
    margin-top: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-wrap: wrap;
    width: 70%;
    height: 300px;
    margin-top: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-wrap: wrap;
    width: 70%;
    height: 300px;
    margin-top: 20px;
  }
`;

export const Cards = styled.div`
  position: relative;
  height: 105px;
  width: 85px;
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
    height: 90px;
    width: 90px;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }
  }

  p {
    color: #fff;
    font-family: var(--fonte1);
    font-size: 13px;
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

  @media (min-width: 481px) and (max-width: 767px) {
    width: 80px
    height: auto;  
    justify-content: space-around;
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

    @media (min-width: 768px) and (max-width: 991px) {
    width: 80px
    height: auto;  
    justify-content: space-around;
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
