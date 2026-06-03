import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const WA_NUMBER = '51928047718'

export default function CTAFinal() {
  useReveal()

  const handleWA = () => {
    const msg = encodeURIComponent(
      'Hola, quisiera información sobre asesoría de tesis de derecho. ¿Pueden ayudarme?'
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <section
      id="cta"
      className="relative z-[1] text-center overflow-hidden
        py-20 sm:py-28 lg:py-[140px]
        px-4 sm:px-8 lg:px-14"
      style={{
        background: 'rgba(240,192,96,0.03)',
        borderTop: '0.5px solid rgba(240,192,96,0.1)',
      }}
    >
      {/* TEXTO DECORATIVO FONDO */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          font-serif italic pointer-events-none select-none whitespace-nowrap
          text-[20vw] sm:text-[18vw]"
        style={{ color: 'rgba(240,192,96,0.025)' }}
      >
        Iuris Prima
      </div>

      {/* CONTENIDO — z-index sobre el decorativo */}
      <div className="relative z-[1]">

        <p className="reveal text-[0.62rem] tracking-[4px] uppercase text-[#F0C060] mb-5 opacity-70">
          Da el primer paso
        </p>

        <h2
          className="reveal font-serif font-bold text-white leading-[1.15] mb-4"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
        >
          ¿Empezamos{' '}
          <em className="italic text-[#F0C060]">tu tesis hoy?</em>
        </h2>

        <p className="reveal text-[0.85rem] sm:text-[0.88rem] font-light text-white/45 mb-10 sm:mb-12 tracking-[0.5px]">
          Consulta inicial gratuita · Sin compromiso · Respuesta inmediata
        </p>

        {/* BOTONES */}
        <div className="reveal flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center flex-wrap">
          <button
            onClick={handleWA}
            className="inline-flex items-center gap-2.5
              px-8 sm:px-9 py-4
              bg-[#25d366] text-white
              text-[0.78rem] font-medium tracking-[2px] uppercase
              border-none cursor-pointer rounded-sm
              transition-all duration-200
              hover:opacity-90 hover:-translate-y-0.5
              w-full sm:w-auto justify-center"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.55 4.112 1.512 5.843L.036 23.543a.5.5 0 0 0 .612.612l5.7-1.476A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.524-5.223-1.433l-.374-.222-3.884 1.005 1.005-3.884-.222-.374A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Escribir por WhatsApp
          </button>

          <Link
            to="/contacto"
            className="inline-flex items-center justify-center
              px-7 sm:px-8 py-4
              bg-transparent text-white/70
              text-[0.78rem] font-normal tracking-[2px] uppercase
              no-underline rounded-sm
              border border-white/25
              transition-all duration-200
              hover:border-[#F0C060]/50 hover:text-[#F0C060]
              w-full sm:w-auto"
          >
            Ver formulario de contacto
          </Link>
        </div>

        <p className="text-[0.68rem] sm:text-[0.7rem] text-white/25 mt-10">
          Huancayo, Junín · Atención presencial y virtual
        </p>

      </div>
    </section>
  )
}