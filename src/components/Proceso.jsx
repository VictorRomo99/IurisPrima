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
      className="bg-[#0A0C12] relative z-[1] py-20 sm:py-28 lg:py-[120px] px-4 sm:px-8 lg:px-14"
    >
      <div className="max-w-[1160px] mx-auto">

        {/* HEADER */}
        <p className="reveal text-[0.62rem] tracking-[4px] uppercase text-[#F0C060] mb-4 opacity-75">
          Cómo trabajamos
        </p>
        <h2
          className="reveal font-serif font-bold text-white leading-[1.15] mb-14 sm:mb-16 lg:mb-[72px]"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Un proceso{' '}
          <em className="italic text-[#F0C060]">transparente</em>
        </h2>

        {/* PASOS — mobile: lista vertical / desktop: fila horizontal */}
        <div className="reveal">

          {/* MÓVIL y TABLET: lista vertical con línea lateral */}
          <div className="flex flex-col gap-0 lg:hidden">
            {PASOS.map((p, i) => (
              <div key={i} className="flex gap-5 items-start">
                {/* Indicador vertical */}
                <div className="flex flex-col items-center shrink-0">
                  <div
                    onClick={() => setActiveStep(i)}
                    className={`w-11 h-11 rounded-full border flex items-center justify-center
                      text-[0.7rem] tracking-[1px] font-medium transition-all duration-300 cursor-pointer
                      ${activeStep === i
                        ? 'bg-[#F0C060] border-[#F0C060] text-[#0A0C12]'
                        : 'bg-[#0A0C12] border-[#F0C060]/30 text-[#F0C060]'
                      }`}
                  >
                    {p.n}
                  </div>
                  {i < PASOS.length - 1 && (
                    <div className="w-px flex-1 min-h-[32px] bg-[#F0C060]/15 my-1" />
                  )}
                </div>

                {/* Texto */}
                <div className="pb-7">
                  <div
                    className={`font-serif text-[0.95rem] font-bold mb-1.5 transition-colors duration-300
                      ${activeStep === i ? 'text-[#F0C060]' : 'text-white'}`}
                  >
                    {p.title}
                  </div>
                  <div className="text-[0.78rem] font-light leading-[1.75] text-white/45">
                    {p.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP: fila horizontal con línea conectora */}
          <div className="hidden lg:grid grid-cols-5 gap-0 relative">
            {/* Línea conectora */}
            <div className="absolute top-[27px] left-[10%] right-[10%] h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(240,192,96,0.4), transparent)' }}
            />

            {PASOS.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveStep(i)}
                className="flex flex-col items-center text-center px-4 cursor-default"
              >
                <div className={`w-[54px] h-[54px] rounded-full border relative z-[1] mb-6
                  flex items-center justify-center text-[0.72rem] tracking-[1px] font-medium
                  transition-all duration-300
                  ${activeStep === i
                    ? 'bg-[#F0C060] border-[#F0C060] text-[#0A0C12]'
                    : 'bg-[#0A0C12] border-[#F0C060]/30 text-[#F0C060]'
                  }`}
                >
                  {p.n}
                </div>
                <div className={`font-serif text-[0.9rem] font-bold mb-2 transition-colors duration-300
                  ${activeStep === i ? 'text-[#F0C060]' : 'text-white'}`}
                >
                  {p.title}
                </div>
                <div className="text-[0.75rem] font-light leading-[1.75] text-white/45">
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOQUE TURNITIN */}
        <div
          className="reveal mt-16 sm:mt-20 lg:mt-[80px] relative overflow-hidden rounded-sm
            border border-[#F0C060]/20 bg-[#F0C060]/[0.04]
            p-8 sm:p-10 lg:p-[52px_56px]
            grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 sm:gap-10 lg:gap-[60px] items-center"
        >
          {/* Texto decorativo fondo */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 font-serif text-[5rem] sm:text-[7rem]
            text-[#F0C060]/[0.04] pointer-events-none select-none italic leading-none hidden sm:block">
            Turnitin
          </div>

          {/* Número grande */}
          <div className="relative z-[1]">
            <div className="font-serif text-[4rem] sm:text-[5.5rem] leading-none text-[#F0C060] font-bold">
              {'<'}10
              <span className="text-[1.4rem] sm:text-[1.8rem] text-[#F0C060]/50">%</span>
            </div>
            <div className="text-[0.6rem] tracking-[3px] uppercase text-[#F0C060]/50 mt-2">
              Índice de similitud
            </div>
          </div>

          {/* Texto */}
          <div className="relative z-[1]">
            <h4 className="font-serif text-[1.2rem] sm:text-[1.5rem] font-bold text-white mb-3">
              Reporte Turnitin incluido en cada entrega
            </h4>
            <p className="text-[0.82rem] sm:text-[0.87rem] font-light leading-[1.9] text-white/55 m-0">
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