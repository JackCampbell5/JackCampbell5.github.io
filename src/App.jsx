import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Photos from './pages/Photos'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="experience" element={<Experience />} />
            <Route path="photos" element={<Photos />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
