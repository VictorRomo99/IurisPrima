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
      className="bg-[#0A0C12] relative z-[1] py-20 sm:py-28 lg:py-[120px] px-4 sm:px-8 lg:px-14"
    >
      <div className="max-w-[1160px] mx-auto">

        {/* HEADER */}
        <p className="reveal text-[0.62rem] tracking-[4px] uppercase text-[#F0C060] mb-4 opacity-75">
          Cómo te ayudamos
        </p>
        <h2 className="reveal font-serif font-bold text-white leading-[1.15] mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Asesoría integral{' '}
          <em className="italic text-[#F0C060]">en cada etapa</em>
        </h2>

        {/* LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-[72px] items-start">

          {/* LISTA ACORDEÓN */}
          <div>
            {SERVICIOS.map((s, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`py-6 sm:py-7 cursor-pointer border-b border-white/[0.07]
                  ${i === 0 ? 'border-t border-white/[0.07]' : ''}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className={`text-[0.65rem] tracking-[3px] mb-1.5 transition-colors duration-300
                      ${active === i ? 'text-[#F0C060]' : 'text-[#F0C060]/35'}`}>
                      {s.num}
                    </div>
                    <div className={`font-serif text-[1.05rem] sm:text-[1.2rem] font-bold transition-colors duration-300
                      ${active === i ? 'text-[#F0C060]' : 'text-white'}`}>
                      {s.name}
                    </div>
                  </div>
                  <span className={`text-xl font-light leading-none inline-block transition-all duration-300
                    ${active === i ? 'rotate-45 text-[#F0C060]' : 'rotate-0 text-[#F0C060]/30'}`}>
                    +
                  </span>
                </div>

                <div className={`overflow-hidden transition-all duration-[450ms] ease-in-out
                  ${active === i ? 'max-h-[160px] pt-3.5' : 'max-h-0 pt-0'}`}>
                  <p className="text-[0.82rem] sm:text-[0.85rem] font-light leading-[1.85] text-white/55 m-0">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* PANEL VISUAL — sticky solo en desktop, oculto en móvil */}
          <div
            className="reveal hidden lg:flex flex-col justify-center
              sticky top-[120px]
              bg-white/[0.03] border border-white/[0.08] rounded-sm
              p-10 min-h-[380px]
              transition-all duration-350"
          >
            <div className="mb-5">
              {ICONS[SERVICIOS[active].num]}
            </div>
            <div className="font-serif text-[6rem] leading-none text-[#F0C060]/[0.07] mb-5 select-none">
              {SERVICIOS[active].num}
            </div>
            <div className="font-serif text-[1.4rem] sm:text-[1.6rem] font-bold italic text-[#F0C060] mb-4">
              {SERVICIOS[active].name}
            </div>
            <div className="text-[0.85rem] sm:text-[0.88rem] font-light leading-[1.85] text-white/55">
              {SERVICIOS[active].desc}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}