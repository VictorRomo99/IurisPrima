import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Servicios from './pages/Servicios'
import Testimonios from './pages/Testimonios'
import Contacto from './pages/Contacto'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}