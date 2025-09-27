import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
// @ts-ignore
import Level2_3 from './Level2Task3/level2.3.jsx'
import Layout from './Level3Task6/components/layout/Layout.tsx'
import Overview from './Level3Task6/pages/Overview.tsx'
import Projects from './Level3Task6/pages/Projects.tsx'
import Profile from './Level3Task6/pages/Profile.tsx'
import Weather from './Level3Task7/weather.tsx'
// @ts-ignore
import Level2Task4 from './Level2Task4/myBlog.jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/level2.3" element={<Level2_3 />} />
        <Route path="/level2.4" element={<Level2Task4 />} />
        <Route path="/level3.6" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/level3.7" element={<Weather />} />
        <Route path="*" element={<h1 className="p-4">404 Not Found</h1>} />
      </Routes>
    </Router>
  </StrictMode>,
)
