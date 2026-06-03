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
      className="relative z-[1] py-20 sm:py-28 lg:py-[120px] px-4 sm:px-8 lg:px-14"
      style={{
        background: 'rgba(240,192,96,0.025)',
        borderTop: '0.5px solid rgba(240,192,96,0.08)',
        borderBottom: '0.5px solid rgba(240,192,96,0.08)',
      }}
    >
      <div className="max-w-[1160px] mx-auto">

        {/* HEADER */}
        <p className="reveal text-[0.62rem] tracking-[4px] uppercase text-[#F0C060] mb-4 opacity-75">
          Lo que prometemos
        </p>
        <h2
          className="reveal font-serif font-bold text-white leading-[1.15] mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Nuestras{' '}
          <em className="italic text-[#F0C060]">garantías</em>
        </h2>

        {/* GRID */}
        <div
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          {GARANTIAS.map((g, i) => (
            <div
              key={i}
              className="bg-[#0A0C12] hover:bg-[#0f1219] transition-colors duration-300
                p-8 sm:p-9 lg:p-[44px_36px]"
            >
              <div className="mb-4 sm:mb-[18px]">{g.icon}</div>
              <h3 className="font-serif text-[1rem] sm:text-[1.05rem] font-bold text-white mb-2.5">
                {g.title}
              </h3>
              <p className="text-[0.8rem] sm:text-[0.83rem] font-light leading-[1.8] text-white/50 m-0">
                {g.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}