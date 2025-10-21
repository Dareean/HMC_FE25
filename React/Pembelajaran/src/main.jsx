import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tombol from './tombol.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Tombol />
  </StrictMode>,
)
