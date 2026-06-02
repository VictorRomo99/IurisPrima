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
      style={{
        position: 'relative', zIndex: 1,
        textAlign: 'center',
        padding: '140px 60px',
        background: 'rgba(240,192,96,0.03)',
        borderTop: '0.5px solid rgba(240,192,96,0.1)',
        overflow: 'hidden',
      }}
    >
      {/* TEXTO DECORATIVO FONDO */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Playfair Display', serif",
        fontSize: '18vw',
        fontStyle: 'italic',
        color: 'rgba(240,192,96,0.025)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        Iuris Prima
      </div>

      <p className="reveal" style={{
        fontSize: '0.62rem', letterSpacing: '4px',
        textTransform: 'uppercase', color: '#F0C060',
        marginBottom: '20px', opacity: 0.7,
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative', zIndex: 1,
      }}>
        Da el primer paso
      </p>

      <h2
        className="reveal"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.4rem, 5vw, 4.5rem)',
          fontWeight: 700, color: '#fff',
          position: 'relative', zIndex: 1,
          marginBottom: '16px', lineHeight: 1.15,
        }}
      >
        ¿Empezamos{' '}
        <em style={{ fontStyle: 'italic', color: '#F0C060' }}>
          tu tesis hoy?
        </em>
      </h2>

      <p
        className="reveal"
        style={{
          fontSize: '0.88rem', fontWeight: 300,
          color: 'rgba(232,228,220,0.45)',
          marginBottom: '48px',
          position: 'relative', zIndex: 1,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: '0.5px',
        }}
      >
        Consulta inicial gratuita · Sin compromiso · Respuesta inmediata
      </p>

      <div className="reveal" style={{
        display: 'flex', gap: '16px',
        justifyContent: 'center', flexWrap: 'wrap',
        position: 'relative', zIndex: 1,
      }}>
        <button
          onClick={handleWA}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '16px 36px',
            background: '#25d366', color: '#fff',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.78rem', fontWeight: 500,
            letterSpacing: '2px', textTransform: 'uppercase',
            border: 'none', cursor: 'pointer',
            borderRadius: '2px',
            transition: 'opacity 0.2s, transform 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.88'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.55 4.112 1.512 5.843L.036 23.543a.5.5 0 0 0 .612.612l5.7-1.476A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.524-5.223-1.433l-.374-.222-3.884 1.005 1.005-3.884-.222-.374A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          Escribir por WhatsApp
        </button>

        <Link
          to="/contacto"
          style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '15px 32px',
            background: 'transparent',
            border: '0.5px solid rgba(232,228,220,0.25)',
            color: 'rgba(232,228,220,0.7)',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.78rem', fontWeight: 400,
            letterSpacing: '2px', textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '2px',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(240,192,96,0.5)'
            e.currentTarget.style.color = '#F0C060'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(232,228,220,0.25)'
            e.currentTarget.style.color = 'rgba(232,228,220,0.7)'
          }}
        >
          Ver formulario de contacto
        </Link>
      </div>

      <p style={{
        fontSize: '0.7rem',
        color: 'rgba(232,228,220,0.25)',
        marginTop: '40px',
        position: 'relative', zIndex: 1,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        Huancayo, Junín · Atención presencial y virtual
      </p>
    </section>
  )
}