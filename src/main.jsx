import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ChangeThemeProvider} from './CreateContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChangeThemeProvider>
    <App />
    </ChangeThemeProvider>
  </StrictMode>,
)
