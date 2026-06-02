import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const FAQS = [
  {
    q: '¿Hacen tesis de todas las especialidades del derecho?',
    a: 'Sí. Cubrimos Derecho Civil, Penal, Laboral, Constitucional, Administrativo, Comercial, Tributario y más. Si tienes una línea específica, consúltanos y lo evaluamos.',
  },
  {
    q: '¿Desde qué punto pueden ayudarme?',
    a: 'Desde cero si no tienes nada, o desde donde estés. Si ya tienes avances los revisamos y continuamos. Si solo necesitas corrección del documento completo, también.',
  },
  {
    q: '¿El reporte Turnitin está incluido en el precio?',
    a: 'Sí, siempre. Todos nuestros documentos finales se entregan con el reporte oficial de Turnitin sin costo adicional.',
  },
  {
    q: '¿Cuánto tiempo tarda el proceso?',
    a: 'Depende del estado de avance y el nivel de la tesis. Para una tesis de pregrado completa estimamos entre 2 y 4 meses. Para trabajos urgentes tenemos modalidad express.',
  },
  {
    q: '¿Puedo participar en el proceso de redacción?',
    a: 'Absolutamente, es lo ideal. Tú apruebas cada capítulo antes de continuar. La tesis refleja tu perspectiva con nuestro respaldo técnico y jurídico.',
  },
  {
    q: '¿Cómo garantizan la confidencialidad?',
    a: 'Tu información personal y el contenido de tu tesis nunca son compartidos con terceros. Todo el trabajo se maneja bajo estricta reserva profesional.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  useReveal()

  return (
    <section
      id="faq"
      style={{
        padding: '120px 80px',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* HEADER */}
        <p className="reveal" style={{
          fontSize: '0.62rem', letterSpacing: '6px',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.6)',
          marginBottom: '20px', textAlign: 'center',
        }}>
          Preguntas frecuentes
        </p>
        <h2 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 700, color: '#fff',
          lineHeight: 1.1, marginBottom: '60px',
          textAlign: 'center',
        }}>
          Lo que nos{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
            preguntan
          </em>
        </h2>

        {/* LISTA */}
        {FAQS.map((f, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              borderBottom: '1px solid rgba(201,168,76,0.1)',
              borderTop: i === 0 ? '1px solid rgba(201,168,76,0.1)' : 'none',
            }}
          >
            {/* PREGUNTA */}
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '28px 0',
                cursor: 'none', gap: '24px',
              }}
            >
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.05rem', fontWeight: 700,
                color: open === i ? 'var(--gold)' : '#fff',
                transition: 'color 0.3s',
              }}>
                {f.q}
              </span>
              <span style={{
                fontSize: '1.4rem',
                color: open === i ? 'var(--gold)' : 'rgba(201,168,76,0.4)',
                flexShrink: 0,
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}>
                +
              </span>
            </div>

            {/* RESPUESTA */}
            <div style={{
              maxHeight: open === i ? '200px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
            }}>
              <p style={{
                fontSize: '0.88rem', fontWeight: 300,
                lineHeight: 2, color: 'rgba(240,230,204,0.6)',
                paddingBottom: '28px',
              }}>
                {f.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}