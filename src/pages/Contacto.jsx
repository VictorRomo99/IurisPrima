import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const WA_NUMBER = '51928047718'

const OPCIONES = [
  'Necesito asesoría desde cero',
  'Ya tengo avances y necesito ayuda',
  'Solo necesito corrección y Turnitin',
  'Quiero saber el precio',
  'Tengo una consulta específica',
]

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [universidad, setUniversidad] = useState('')
  const [opcion, setOpcion] = useState(OPCIONES[0])
  const [mensaje, setMensaje] = useState('')
  useReveal()

  const handleWA = () => {
    const msg = encodeURIComponent(
      `Hola, me comunico desde la web de Iuris Prima.\n\n` +
      `Nombre: ${nombre || 'No especificado'}\n` +
      `Universidad: ${universidad || 'No especificado'}\n` +
      `Nivel: Pregrado\n` +
      `Motivo: ${opcion}\n` +
      `${mensaje ? `\nMensaje adicional:\n"${mensaje}"` : ''}\n\n` +
      `¿Pueden ayudarme?`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    setNombre('')
    setUniversidad('')
    setMensaje('')
    setOpcion(OPCIONES[0])
  }

  const openWA = () => {
    const msg = encodeURIComponent('Hola, quisiera información sobre asesoría de tesis de derecho.')
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <main className="bg-[#0A0C12] min-h-screen pt-24 relative z-[1]">

      {/* HERO */}
      <section className="px-15 py-20 border-b border-[#F0C060]/10">
        <div className="max-w-[1160px] mx-auto">
          <p className="reveal text-[0.62rem] tracking-[6px] uppercase text-[#F0C060]/60 mb-5">
            Hablemos
          </p>
          <div className="grid grid-cols-2 gap-20 items-end">
            <h1 className="reveal font-serif font-bold text-white leading-[1.05]"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>
              Tu consulta es{' '}
              <em className="italic text-[#F0C060]">completamente gratuita</em>
            </h1>
            <p className="reveal text-[0.95rem] font-light leading-[2] text-white/55">
              Cuéntanos tu situación y te respondemos por WhatsApp con un diagnóstico claro y sin compromiso. Sin formularios largos, sin esperas, sin rodeos.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="px-15 py-24">
        <div className="grid gap-20 max-w-[1160px] mx-auto items-start"
          style={{ gridTemplateColumns: '1fr 1.4fr' }}>

          {/* INFO LATERAL */}
          <div>

            {/* WhatsApp */}
            <div className="reveal mb-12 pb-12 border-b border-[#F0C060]/10">
              <svg className="mb-4 text-[#F0C060]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.58 3.58 2 2 0 0 1 3.54 1.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z"/>
              </svg>
              <h3 className="font-serif text-lg font-bold text-white mb-3">WhatsApp directo</h3>
              <p className="text-[0.85rem] font-light leading-[1.8] text-white/55 mb-4">
                Respondemos en minutos durante horario de atención. Tu mensaje llega directo al asesor a cargo.
              </p>
              <button
                onClick={openWA}
                className="px-7 py-3 bg-[#25d366] text-white text-[0.72rem] font-medium tracking-[3px] uppercase border-none cursor-pointer transition-all duration-200 hover:bg-[#20ba5a] hover:-translate-y-0.5"
              >
                Abrir WhatsApp
              </button>
            </div>

            {/* Facebook */}
<div className="reveal mb-12 pb-12 border-b border-[#F0C060]/10">
  <a 
    href="https://www.facebook.com/profile.php?id=61590127362109" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block mb-4 text-[#F0C060] hover:text-[#F0C060]/70 transition-colors duration-200"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  </a>
  <h3 className="font-serif text-lg font-bold text-white mb-3">Facebook</h3>
  <p className="text-[0.85rem] font-light leading-[1.8] text-white/55">
    Síguenos en Facebook para ver testimonios, publicaciones y novedades de Iuris Prima.
  </p>
</div>

            {/* Ubicación */}
            <div className="reveal">
              <svg className="mb-4 text-[#F0C060]" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <h3 className="font-serif text-lg font-bold text-white mb-3">Ubicación</h3>
              <p className="text-[0.85rem] font-light leading-[1.8] text-white/55">
                Huancayo, Junín, Perú.<br />
                Atención presencial y virtual.
              </p>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="reveal bg-[#F0C060]/[0.03] border border-[#F0C060]/15 p-14">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Cuéntanos tu situación
            </h3>
            <p className="text-[0.82rem] font-light text-white/40 mb-10 leading-[1.7]">
              Completa los campos y te preparamos un mensaje listo para enviar por WhatsApp.
            </p>

            {/* Nombre + Universidad */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                  Tu nombre
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  placeholder="¿Cómo te llamamos?"
                  className="w-full bg-transparent border-0 border-b border-[#F0C060]/25 pb-3 text-[0.92rem] text-white/80 placeholder-white/25 outline-none focus:border-[#F0C060] transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                  Universidad
                </label>
                <input
                  type="text"
                  value={universidad}
                  onChange={e => setUniversidad(e.target.value)}
                  placeholder="¿En qué universidad?"
                  className="w-full bg-transparent border-0 border-b border-[#F0C060]/25 pb-3 text-[0.92rem] text-white/80 placeholder-white/25 outline-none focus:border-[#F0C060] transition-colors duration-200"
                />
              </div>
            </div>

            {/* Nivel */}
            <div className="mb-8">
              <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                Nivel de tesis
              </label>
              <p className="text-[0.92rem] text-white/80 border-b border-[#F0C060]/25 pb-3">
                Pregrado
              </p>
            </div>

            {/* Opciones */}
            <div className="mb-8">
              <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                ¿En qué podemos ayudarte?
              </label>
              <div className="flex flex-col gap-2.5">
                {OPCIONES.map((op, i) => (
                  <button
                    key={i}
                    onClick={() => setOpcion(op)}
                    className={`px-5 py-3 text-left text-[0.82rem] font-light border cursor-pointer transition-all duration-200 ${
                      opcion === op
                        ? 'bg-[#F0C060]/12 border-[#F0C060]/50 text-[#F0C060]'
                        : 'bg-transparent border-[#F0C060]/15 text-white/50 hover:border-[#F0C060]/30 hover:text-white/80'
                    }`}
                  >
                    {opcion === op ? '● ' : '○ '}{op}
                  </button>
                ))}
              </div>
            </div>

            {/* Mensaje */}
            <div className="mb-8">
              <label className="block text-[0.62rem] tracking-[4px] uppercase text-[#F0C060]/60 mb-3">
                Mensaje adicional (opcional)
              </label>
              <textarea
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
                placeholder="Cuéntanos más detalles si lo deseas..."
                rows={3}
                className="w-full bg-transparent border border-[#F0C060]/25 p-4 text-[0.92rem] text-white/80 placeholder-white/25 outline-none focus:border-[#F0C060] transition-colors duration-200 resize-y min-h-[100px]"
              />
            </div>

            <button
              onClick={handleWA}
              className="block w-full py-4 bg-[#25d366] text-white text-[0.78rem] font-medium tracking-[4px] uppercase border-none cursor-pointer transition-all duration-200 hover:bg-[#20ba5a] hover:-translate-y-0.5"
            >
              Enviar consulta por WhatsApp
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}