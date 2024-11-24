import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeModeProvider } from './context/ThemeModeContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ThemeModeProvider>
        <App />
      </ThemeModeProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
