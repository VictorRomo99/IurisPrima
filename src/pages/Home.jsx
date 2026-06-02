import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Proceso from '../components/Proceso'
import Garantias from '../components/Garantias'
import CTAFinal from '../components/CTAFinal'

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Proceso />
      <Garantias />
      <CTAFinal />
    </main>
  )
}