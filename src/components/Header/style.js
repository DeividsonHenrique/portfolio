import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
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
`;

export const Ball = styled.div`
  background-color: #fff;
  position: absolute;
  top: 2px;
  right: 1px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
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
