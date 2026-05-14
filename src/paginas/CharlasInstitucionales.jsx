import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"
import FormInstituciones from "../componentes/formularios/FormInstituciones"
import { useEffect } from "react"

const CharlasInstitucionales = () => {
useEffect(() => {
  cambiarTituloPagina("Programar Charla")
},[])
  return (
    <>
    <FormInstituciones/>
    </>
  )
}

export default CharlasInstitucionales