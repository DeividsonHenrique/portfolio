import Router from './Router.jsx'
import { UseTheme } from './CreateContext.jsx'



function App() {
  const { theme, lightTheme, darkTheme, GlobalStyle } = UseTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <>
      <GlobalStyle theme={currentTheme} />
      <Router />
    </>
  )
}

export default App
