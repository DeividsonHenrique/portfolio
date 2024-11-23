/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { HeaderContainer, Links } from "./components/Header/style";
import { Title, Subtitle } from "./pages/Home/style";
import { AnoTitle, Text, Ball } from "./pages/Sobre/style";

const ChangeTheme = createContext();

const lightTheme = {
  background: "linear-gradient(120deg, #E4E8ED 0%, #F5F7FA 100%)",
  color_link_header: "#191970",
  color_link_active: "#FF0000",
  color_line: "#FFFFFF",

  color_Title: "#000000",
  color_Title_Span: "#FF0000",

  color_Text: "#333333",
  color_Ano: "#4A148C",
  color_Ball: "#4A148C",
};

const darkTheme = {
  background: "linear-gradient(120deg, #500000 0%, #000000 100%)",
  color_link_header: "#C0C0C0",
  color_link_active: "#FFD700",
  color_line: "#e30606",

  color_Title: "#C0C0C0",
  color_Title_Span: "#FFD700",

  color_Text: "#C0C0C0",
  color_Ano: "#fff",
  color_Ball: "#fff",
};

const GlobalStyle = createGlobalStyle`
    #root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --cor-fonte1: #C0C0C0;
        --cor-fonte2: #FFD700;
        --cor-black: #000000;
        --cor-black2: #333333;

        --fonte1: 'Noto Sans', sans-serif;
}

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
}

body{
        margin: 0 auto;
        max-width: 1400px;
        width: 100%;
        height: 100vh;
        background: ${(props) => props.theme.background};
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    ${HeaderContainer}{
        border-color: ${(props) => props.theme.color_line};
    }

    ${Links}{
        color: ${(props) => props.theme.color_link_header};
          &::before,
          &::after {
            background: ${(props) => props.theme.color_link_active};
          }
    }

    ${Title}{
        color: ${(props) => props.theme.color_Title};
        span{
            color: ${(props) => props.theme.color_Title_Span};
        }
    }

    ${Subtitle}{
        color: ${(props) => props.theme.color_Title};
    }

    ${Text}{
        color: ${(props) => props.theme.color_Text};
    }

    ${AnoTitle}{
        color: ${(props) => props.theme.color_Ano};
    }

    ${Ball}{
        background-color: ${(props) => props.theme.color_Ball};
    }
  `;

export function ChangeThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [info, setInfo] = useState([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch("./data/info.json");
        const data = await response.json();
        setInfo(data.sobre);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, []);

  return (
    <ChangeTheme.Provider
      value={{ theme, toggleTheme, lightTheme, darkTheme, GlobalStyle, info }}
    >
      {children}
    </ChangeTheme.Provider>
  );
}

export const UseTheme = () => {
  return useContext(ChangeTheme);
};
