import { useReveal } from '../hooks/useReveal'

const GARANTIAS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    title: 'Originalidad garantizada',
    desc: 'Redactado desde cero con citación correcta. Entregamos el reporte Turnitin con cada documento final.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <polyline points="1 4 1 10 7 10"/>
        <path d="M3.51 15a9 9 0 1 0 .49-4.5"/>
      </svg>
    ),
    title: 'Revisiones ilimitadas',
    desc: 'Sin límite de correcciones hasta que tu asesor apruebe cada capítulo. Tu satisfacción es el estándar.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Confidencialidad total',
    desc: 'Tu información y contenido nunca son compartidos. Estricta reserva profesional en cada caso.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Cumplimiento de plazos',
    desc: 'Fechas de entrega por capítulo. Cronograma claro desde el primer día, sin retrasos.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Rigor jurídico',
    desc: 'Especialistas que dominan la doctrina, jurisprudencia y estándares académicos de las facultades peruanas.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.58 2 2 0 0 1 3.54 1.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
      </svg>
    ),
    title: 'Acompañamiento 24/7',
    desc: 'Canal directo con tu asesor por WhatsApp. Respondemos consultas y urgencias en tiempo real.',
  },
]

export default function Garantias() {
  useReveal()

  return (
    <section
      id="garantias"
      style={{
        padding: '120px 60px',
        background: 'rgba(240,192,96,0.025)',
        borderTop: '0.5px solid rgba(240,192,96,0.08)',
        borderBottom: '0.5px solid rgba(240,192,96,0.08)',
        position: 'relative', zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>

        <p className="reveal" style={{
          fontSize: '0.62rem', letterSpacing: '4px',
          textTransform: 'uppercase', color: '#F0C060',
          marginBottom: '16px', opacity: 0.75,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Lo que prometemos
        </p>
        <h2 className="reveal" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: 700, color: '#fff',
          lineHeight: 1.15, marginBottom: '64px',
        }}>
          Nuestras{' '}
          <em style={{ fontStyle: 'italic', color: '#F0C060' }}>garantías</em>
        </h2>

        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            background: 'rgba(255,255,255,0.04)',
          }}
        >
          {GARANTIAS.map((g, i) => (
            <div
              key={i}
              style={{
                background: '#0A0C12',
                padding: '44px 36px',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#0f1219'}
              onMouseLeave={e => e.currentTarget.style.background = '#0A0C12'}
            >
              <div style={{ marginBottom: '18px' }}>{g.icon}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.05rem', fontWeight: 700,
                color: '#fff', marginBottom: '10px',
              }}>
                {g.title}
              </h3>
              <p style={{
                fontSize: '0.83rem', fontWeight: 300,
                lineHeight: 1.8, color: 'rgba(232,228,220,0.5)',
                margin: 0,
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}