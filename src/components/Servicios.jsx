import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const ICONS = {
  '01': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
  '02': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="8" y1="8" x2="16" y2="8"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
      <line x1="8" y1="16" x2="12" y2="16"/>
    </svg>
  ),
  '03': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  '04': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
    </svg>
  ),
  '05': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  ),
  '06': (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
}

const SERVICIOS = [
  {
    num: '01',
    name: 'Elección del Tema',
    desc: 'Identificamos y delimitamos el tema jurídico ideal para tu perfil: viable, original y alineado a la línea de investigación de tu facultad.',
  },
  {
    num: '02',
    name: 'Plan y Estructura',
    desc: 'Diseñamos el esquema completo: problema, justificación, objetivos, hipótesis y estructura capitular conforme al reglamento de tu universidad.',
  },
  {
    num: '03',
    name: 'Marco Teórico y Jurídico',
    desc: 'Construimos el sustento teórico con doctrina, legislación vigente y jurisprudencia actualizada. Citación correcta en APA u otro formato exigido.',
  },
  {
    num: '04',
    name: 'Metodología de Investigación',
    desc: 'Definimos tipo, nivel y diseño de la investigación jurídica. Elaboramos instrumentos de recolección y análisis de resultados.',
  },
  {
    num: '05',
    name: 'Redacción y Corrección',
    desc: 'Redacción técnico-jurídica profesional de todos los capítulos. Corrección de estilo, coherencia argumentativa y formato institucional.',
  },
  {
    num: '06',
    name: 'Documento Final + Turnitin',
    desc: 'Documento completo, formateado y pulido. Incluye reporte oficial de Turnitin dentro del rango aceptado por tu universidad.',
  },
]

export default function Servicios() {
  const [active, setActive] = useState(0)
  useReveal()

  return (
    <section
      id="servicios"
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
          Cómo te ayudamos
        </p>
        <h2 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#fff',
          lineHeight: 1.15, marginBottom: '64px',
        }}>
          Asesoría integral{' '}
          <em style={{ fontStyle: 'italic', color: '#F0C060' }}>
            en cada etapa
          </em>
        </h2>

        {/* LAYOUT DOS COLUMNAS */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '72px',
          alignItems: 'start',
        }}>

          {/* LISTA ACORDEÓN */}
          <div>
            {SERVICIOS.map((s, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: '28px 0',
                  borderBottom: '0.5px solid rgba(255,255,255,0.07)',
                  borderTop: i === 0 ? '0.5px solid rgba(255,255,255,0.07)' : 'none',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div>
                    <div style={{
                      fontSize: '0.65rem', letterSpacing: '3px',
                      color: active === i ? '#F0C060' : 'rgba(240,192,96,0.35)',
                      marginBottom: '6px',
                      fontFamily: "'DM Sans', sans-serif",
                      transition: 'color 0.3s',
                    }}>
                      {s.num}
                    </div>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.2rem', fontWeight: 700,
                      color: active === i ? '#F0C060' : '#fff',
                      transition: 'color 0.3s',
                    }}>
                      {s.name}
                    </div>
                  </div>
                  <span style={{
                    fontSize: '1.2rem',
                    color: active === i ? '#F0C060' : 'rgba(240,192,96,0.3)',
                    transform: active === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'all 0.3s',
                    display: 'inline-block',
                    lineHeight: 1,
                    fontWeight: 300,
                  }}>
                    +
                  </span>
                </div>

                <div style={{
                  maxHeight: active === i ? '160px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.45s ease',
                  paddingTop: active === i ? '14px' : '0',
                }}>
                  <p style={{
                    fontSize: '0.85rem', fontWeight: 300,
                    lineHeight: 1.85,
                    color: 'rgba(232,228,220,0.55)',
                    margin: 0,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* PANEL VISUAL */}
          <div className="reveal" style={{
            position: 'sticky', top: '120px',
            background: 'rgba(255,255,255,0.03)',
            border: '0.5px solid rgba(255,255,255,0.08)',
            borderRadius: '4px',
            padding: '52px 44px',
            minHeight: '380px',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
            transition: 'all 0.35s ease',
          }}>
            <div style={{ marginBottom: '20px' }}>
              {ICONS[SERVICIOS[active].num]}
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '6rem', lineHeight: 1,
              color: 'rgba(240,192,96,0.07)',
              marginBottom: '20px',
              userSelect: 'none',
            }}>
              {SERVICIOS[active].num}
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.6rem', fontWeight: 700,
              fontStyle: 'italic', color: '#F0C060',
              marginBottom: '16px',
            }}>
              {SERVICIOS[active].name}
            </div>
            <div style={{
              fontSize: '0.88rem', fontWeight: 300,
              lineHeight: 1.85,
              color: 'rgba(232,228,220,0.55)',
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {SERVICIOS[active].desc}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}