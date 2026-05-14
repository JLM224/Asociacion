import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"
import Actividades from "../componentes/nuestraLabor/Actividades"
import { useEffect } from "react"

const NuestraLabor = () => {
useEffect(() => {
  cambiarTituloPagina("Nuestra Labor")
},[])
  return (
    <div>
      <Actividades />
    </div>
  )
}

export default NuestraLabor