import styled from "styled-components";

export const ProjectsContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: var(--cor-fonte1);
  font-family: var(--fonte1);
  font-size: 30px;
  font-weight: 400;
  margin: 50px 0px 30px 0px;
  transition: all 0.5s ease-in-out;
`;

export const Conatiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 30px 40px;
`;

export const Cards = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecf1f6;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
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
    width: 30px;
    height: 30px;
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
    font-size: 20px;
    font-weight: 600;
    color: #333333;
  }

  p {
    width: 90%;
    font-family: arial;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 120px;
  height: 30px;
  bottom: 5px;
  right: 5px;
  background-color: #25e600;
  border-radius: 50px;
  border: 1px solid #07d100;
  cursor: pointer;
  color: #fff;
  font-family: arial;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #07d100;
  }
`;
