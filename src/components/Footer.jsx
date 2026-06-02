import { Link } from 'react-router-dom'

const WA_NUMBER = '51928047718'

const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Testimonios', path: '/testimonios' },
  { label: 'Contacto', path: '/contacto' },
]

const WA_PATH_1 = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z'
const WA_PATH_2 = 'M12 0C5.373 0 0 5.373 0 12c0 2.122.55 4.112 1.512 5.843L.036 23.543a.5.5 0 0 0 .612.612l5.7-1.476A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.524-5.223-1.433l-.374-.222-3.884 1.005 1.005-3.884-.222-.374A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z'
const FB_PATH = 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'

function IconWA({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={WA_PATH_1} />
      <path d={WA_PATH_2} />
    </svg>
  )
}

function IconFB({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d={FB_PATH} />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#07090F] border-t border-[#F0C060]/10 py-10 relative z-[1]">
      <div className="max-w-[1160px] mx-auto px-15">

        <div className="grid gap-12 mb-8" style={{ gridTemplateColumns: '2fr 1fr 1fr' }}>

          {/* MARCA */}
          <div>
            <Link to="/" className="inline-block mb-4 no-underline">
              <span className="font-serif text-xl font-bold text-[#F0C060]">
                Iuris<span className="text-white italic font-normal">Prima</span>
              </span>
            </Link>
            <p className="text-[0.78rem] font-light leading-[1.8] text-white/30 max-w-[260px] mb-5">
              Asesoría de tesis de derecho de pregrado. Huancayo, Perú.
            </p>

            {/* REDES — solo aquí */}
            <div className="flex gap-2">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 no-underline transition-opacity duration-200 hover:opacity-80"
                style={{ background: '#25d366', borderRadius: '4px' }}
              >
                <IconWA size={15} />
                <span className="text-white text-[0.68rem] font-medium tracking-[1px]">WhatsApp</span>
              </a>
               <a
                href="https://www.facebook.com/profile.php?id=61590127362109"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2 no-underline transition-opacity duration-200 hover:opacity-80"
                style={{ background: '#1877f2', borderRadius: '4px' }}
              >
                <IconFB size={15} />
                <span className="text-white text-[0.68rem] font-medium tracking-[1px]">Facebook</span>
              </a>
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h5 className="text-[0.58rem] tracking-[4px] uppercase text-[#F0C060]/45 mb-4 font-normal">
              Navegación
            </h5>
            {NAV_LINKS.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-[0.8rem] text-white/30 no-underline mb-2 font-light transition-colors duration-200 hover:text-[#F0C060]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CONTACTO */}
          <div>
            <h5 className="text-[0.58rem] tracking-[4px] uppercase text-[#F0C060]/45 mb-4 font-normal">
              Contacto
            </h5>
            <p className="text-[0.8rem] text-white/30 font-light mb-2">
              Huancayo, Junín, Perú
            </p>
            <p className="text-[0.8rem] text-white/30 font-light mb-2">
              Atención presencial y virtual
            </p>
            <p className="text-[0.8rem] text-white/30 font-light">
              Lunes a sábado · 9am – 8pm
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex justify-between items-center pt-6 border-t border-white/[0.05]">
          <span className="text-[0.68rem] text-white/18 tracking-[0.5px]">
            © 2025 Iuris Prima — Todos los derechos reservados
          </span>
          <span className="text-[0.68rem] text-white/18 tracking-[0.5px]">
            Asesoría jurídica académica · Huancayo
          </span>
        </div>

      </div>
    </footer>
  )
}