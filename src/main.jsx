import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Tailwind
import App from './App.jsx'
import { DreamProvider } from './context/DreamContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DreamProvider>
      <App />
    </DreamProvider>
  </StrictMode>,
)
