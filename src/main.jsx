import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChangeThemeProvider, GlobalConfigProvider } from "./CreateContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalConfigProvider>
      <ChangeThemeProvider>
        <App />
      </ChangeThemeProvider>
    </GlobalConfigProvider>
  </StrictMode>
);
