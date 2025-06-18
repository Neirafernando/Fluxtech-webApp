// src/app/page.jsx
import Contacto from '@/components/Contacto';
import Hero from '@/components/Hero';
import Proyectos from '@/components/Proyectos';
import Servicios from '@/components/Servicios';
import Footer from '@/components/Footer';
import Precios from '@/components/Precios';
export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Contacto />
      <Proyectos />
      <Precios/>
      <Footer />
    </main>
  );
}