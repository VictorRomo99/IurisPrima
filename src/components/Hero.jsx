import { Link } from 'react-router-dom'

export default function Hero() {
  const steps = [
    { num: '01', title: 'Consulta gratuita', desc: 'Evaluamos tu situación sin costo' },
    { num: '02', title: 'Plan personalizado', desc: 'Diseñamos el esquema completo' },
    { num: '03', title: 'Desarrollo y revisiones', desc: 'Redactamos y corregimos sin límite' },
    { num: '04', title: 'Entrega + Turnitin', desc: 'Documento final aprobado' },
  ]

  const stats = [
    { num: '+200', label: 'Tesis asesoradas' },
    { num: '98%', label: 'Tasa de aprobación' },
    { num: '24/7', label: 'Soporte WhatsApp' },
  ]

  return (
    <section className="min-h-screen flex items-center pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-8 lg:px-14 relative bg-[#0A0C12]">

      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full relative">

        {/* COLUMNA IZQUIERDA */}
        <div>
          <p className="text-[0.65rem] tracking-[4px] uppercase text-[#F0C060] opacity-80 mb-5">
            Asesoría en tesis jurídica · Huancayo, Perú
          </p>

          <h1
            className="font-serif font-bold text-white leading-[1.15] mb-2"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
          >
            Tu tesis de<br />
            Derecho,{' '}
            <em className="italic text-[#F0C060]">aprobada.</em>
          </h1>

          <p className="text-base font-light text-white/55 leading-[1.85] mt-5 mb-8 max-w-[440px]">
            Desde la elección del tema hasta el Turnitin final. Acompañamos cada etapa con rigor jurídico y compromiso real hasta que tu asesor diga sí.
          </p>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3 items-center">
            <Link
              to="/contacto"
              className="inline-block px-6 sm:px-7 py-3.5 bg-[#F0C060] text-[#0A0C12] text-[0.8rem] font-medium tracking-[1.5px] uppercase no-underline rounded-sm whitespace-nowrap transition-opacity duration-200 hover:opacity-90"
            >
              Empezar ahora →
            </Link>

            <Link
              to="/servicios"
              className="inline-block px-5 sm:px-6 py-3.5 bg-transparent text-white/75 text-[0.8rem] font-normal tracking-[1.5px] uppercase no-underline border border-white/25 rounded-sm whitespace-nowrap transition-all duration-200 hover:border-[#F0C060]/50 hover:text-[#F0C060]"
            >
              Ver servicios
            </Link>
          </div>

          {/* STATS */}
          <div className="flex gap-6 sm:gap-9 mt-10 pt-8 border-t border-white/[0.08]">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-serif text-[1.6rem] sm:text-[1.9rem] text-[#F0C060] font-bold leading-none">
                  {s.num}
                </div>
                <div className="text-[0.65rem] sm:text-[0.7rem] text-white/40 mt-1 tracking-[0.5px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA — CARD */}
        <div className="bg-white/[0.03] border border-white/[0.09] rounded-md p-6 sm:p-8 lg:p-10">
          <p className="text-[0.62rem] tracking-[3px] text-[#F0C060] uppercase mb-6 sm:mb-7">
            Cómo trabajamos
          </p>

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex gap-4 items-start ${i < steps.length - 1 ? 'mb-5 sm:mb-6' : ''}`}
            >
              <div className="w-8 h-8 border border-[#F0C060]/35 rounded-full flex items-center justify-center text-[0.65rem] text-[#F0C060] shrink-0">
                {step.num}
              </div>
              <div>
                <p className="m-0 mb-0.5 text-[0.85rem] sm:text-[0.9rem] font-medium text-white">
                  {step.title}
                </p>
                <p className="m-0 text-[0.75rem] sm:text-[0.78rem] text-white/45 font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-white/[0.07] flex items-center gap-2.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F0C060" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-[0.75rem] sm:text-[0.78rem] text-white/50 font-light">
              Revisiones ilimitadas hasta la aprobación
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}