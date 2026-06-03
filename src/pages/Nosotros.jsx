import { Helmet } from 'react-helmet-async'
import { useReveal } from '../hooks/useReveal'

const VALORES = [
  {
    title: 'Rigor jurídico',
    desc: 'Cada tesis que elaboramos está respaldada por doctrina, jurisprudencia y legislación vigente, con el nivel de exigencia que demanda una facultad de Derecho.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: 'Compromiso real',
    desc: 'No desaparecemos después del primer pago. Estamos contigo en cada revisión, cada observación de tu asesor y cada corrección hasta la entrega final.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Confidencialidad',
    desc: 'Tu tesis es tuya. Nunca compartimos tu información ni tu trabajo con terceros. Operamos bajo estricta reserva profesional en cada caso.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: 'Enfoque en resultados',
    desc: 'Nuestro objetivo no es solo entregar un documento, sino que ese documento sea aprobado. Eso guía cada decisión que tomamos en el proceso.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
]

export default function Nosotros() {
  useReveal()

  return (
    <>
      <Helmet>
        <title>Nosotros | Iuris Prima – Asesores en Tesis de Derecho Huancayo</title>
        <meta name="description" content="Conoce al equipo de Iuris Prima. Asesores especializados en investigación jurídica con más de 200 tesis aprobadas en universidades de Huancayo y Junín." />
        <link rel="canonical" href="https://iurisprima.com/nosotros" />
      </Helmet>

      <main className="bg-[#0A0C12] min-h-screen pt-24 relative z-[1]">

        {/* HERO */}
        <section className="px-4 sm:px-8 lg:px-14 py-14 sm:py-20 border-b border-[#F0C060]/10">
          <div className="max-w-[1160px] mx-auto">
            <p className="reveal text-[0.62rem] tracking-[6px] uppercase text-[#F0C060]/60 mb-5">
              Quiénes somos
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

              <div>
                <h1
                  className="reveal font-serif font-bold text-white leading-[1.05] mb-7 sm:mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.8rem)' }}
                >
                  Nacimos para ayudar a los{' '}
                  <em className="italic text-[#F0C060]">profesionales del derecho</em>{' '}
                  a titularse.
                </h1>
                <p className="reveal text-[0.9rem] sm:text-[0.95rem] font-light leading-[2] text-white/60 mb-6">
                  Iuris Prima nació en Huancayo con una convicción clara: demasiados egresados de Derecho tienen el conocimiento, la vocación y el esfuerzo, pero se quedan sin titularse por no saber cómo traducir todo eso en una tesis que cumpla los estándares académicos.
                </p>
                <p className="reveal text-[0.9rem] sm:text-[0.95rem] font-light leading-[2] text-white/60">
                  Somos un equipo especializado en investigación jurídica que acompaña ese proceso desde la elección del tema hasta el documento final, con el rigor que exige una facultad de Derecho y el compromiso que merece cada estudiante.
                </p>
              </div>

              {/* Card estadística */}
              <div className="reveal bg-[#F0C060]/[0.05] border border-[#F0C060]/20 p-8 sm:p-12">
                <div className="font-serif text-[4rem] sm:text-[5rem] text-[#F0C060]/15 leading-none mb-5">
                  +200
                </div>
                <p className="font-serif text-xl sm:text-2xl italic text-[#F0C060] mb-4">
                  Tesis asesoradas que culminaron en titulación exitosa.
                </p>
                <p className="text-[0.82rem] font-light leading-[1.9] text-white/45">
                  Cada asesoría que hemos dado terminó con el objetivo cumplido: el título en mano del profesional.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="px-4 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24 border-b border-[#F0C060]/10">
          <div className="max-w-[1160px] mx-auto">
            <p className="reveal text-[0.62rem] tracking-[6px] uppercase text-[#F0C060]/60 mb-5">
              El equipo
            </p>
            <h2
              className="reveal font-serif font-bold text-white leading-[1.1] mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Respaldo <em className="italic text-[#F0C060]">profesional</em>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
              {[
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <polyline points="9 12 11 14 15 10"/>
                    </svg>
                  ),
                  title: 'Abogados colegiados',
                  desc: 'Nuestro equipo está conformado exclusivamente por abogados colegiados con formación académica de posgrado y experiencia en investigación jurídica.',
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                  title: 'Trabajo colaborativo',
                  desc: 'Cada tesis es revisada por más de un especialista. Nunca trabajas con una sola persona — trabajas con un equipo que revisa, discute y mejora cada entrega.',
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  title: 'Especialización local',
                  desc: 'Conocemos los reglamentos, estándares y exigencias específicas de las facultades de Derecho de Huancayo y la región Junín.',
                },
              ].map((item, i) => (
                <div key={i} className="reveal bg-[#0A0C12] p-8 sm:p-10 transition-colors duration-300 hover:bg-[#0f1219]">
                  <div className="mb-5">{item.icon}</div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[0.85rem] font-light leading-[1.8] text-white/55">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="px-4 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24">
          <div className="max-w-[1160px] mx-auto">
            <p className="reveal text-[0.62rem] tracking-[6px] uppercase text-[#F0C060]/60 mb-5">
              Lo que nos define
            </p>
            <h2
              className="reveal font-serif font-bold text-white leading-[1.1] mb-12 sm:mb-16"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            >
              Nuestros <em className="italic text-[#F0C060]">valores</em>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.04]">
              {VALORES.map((v, i) => (
                <div key={i} className="reveal bg-[#0A0C12] p-8 sm:p-10 lg:p-12 transition-colors duration-300 hover:bg-[#0f1219]">
                  <div className="mb-5">{v.icon}</div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 sm:mb-3.5">
                    {v.title}
                  </h3>
                  <p className="text-[0.85rem] sm:text-[0.88rem] font-light leading-[1.9] text-white/55">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}