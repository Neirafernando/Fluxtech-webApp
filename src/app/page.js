// src/app/page.jsx
import Contacto from '@/components/Contacto';
import Hero from '@/components/Hero';
import Proyectos from '@/components/Proyectos';
import Servicios from '@/components/Servicios';
import MisionSection from '@/components/Mision';
import Footer from '@/components/Footer';
import Precios from '@/components/Precios';
import CarruselProyectos from '@/components/CarruselProyectos';
export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <MisionSection />
      <Contacto />
      <CarruselProyectos />
      <Precios/>
      <Footer />
    </main>
  );
}