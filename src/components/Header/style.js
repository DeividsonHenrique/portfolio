import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";

export const HeaderContainer = styled.div`
  position: relative;
  height: 125px;
  max-width: 1400px;
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
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0 15px;
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

  @media (max-width: 480px) {
    display: none;
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
  width: 60px;
  margin-left: 10px;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    margin-left: 0px;
    width: 50px;
    height: 20px;
  }
`;

export const Ball = styled.div`
  background-color: #fff;
  position: absolute;
  top: 2px;
  right: 2px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 480px) {
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
    transform: translateX(-35px);

    @media (max-width: 480px) {
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
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const ContainerMobile = styled.div`
  position: fixed;
  top: 85px;
  right: 0;
  width: 0%;
  height: 80vh;
  background: linear-gradient(120deg, #181c27, #000000);
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 #000000;
  z-index: 1;
  transition: width 0.3s ease;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const LinksContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
`;

export const LinksMobile = styled(Link)`
  font-family: var(--fonte1);
  font-size: 20px;
  font-weight: bold;
  margin: 0 15px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: #ffd700;
  }
`;
