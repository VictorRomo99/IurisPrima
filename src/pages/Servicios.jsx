import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const SERVICIOS = [
  {
    num: '01',
    title: 'Elección del Tema',
    resumen: 'El punto de partida correcto define el éxito de toda la investigación.',
    detalle: [
      'Análisis de líneas de investigación de tu facultad',
      'Evaluación de viabilidad y originalidad del tema',
      'Delimitación espacial, temporal y temática',
      'Verificación de fuentes disponibles',
      'Propuesta de 3 opciones de tema para que elijas',
    ],
    tiempo: '3 a 5 días',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Plan y Estructura',
    resumen: 'El esquema que ordena toda tu investigación de inicio a fin.',
    detalle: [
      'Planteamiento del problema jurídico',
      'Justificación teórica, práctica y metodológica',
      'Objetivos generales y específicos',
      'Formulación de hipótesis',
      'Estructura capitular completa',
      'Adaptado al reglamento de tu universidad',
    ],
    tiempo: '5 a 7 días',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="8" y1="8" x2="16" y2="8"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
        <line x1="8" y1="16" x2="12" y2="16"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Marco Teórico y Jurídico',
    resumen: 'El sustento doctrinal y jurisprudencial que da solidez a tu tesis.',
    detalle: [
      'Antecedentes nacionales e internacionales',
      'Bases teóricas con doctrina jurídica actualizada',
      'Marco normativo: legislación vigente',
      'Jurisprudencia del Tribunal Constitucional y Poder Judicial',
      'Definición de términos jurídicos',
      'Citación en formato APA o el exigido por tu institución',
    ],
    tiempo: '10 a 20 días',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Metodología de Investigación',
    resumen: 'El diseño científico que valida tu investigación ante el jurado.',
    detalle: [
      'Tipo y nivel de investigación jurídica',
      'Diseño de investigación',
      'Población y muestra',
      'Técnicas e instrumentos de recolección de datos',
      'Método de análisis de resultados',
      'Matriz de consistencia',
    ],
    tiempo: '5 a 10 días',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Redacción y Corrección',
    resumen: 'Cada palabra de tu tesis con la precisión técnica que exige el Derecho.',
    detalle: [
      'Redacción técnico-jurídica profesional',
      'Corrección ortográfica y gramatical',
      'Coherencia y cohesión argumentativa',
      'Revisión de formato y estilo',
      'Ajuste a las normas APA vigentes',
      'Revisiones ilimitadas hasta aprobación',
    ],
    tiempo: 'Según avance',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Documento Final + Turnitin',
    resumen: 'El entregable completo, pulido y con el porcentaje de similitud aprobado.',
    detalle: [
      'Revisión integral de todo el documento',
      'Formateo final según reglamento institucional',
      'Generación del reporte oficial de Turnitin',
      'Garantía de similitud dentro del rango aceptado',
      'Entrega en formato Word y PDF',
      'Acompañamiento hasta la presentación oficial',
    ],
    tiempo: '3 a 5 días',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
]

export default function Servicios() {
  const [active, setActive] = useState(null)
  useReveal()

  return (
    <main className="bg-[#0A0C12] min-h-screen pt-24 relative z-[1]">

      {/* HERO */}
      <section className="px-15 py-20 border-b border-[#F0C060]/10">
        <div className="max-w-[1160px] mx-auto">
          <p className="reveal text-[0.62rem] tracking-[6px] uppercase text-[#F0C060]/60 mb-5">
            Nuestros servicios
          </p>
          <div className="grid grid-cols-2 gap-20 items-end">
            <h1 className="reveal font-serif font-bold text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>
              Todo lo que necesitas{' '}
              <em className="italic text-[#F0C060]">en un solo lugar</em>
            </h1>
            <p className="reveal text-[0.95rem] font-light leading-[2] text-white/55">
              Cubrimos cada etapa del proceso de elaboración de tu tesis de Derecho de pregrado, desde la elección del tema hasta el documento final con Turnitin. Sin saltos, sin vacíos, sin sorpresas.
            </p>
          </div>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="px-15 py-24">
        <div className="max-w-[1160px] mx-auto">
          <p className="reveal text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-4">
            Etapas del proceso
          </p>
          <h2 className="reveal font-serif font-bold text-white leading-[1.15] mb-16"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
            Asesoría integral{' '}
            <em className="italic text-[#F0C060]">en cada etapa</em>
          </h2>

          <div className="grid grid-cols-2 gap-[2px] bg-white/[0.04]">
            {SERVICIOS.map((s, i) => (
              <div
                key={i}
                className={`reveal cursor-pointer transition-all duration-300 p-12 ${
                  active === i
                    ? 'bg-[#0f1219] border-l-2 border-[#F0C060]'
                    : 'bg-[#0A0C12] border-l-2 border-transparent hover:bg-[#0f1219]'
                }`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <div className="text-[0.65rem] tracking-[3px] text-[#F0C060]/40 mb-3">
                      {s.num}
                    </div>
                    <div className="mb-3">{s.icon}</div>
                    <h3 className={`font-serif text-xl font-bold transition-colors duration-300 ${
                      active === i ? 'text-[#F0C060]' : 'text-white'
                    }`}>
                      {s.title}
                    </h3>
                  </div>
                  <span className={`text-xl transition-all duration-300 shrink-0 mt-2 ${
                    active === i ? 'text-[#F0C060] rotate-45' : 'text-[#F0C060]/30'
                  }`}>
                    +
                  </span>
                </div>

                <p className="text-[0.88rem] font-light leading-[1.8] text-white/55 mb-5">
                  {s.resumen}
                </p>

                <div className={`overflow-hidden transition-all duration-500 ${
                  active === i ? 'max-h-[400px]' : 'max-h-0'
                }`}>
                  <div className="border-t border-[#F0C060]/10 pt-5">
                    <ul className="flex flex-col gap-2.5">
                      {s.detalle.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 text-[0.85rem] font-light leading-[1.7] text-white/70">
                          <span className="text-[#F0C060] shrink-0 mt-0.5">—</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-[#F0C060]/10 flex items-center gap-2">
                      <span className="text-[0.62rem] tracking-[3px] uppercase text-[#F0C060]/50">
                        Tiempo estimado:
                      </span>
                      <span className="text-[0.82rem] text-[#F0C060] font-serif italic">
                        {s.tiempo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-15 pb-24 text-center">
        <p className="reveal text-[0.9rem] font-light text-white/45 mb-8">
          ¿Tienes dudas sobre qué servicio necesitas?
        </p>
        <Link
          to="/contacto"
          className="reveal inline-block px-12 py-5 bg-[#F0C060] text-[#0A0C12] text-[0.78rem] font-medium tracking-[4px] uppercase no-underline rounded-sm transition-opacity duration-200 hover:opacity-88"
        >
          Consulta gratuita →
        </Link>
      </section>

    </main>
  )
}