import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 70px;

  @media (max-width: 480px) {
    height: auto;
    padding-top: 70px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-top: 100px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding-top: 100px;
  }

  @media (min-width: 992px) and (max-width: 1440px) {
    padding-top: 20px;
  }
`;

export const Title = styled.h1`
  color: var(--cor-fonte1);
  font-family: var(--fonte1);
  font-size: 27px;
  font-weight: 400;
  margin: 50px 0px 30px 0px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    font-size: 23px;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    font-size: 20px;
  }
`;

export const Conatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 25px 35px;
  margin: 0 auto;

  @media (min-width: 481px) and (max-width: 767px) {
    gap: 20px 5px;
    width: 95%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    gap: 20px 5px;
    width: 95%;
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    gap: 20px 15px;
    width: 95%;
  }

  @media (min-width: 1261px) and (max-width: 1440px) {
    gap: 20px 15px;
    width: 95%;
  }
`;

export const Cards = styled.div`
  width: 360px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecf1f6;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    width: 100%;
    height: 400px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 320px;
    height: 350px;
    margin: 0px 5px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 320px;
    height: 350px;
    margin: 0px 5px;
  }
`;

export const ImgContainer = styled.div`
  height: 260px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: hidden;
`;

export const ImgDiv = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ImgCard = styled.img`
  width: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

export const Logos = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  img {
    width: 25px;
    height: 25px;
    margin-inline: 5px;
  }
`;

export const InfoDiv = styled.div`
  position: relative;
  height: 130px;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    width: 90%;
    margin: 5px 0px 10px 0px;
    font-family: arial;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
  }

  p {
    width: 90%;
    font-family: arial;
    font-size: 11px;
    font-weight: 400;
    color: #333333;
  }


  @media (max-width: 480px) {
  
    h2{
      font-size: 15px;\
      text-align: center;
    }

    p{
      font-size: 10px;
      text-align: center;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
  
    h2{
      font-size: 15px;
      text-align: center;
    }

    p{
      font-size: 10px;
      text-align: center;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
  
    h2{
      font-size: 15px;
      text-align: center;
    }

    p{
      font-size: 10px;
      text-align: center;
    }
  }

  @media (min-width: 992px) and (max-width: 1260px) {
  
    h2{
      font-size: 15px;
      text-align: center;
    }

    p{
      font-size: 10px;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 110px;
  height: 25px;
  bottom: 5px;
  right: 5px;
  background-color: #25e600;
  border-radius: 50px;
  border: 1px solid #07d100;
  cursor: pointer;
  color: #fff;
  font-family: arial;
  font-size: 11px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #07d100;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    right: 50%;
    transform: translateX(50%);
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 10px;
    right: 50%;
    transform: translateX(50%);
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 10px;
    right: 50%;
    transform: translateX(50%);
  }

  @media (min-width: 992px) and (max-width: 1260px) {
    font-size: 10px;
    right: 50%;
    transform: translateX(50%);
  }
`;
