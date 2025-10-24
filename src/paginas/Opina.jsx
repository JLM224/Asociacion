import { useEffect } from "react"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"


const Opina = () => {
  useEffect(() => {
  cambiarTituloPagina("Opiniones")
},[])
  return (
    <>Opiná</>
  )
}

export default Opina