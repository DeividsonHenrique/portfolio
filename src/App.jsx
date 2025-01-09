import Router from "./Router.jsx";
import { UseTheme } from "./CreateContext.jsx";
import GotoTop from "./components/GotoTop.jsx";
import Background from "./components/Background.jsx";

function App() {
  const { theme, lightTheme, darkTheme, GlobalStyle } = UseTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <Background />
      <GlobalStyle theme={currentTheme} />
      <Router />
      <GotoTop />
    </>
  );
}

export default App;
