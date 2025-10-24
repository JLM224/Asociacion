import { useEffect } from "react"
import FormInstituciones from "../componentes/formularios/FormInstituciones"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"

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