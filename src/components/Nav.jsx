import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Testimonios', path: '/testimonios' },
  { label: 'Contacto', path: '/contacto' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <nav className={`fixed top-0 w-full z-[9999] flex justify-between items-center px-15 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0A0C12] border-b border-[#F0C060]/20'
          : 'py-5 bg-[#0A0C12]/90 backdrop-blur-md border-b border-[#F0C060]/10'
      }`}>

        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-none no-underline shrink-0">
  <span className="font-serif text-[1.9rem] font-bold text-[#F0C060] tracking-wide">
    Iuris<span className="text-white italic font-normal">Prima</span>
  </span>
  <span className="text-[0.5rem] tracking-[5px] uppercase text-[#F0C060]/40 mt-1">
    Asesoría · Huancayo, Perú
  </span>
</Link>

        {/* LINKS — desktop */}
        <ul className="hidden lg:flex gap-2 list-none m-0 p-0">
          {LINKS.map(item => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`inline-block px-4 py-2 text-[0.68rem] font-normal tracking-[2px] uppercase no-underline transition-all duration-200 rounded-sm ${
                    isActive
                      ? 'bg-[#F0C060]/10 text-[#F0C060] border border-[#F0C060]/40'
                      : 'text-white/50 border border-transparent hover:text-[#F0C060] hover:bg-[#F0C060]/08 hover:border-[#F0C060]/20'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA + HAMBURGER */}
        <div className="flex items-center gap-3">
          <Link
            to="/contacto"
            className="hidden lg:inline-block px-5 py-2.5 bg-[#F0C060] text-[#0A0C12] text-[0.68rem] font-medium tracking-[2px] uppercase no-underline rounded-sm transition-opacity duration-200 hover:opacity-85"
          >
            Consulta gratis
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          >
            <span className={`block h-px w-6 bg-[#F0C060] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px w-6 bg-[#F0C060] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#F0C060] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#0A0C12] z-[9998] flex flex-col justify-center items-center gap-4 transition-all duration-400 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {LINKS.map(item => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl font-serif font-bold no-underline transition-colors duration-200 ${
                isActive ? 'text-[#F0C060]' : 'text-white hover:text-[#F0C060]'
              }`}
            >
              {item.label}
            </Link>
          )
        })}
        <Link
          to="/contacto"
          className="mt-6 px-8 py-3.5 bg-[#F0C060] text-[#0A0C12] text-[0.75rem] font-medium tracking-[3px] uppercase no-underline rounded-sm"
        >
          Consulta gratis
        </Link>
      </div>
    </>
  )
}