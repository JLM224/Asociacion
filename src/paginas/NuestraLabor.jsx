import { useEffect } from "react"
import Actividades from "../componentes/nuestraLabor/Actividades"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"

const NuestraLabor = () => {
useEffect(() => {
  cambiarTituloPagina("Nuestra Labor")
},[])
  return (
    <div data-aos="fade-right">
      <Actividades />
    </div>
  )
}

export default NuestraLabor