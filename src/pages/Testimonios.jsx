import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import testimonios from '../data/testimonios'

const WA_NUMBER = '51928047718'
const ESTRELLAS = [1, 2, 3, 4, 5]

export default function Testimonios() {
  const [nombre, setNombre] = useState('')
  const [carrera, setCarrera] = useState('')
  const [texto, setTexto] = useState('')
  const [estrellas, setEstrellas] = useState(5)
  const [hover, setHover] = useState(null)
  const [enviado, setEnviado] = useState(false)
  useReveal()

  const handleEnviar = () => {
    if (!nombre.trim() || !texto.trim()) return
    const msg = encodeURIComponent(
      `NUEVA RESEÑA — IURIS PRIMA\n\n` +
      `Nombre: ${nombre}\n` +
      `Carrera / Universidad: ${carrera || 'No especificado'}\n` +
      `Estrellas: ${'★'.repeat(estrellas)}${'☆'.repeat(5 - estrellas)}\n\n` +
      `"${texto}"\n\n` +
      `— Enviado desde iurisprimaoficial.com`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    setEnviado(true)
    setNombre('')
    setCarrera('')
    setTexto('')
    setEstrellas(5)
  }

  const isValid = nombre.trim() && texto.trim()

  return (
    <main className="bg-[#0A0C12] min-h-screen pt-24 relative z-[1]">

      {/* HERO */}
      <section className="px-15 py-20 border-b border-[#F0C060]/10">
        <div className="max-w-[1160px] mx-auto">
          <p className="reveal text-[0.62rem] tracking-[6px] uppercase text-[#F0C060]/60 mb-5">
            Lo que dicen nuestros clientes
          </p>
          <div className="grid grid-cols-2 gap-20 items-end">
            <h1 className="reveal font-serif font-bold text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>
              Resultados que{' '}
              <em className="italic text-[#F0C060]">hablan por sí solos</em>
            </h1>
            <p className="reveal text-[0.95rem] font-light leading-[2] text-white/55">
              Cada testimonio es real y verificado. Nuestros clientes nos escriben directamente y publicamos sus reseñas con su autorización. Su éxito es nuestra mejor carta de presentación.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="px-15 py-24">
        <div className="max-w-[1160px] mx-auto">

          {testimonios.length > 0 ? (
            <div className="grid gap-[2px] bg-white/[0.04] mb-20"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
              {testimonios.map((t) => (
                <div
                  key={t.id}
                  className="reveal bg-[#0A0C12] p-12 relative transition-colors duration-300 hover:bg-[#0f1219]"
                >
                  {/* COMILLA DECORATIVA */}
                  <div className="absolute top-5 left-8 font-serif text-[5rem] text-[#F0C060]/[0.06] leading-none select-none">
                    "
                  </div>

                  {/* ESTRELLAS */}
                  <div className="flex gap-0.5 mb-5 relative z-[1]">
                    {ESTRELLAS.map(s => (
                      <span key={s} className={`text-base ${
                        s <= t.estrellas ? 'text-[#F0C060]' : 'text-[#F0C060]/20'
                      }`}>★</span>
                    ))}
                  </div>

                  {/* TEXTO */}
                  <p className="font-serif text-[1.05rem] italic leading-[1.8] text-white/90 mb-7 relative z-[1]">
                    "{t.texto}"
                  </p>

                  {/* AUTOR */}
                  <div className="border-t border-[#F0C060]/10 pt-5">
                    <div className="text-[0.72rem] tracking-[3px] uppercase text-[#F0C060] mb-1">
                      {t.nombre}
                    </div>
                    <div className="text-[0.75rem] text-white/35">
                      {t.carrera} · {t.fecha}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="reveal text-center py-20 px-10 border border-[#F0C060]/10 mb-20">
              <svg className="mx-auto mb-5 text-[#F0C060]/30" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <p className="font-serif text-2xl italic text-white/35 mb-3">
                Los primeros testimonios están en camino.
              </p>
              <p className="text-[0.85rem] font-light text-white/25">
                ¿Ya trabajaste con nosotros? Sé el primero en dejar tu reseña.
              </p>
            </div>
          )}

          {/* FORMULARIO */}
          <div className="reveal bg-[#F0C060]/[0.03] border border-[#F0C060]/15 p-16">
            <p className="text-[0.62rem] tracking-[6px] uppercase text-[#F0C060]/60 mb-4">
              Deja tu reseña
            </p>
            <h2 className="font-serif font-bold text-white leading-[1.1] mb-2"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
              ¿Trabajaste con{' '}
              <em className="italic text-[#F0C060]">nosotros?</em>
            </h2>
            <p className="text-[0.85rem] font-light leading-[1.8] text-white/45 mb-12">
              Tu reseña nos ayuda a mejorar y a que otros estudiantes tomen la mejor decisión. La publicamos en nuestra página de Facebook con tu autorización.
            </p>

            {enviado ? (
              <div className="text-center py-12 px-10 border border-[#F0C060]/20 bg-[#F0C060]/[0.05]">
                <svg className="mx-auto mb-5 text-[#F0C060]" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <p className="font-serif text-2xl italic text-[#F0C060] mb-2">
                  ¡Gracias por tu reseña!
                </p>
                <p className="text-[0.85rem] font-light text-white/45 mb-6">
                  La recibimos por WhatsApp y la publicaremos en Facebook a la brevedad.
                </p>
                <button
                  onClick={() => setEnviado(false)}
                  className="bg-transparent border border-[#F0C060]/30 text-[#F0C060]/60 px-6 py-2.5 text-[0.72rem] tracking-[3px] uppercase cursor-pointer transition-colors duration-200 hover:border-[#F0C060] hover:text-[#F0C060]"
                >
                  Dejar otra reseña
                </button>
              </div>
            ) : (
              <div>
                {/* ESTRELLAS SELECTOR */}
                <div className="mb-10">
                  <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                    Tu calificación
                  </label>
                  <div className="flex gap-2">
                    {ESTRELLAS.map(s => (
                      <button
                        key={s}
                        onClick={() => setEstrellas(s)}
                        onMouseEnter={() => setHover(s)}
                        onMouseLeave={() => setHover(null)}
                        className={`bg-transparent border-none text-3xl cursor-pointer transition-all duration-200 ${
                          s <= (hover ?? estrellas)
                            ? 'text-[#F0C060] scale-110'
                            : 'text-[#F0C060]/20'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* CAMPOS */}
                <div className="grid grid-cols-2 gap-10 mb-10">
                  <div>
                    <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                      Tu nombre o seudónimo *
                    </label>
                    <input
                      type="text"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                      placeholder="Ej: M. García o María G."
                      className="w-full bg-transparent border-0 border-b border-[#F0C060]/25 pb-3 text-[0.92rem] text-white/80 placeholder-white/20 outline-none focus:border-[#F0C060] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                      Carrera y universidad
                    </label>
                    <input
                      type="text"
                      value={carrera}
                      onChange={e => setCarrera(e.target.value)}
                      placeholder="Ej: Derecho — UNCP"
                      className="w-full bg-transparent border-0 border-b border-[#F0C060]/25 pb-3 text-[0.92rem] text-white/80 placeholder-white/20 outline-none focus:border-[#F0C060] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                    Tu reseña *
                  </label>
                  <textarea
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                    placeholder="Cuéntanos cómo fue tu experiencia con Iuris Prima..."
                    rows={4}
                    className="w-full bg-transparent border border-[#F0C060]/25 p-4 text-[0.92rem] text-white/80 placeholder-white/20 outline-none focus:border-[#F0C060] transition-colors duration-200 resize-y min-h-[120px]"
                  />
                </div>

                <p className="text-[0.75rem] font-light text-white/30 mb-6 leading-[1.7]">
                  Al enviar, se abrirá WhatsApp con tu reseña lista para enviar. La publicaremos en Facebook con tu nombre o seudónimo elegido.
                </p>

                <button
                  onClick={handleEnviar}
                  disabled={!isValid}
                  className={`px-12 py-4 text-[0.78rem] font-medium tracking-[4px] uppercase border-none transition-all duration-200 ${
                    isValid
                      ? 'bg-[#25d366] text-white cursor-pointer hover:bg-[#20ba5a] hover:-translate-y-0.5'
                      : 'bg-[#F0C060]/10 text-white/25 cursor-not-allowed'
                  }`}
                >
                  Enviar reseña por WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}