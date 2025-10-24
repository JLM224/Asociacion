import { useEffect } from 'react'
import CardsCA from '../componentes/cards/CardsCA'
import Carrusel from '../componentes/carrusel/Carrusel'
import TarjetasPrincipales from '../componentes/tarjetas/TarjetasPrincipales'
import { cambiarTituloPagina } from '../funcionesAuxiliares/CambiarTituloPagina'

const PaginaPrincipal = () => {
useEffect(() => {
  cambiarTituloPagina("Pagina Principal")
},[])
  return (
    <>
    <Carrusel/>
    <TarjetasPrincipales/>
    <CardsCA/>
    </>
  )
}

export default PaginaPrincipal