import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RecBox from './RecBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RecBox />
  </StrictMode>,
)
