import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const PASOS = [
  {
    n: '01',
    title: 'Consulta gratuita',
    desc: 'Evaluamos tu situación, plazo y requerimientos de tu universidad sin costo.',
  },
  {
    n: '02',
    title: 'Plan de trabajo',
    desc: 'Cronograma personalizado con fases y presupuesto claro, sin sorpresas.',
  },
  {
    n: '03',
    title: 'Desarrollo',
    desc: 'Avanzamos capítulo a capítulo con tu aprobación en cada etapa.',
  },
  {
    n: '04',
    title: 'Corrección final',
    desc: 'Revisión integral: coherencia, formato y citación correcta.',
  },
  {
    n: '05',
    title: 'Entrega + Turnitin',
    desc: 'Documento final pulido con reporte oficial de similitud incluido.',
  },
]

export default function Proceso() {
  const [activeStep, setActiveStep] = useState(0)
  useReveal()

  return (
    <section
      id="proceso"
      style={{
        padding: '120px 60px',
        background: '#0A0C12',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

        {/* HEADER */}
        <p className="reveal" style={{
          fontSize: '0.62rem', letterSpacing: '4px',
          textTransform: 'uppercase', color: '#F0C060',
          marginBottom: '16px', opacity: 0.75,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Cómo trabajamos
        </p>
        <h2 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#fff',
          lineHeight: 1.15, marginBottom: '72px',
        }}>
          Un proceso{' '}
          <em style={{ fontStyle: 'italic', color: '#F0C060' }}>
            transparente
          </em>
        </h2>

        {/* PASOS */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0',
            position: 'relative',
          }}
        >
          {/* LÍNEA CONECTORA */}
          <div style={{
            position: 'absolute',
            top: '27px', left: '10%', right: '10%',
            height: '0.5px',
            background: 'linear-gradient(90deg, transparent, rgba(240,192,96,0.4), transparent)',
            pointerEvents: 'none',
          }} />

          {PASOS.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveStep(i)}
              style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', textAlign: 'center',
                padding: '0 16px',
                cursor: 'default',
              }}
            >
              <div style={{
                width: '54px', height: '54px',
                border: `0.5px solid ${activeStep === i ? '#F0C060' : 'rgba(240,192,96,0.3)'}`,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.72rem',
                letterSpacing: '1px',
                color: activeStep === i ? '#0A0C12' : '#F0C060',
                background: activeStep === i ? '#F0C060' : '#0A0C12',
                position: 'relative', zIndex: 1,
                marginBottom: '24px',
                transition: 'all 0.3s',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}>
                {p.n}
              </div>

              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem', fontWeight: 700,
                color: activeStep === i ? '#F0C060' : '#fff',
                marginBottom: '8px',
                transition: 'color 0.3s',
              }}>
                {p.title}
              </div>
              <div style={{
                fontSize: '0.75rem', fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(232,228,220,0.45)',
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>

        {/* BLOQUE TURNITIN */}
        <div
          className="reveal"
          style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '60px', alignItems: 'center',
            padding: '52px 56px',
            background: 'rgba(240,192,96,0.04)',
            border: '0.5px solid rgba(240,192,96,0.2)',
            borderRadius: '4px',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', right: '40px',
            top: '50%', transform: 'translateY(-50%)',
            fontFamily: "'Playfair Display', serif",
            fontSize: '7rem', color: 'rgba(240,192,96,0.04)',
            letterSpacing: '2px', pointerEvents: 'none',
            userSelect: 'none', fontStyle: 'italic',
          }}>
            Turnitin
          </div>

          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '5.5rem', lineHeight: 1,
              color: '#F0C060', fontWeight: 700,
            }}>
              {'<'}10
              <span style={{
                fontSize: '1.8rem',
                color: 'rgba(240,192,96,0.5)',
              }}>%</span>
            </div>
            <div style={{
              fontSize: '0.6rem', letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(240,192,96,0.5)',
              marginTop: '8px',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Índice de similitud
            </div>
          </div>

          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem', fontWeight: 700,
              color: '#fff', marginBottom: '12px',
            }}>
              Reporte Turnitin incluido en cada entrega
            </h4>
            <p style={{
              fontSize: '0.87rem', fontWeight: 300,
              lineHeight: 1.9, color: 'rgba(232,228,220,0.55)',
              margin: 0,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              Todos nuestros documentos se entregan con el reporte oficial de Turnitin.
              Trabajamos con citación correcta y contenido original para garantizar
              un índice dentro del rango exigido por tu institución, sin excepciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}