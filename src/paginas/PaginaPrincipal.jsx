import { useEffect } from 'react'
import CardsCA from '../componentes/cards/CardsCA'
import Carrusel from '../componentes/carrusel/Carrusel'
import TarjetasPrincipales from '../componentes/tarjetas/TarjetasPrincipales'
import { cambiarTituloPagina } from '../funcionesAuxiliares/CambiarTituloPagina'

const PaginaPrincipal = () => {
  useEffect(() => {
    cambiarTituloPagina("Pagina Principal");
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <Carrusel />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="200">
        <TarjetasPrincipales />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="400">
        <CardsCA />
      </div>
    </>
  )
}

export default PaginaPrincipal