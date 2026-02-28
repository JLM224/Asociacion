import { useEffect } from "react"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"


const NuestrosCasos = () => {
  useEffect(() => {
  cambiarTituloPagina("Nuestros Casos")
},[])
  return (
    <>Nuestros Casos</>
  )
}

export default NuestrosCasos