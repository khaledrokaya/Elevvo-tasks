import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
// @ts-ignore
import Level2_3 from './Level2Task3/level2.3.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/level2.3" element={<Level2_3 />} />
      </Routes>
    </Router>
  </StrictMode>,
)
