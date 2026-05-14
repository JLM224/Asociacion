import GaleriaImagenes from "../componentes/galeriaImagenes/GaleriaImagenes"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"
import { useEffect } from "react"

const NuestrosCasos = () => {
  useEffect(() => {
  cambiarTituloPagina("Nuestros Casos")
},[])
  return (
    <>
    <GaleriaImagenes/>
    </>
  )
}

export default NuestrosCasos