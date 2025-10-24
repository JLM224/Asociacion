import { useEffect } from "react"
import Actividades from "../componentes/nuestraLabor/Actividades"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"

const NuestraLabor = () => {
useEffect(() => {
  cambiarTituloPagina("Nuestra Labor")
},[])
  return (
    <>
    <Actividades/>
    </>
  )
}

export default NuestraLabor