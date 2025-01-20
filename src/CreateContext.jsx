/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { HeaderContainer, Links, MenuMobile } from "./components/Header/style";
import { Title, Subtitle } from "./pages/Home/style";
import { AnoTitle, Text, Ball } from "./pages/Sobre/style";
import {
  Icons,
  ModuloBall,
  ModuloTitle,
  Details,
} from "./pages/Habilidades/style";
import { Title as TitleProjetos } from "./pages/Projetos/style";
import { Title as TitleContato, Cards } from "./pages/Contato/style";
import { Title as TitleSobre } from "./pages/Sobre/style";
import { Title as TitleFooter } from "./components/Footer/Style";
import {
  Subtitle as SubtitleDetalhes,
  Text as TextDetalhes,
  LiList,
  Data,
  DivButtons,
} from "./components/DetalhesProjeto/Style";
import { Box } from "./components/GotoTop";
import { BackgroundC } from "./components/Background";

// Area de estilização

const ChangeTheme = createContext();

const lightTheme = {
  background: "#E4E8ED",
  color_link_header: "#191970",
  color_link_active: "#FF0000",
  color_line: "#FFFFFF",

  color_Title: "#000000",
  color_Title_Span: "#FF0000",

  color_Text: "#333333",
  color_Ano: "#4A148C",
  color_Ball: "#4A148C",

  color_Icons: "#333333",
  color_details: "#4A148C",

  color_arrow: "#fff",
  color_menu: "#4A148C",

  header_color: "#E4E8ED",

  strongText: "#000000",
  colorBtn: "#191970",
  btnHover: "#483a87",

  boxLightPurple: "0px 0px 5px 0px purple, 0px 0px 5px 0px purple",
  boxLightRed: "0px 0px 5px 0px red, 0px 0px 5px 0px red",
};

const darkTheme = {
  background: "#0c0000",
  color_link_header: "#C0C0C0",
  color_link_active: "#FFD700",
  color_line: "#e30606",

  color_Title: "#C0C0C0",
  color_Title_Span: "#FFD700",

  color_Text: "#C0C0C0",
  color_Ano: "#fff",
  color_Ball: "#fff",

  color_Icons: "#fff",
  color_details: "#C0C0C0",

  color_arrow: "#000000",
  color_menu: "#e30606",

  header_color: "#181c27",

  strongText: "#fff",
  colorBtn: "#770000",
  btnHover: "#e30606",

  boxLightPurple: "0px 0px 10px 0px purple, 0px 0px 10px 0px purple",
  boxLightRed: "0px 0px 10px 0px red, 0px 0px 10px 0px red",
};

const GlobalStyle = createGlobalStyle`
    #root {
        max-width: 1260px;
        min-height: 100vh;
        margin: 0 auto;
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

[data-rmiz-modal-overlay="visible"] {
  background-color: black;
}

body{
        position: relative; 
        margin: 0 auto;
        
        background: ${(props) => props.theme.background};
        background-attachment: fixed;
        transition: background 0.4s ease-in-out;
            

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme.color_Ano};
            border-radius: 20px;
            transition: background 0.6s ease-in-out;
        }

        &::-webkit-scrollbar-track {
            background: ${(props) => props.theme.background};
            transition: background 0.6s ease-in-out;
        }

        @media (max-width: 480px) {
            width: 85%;
            // marin-top: 80px;
            // min-height: 85vh;
        }
}        


    ${BackgroundC}{
      .purple{
        box-shadow: ${(props) => props.theme.boxLightPurple} }

      .red{
        box-shadow: ${(props) => props.theme.boxLightRed};
      }
    }
    
    
    ${HeaderContainer}{
        border-color: ${(props) => props.theme.color_line};

        @media (max-width: 991px) {
          &.scrolled{
            background-color: ${(props) => props.theme.header_color};
        }
        }
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

    ${Text}, ${TextDetalhes}, ${LiList}, ${Data}{
        color: ${(props) => props.theme.color_Text};

        strong{
            color: ${(props) => props.theme.strongText};
        }
    }

    ${AnoTitle}, ${ModuloTitle}, ${TitleSobre}, ${TitleFooter}, ${SubtitleDetalhes}{
        color: ${(props) => props.theme.color_Ano};
    }

    ${Ball}, ${ModuloBall}{
        background-color: ${(props) => props.theme.color_Ball};
    }

    ${Icons}, ${Cards}{
        p{
            color: ${(props) => props.theme.color_Icons};
        }
    }

    ${Details}{
        h1{
            color: ${(props) => props.theme.color_details};
        }
        p{
            color: ${(props) => props.theme.color_Text};
        }
    }

    ${TitleProjetos}, ${TitleContato}{
        color: ${(props) => props.theme.color_details};
    }

    ${Box}{
        background: ${(props) => props.theme.color_details};
        color: ${(props) => props.theme.color_arrow};
    }

    ${MenuMobile}{
        color: ${(props) => props.theme.color_menu};
    }

    ${DivButtons}{
        button{
            background-color: ${(props) => props.theme.colorBtn};

            &:hover{
                background-color: ${(props) => props.theme.btnHover};
            }
        }
    }
`;

export function ChangeThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ChangeTheme.Provider
      value={{ theme, toggleTheme, lightTheme, darkTheme, GlobalStyle }}
    >
      {children}
    </ChangeTheme.Provider>
  );
}

export const UseTheme = () => {
  return useContext(ChangeTheme);
};

// configs adicionais e API json --------------------------------------------------------------------

import dados from "/public/data/info.json";
import html5 from "/assets/Front-End/html5.svg";
import css3 from "/assets/Front-End/css3.svg";
import react from "/assets/Front-End/react.svg";
import bootstrap from "/assets/Front-End/bootstrap.svg";
import javascript from "/assets/Front-End/javascript.svg";

const GlobalConfig = createContext();

export const GlobalConfigProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [habilidades] = useState(dados.habilidades);
  const [projetos] = useState(dados.Projetos);
  const [contato] = useState(dados.Contato);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const logosFrontEnd = {
    html5: html5,
    css3: css3,
    react: react,
    bootstrap: bootstrap,
    javascript: javascript,
  };

  const handeleVerProjeto = (projeto) => {
    setProjetoSelecionado(projeto);
  };

  const handleVoltar = () => {
    setProjetoSelecionado(null);
  };

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch("/data/info.json");
        const data = await response.json();
        setInfo(data.sobre);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <GlobalConfig.Provider
      value={{
        info,
        habilidades,
        projetos,
        contato,
        logosFrontEnd,
        isOpen,
        handleToggle,
        handleClose,
        scrolled,
        projetoSelecionado,
        handeleVerProjeto,
        handleVoltar,
      }}
    >
      {children}
    </GlobalConfig.Provider>
  );
};

export const UseConfig = () => {
  return useContext(GlobalConfig);
};
