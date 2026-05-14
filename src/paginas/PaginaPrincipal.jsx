import { cambiarTituloPagina } from '../funcionesAuxiliares/CambiarTituloPagina'
import TarjetasPrincipales from '../componentes/tarjetas/TarjetasPrincipales'
import Carrusel from '../componentes/carrusel/Carrusel'
import CardsCA from '../componentes/cards/CardsCA'
import { useEffect } from 'react'

const PaginaPrincipal = () => {
  useEffect(() => {
    cambiarTituloPagina("Pagina Principal");
  }, [])
  return (
    <>
      <div>
        <Carrusel />
      </div>      
      <div>
        <TarjetasPrincipales />
      </div>      
      <div>
        <CardsCA />
      </div>
    </>
  )
}

export default PaginaPrincipal