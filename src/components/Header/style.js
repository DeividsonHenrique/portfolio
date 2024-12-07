import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const HeaderContainer = styled.div`
  position: relative;
  height: 113px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e30606;
  transition: all 0.5s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    box-shadow: 0 2px 4px 0 #ff0000;
  }

  @media (max-width: 480px) {
    justify-content: space-around;
    height: 70px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    border: none;
    // background: linear-gradient(120deg, #181C27, #000000);

    &::after {
      display: none;
    }

    &.scrolled {
      background-color: #181c27;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    justify-content: space-around;
    height: 70px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    border: none;
    // background: linear-gradient(120deg, #181C27, #000000);

    &::after {
      display: none;
    }

    &.scrolled {
      background-color: #181c27;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: space-around;
    height: 70px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    border: none;
    // background: linear-gradient(120deg, #181C27, #000000);

    &::after {
      display: flex;
      width: 80%;
      left: 50%;
      transform: translateX(-50%);
    }

    &.scrolled {
      background-color: #181c27;
    }
  }
`;

export const Logo = styled.div`
  width: 45px;
  height: 45px;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 767px) {
    width: 35px;
    height: 35px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 40px;
    height: 40px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;
  margin: 0 13px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: center;
    transform: scaleX(0);
    background-color: #ffd700;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active {
    &::after {
      transform: scaleX(1);
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 15px;
  }
`;

export const Label = styled.label`
  background-color: #e30606;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  padding: 0px 7px;
  position: relative;
  width: 55px;
  height: 22px;
  margin-left: 10px;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    margin-left: 0px;
    width: 50px;
    height: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin-left: 0px;
    width: 50px;
    height: 20px;
  }
`;

export const Ball = styled.div`
  background-color: #fff;
  position: absolute;
  top: 1.49px;
  right: 2px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 767px) {
    height: 17px;
    width: 17px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 17px;
    width: 17px;
  }
`;

export const DarkMode = styled(MdDarkMode)`
  cursor: pointer;
  font-size: 25px;
  color: #e30606;
  margin-left: 2px;
  transition: all 0.3s ease;
`;

export const LightMode = styled(MdLightMode)`
  cursor: pointer;
  font-size: 25px;
  color: #ffffff;
  margin-right: 2px;
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  display: none;

  &:checked + ${Label} ${Ball} {
    transform: translateX(-32px);

    @media (max-width: 767px) {
      transform: translateX(-30px);
    }

    @media (min-width: 768px) and (max-width: 991px) {
      transform: translateX(-30px);
    }
  }

  &:checked + ${Label} {
    background-color: #000000;
  }

  &:checked + ${Label} ${DarkMode} {
    color: #ffffff;
  }

  &:checked + ${Label} ${LightMode} {
    color: #000000;
  }
`;

// menu hamburguer

export const MenuMobile = styled(IoIosMenu)`
  display: none;
  cursor: pointer;
  font-size: 30px;
  color: #e30606;
  margin-right: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 767px) {
    display: block;
  }
`;

export const ContainerMobile = styled.div`
  position: fixed;
  top: 71px;
  right: 0;
  width: 0%;
  height: 80vh;
  background: linear-gradient(120deg, #181c27, #000000);
  opacity: 0.9;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0 0 10px 0 #000000;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
  border-left: 2px solid lightblue;
  background-color: lightblue;

  &.open {
    width: 80%;
  }

  @media (max-width: 480px) {
    display: flex;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    display: flex;

    &.open {
      width: 70%;
    }
  }

  @media (min-width: 601px) and (max-width: 767px) {
    display: flex;

    &.open {
      width: 55%;
    }
  }
`;

export const LinksContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
  width: 100%;
`;

export const LinksMobile = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 42px;
  font-family: var(--fonte1);
  font-size: 17px;
  font-weight: bold;
  margin: 0 15px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;

  img {
    width: 20px;
    height: 20px;
    mix-blend-mode: lighten;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease;
    border-radius: 5px;
  }
`;

export const Line = styled.div`
  width: 70%;
  height: 1px;
  background: linear-gradient(120deg, #181c27, #4a148c, #181c27);
`;

export const CloseBtn = styled(IoIosClose)`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 40px;
  color: lightblue;
  margin-right: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: aqua;
  }
`;

export const Arrow = styled(IoIosArrowForward)`
  font-size: 20px;
`;
