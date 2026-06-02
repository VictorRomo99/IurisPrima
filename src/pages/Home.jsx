import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Proceso from '../components/Proceso'
import Garantias from '../components/Garantias'
import CTAFinal from '../components/CTAFinal'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Iuris Prima | Asesoría en Tesis de Derecho en Huancayo, Perú</title>
        <meta name="description" content="Asesoría especializada en tesis de pregrado en Derecho en Huancayo, Junín. Desde la elección del tema hasta el Turnitin final. +200 tesis aprobadas. Consulta gratuita." />
        <link rel="canonical" href="https://iurisprima.com/" />
      </Helmet>
      <main>
        <Hero />
        <Servicios />
        <Proceso />
        <Garantias />
        <CTAFinal />
      </main>
    </>
  )
}