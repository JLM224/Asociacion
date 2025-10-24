import { Col, Container, Row } from "react-bootstrap"
import FormC from "../componentes/formularios/FormC"
import MediosDeComunicacion from "../componentes/mediosDeComunicacion/MediosDeComunicacion"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"
import { useEffect } from "react"

const Contacto = () => {
useEffect(() => {
  cambiarTituloPagina("Contacto")
},[])
  return (
    <>
    <Container fluid>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
            <FormC/>
            </Col>
            <Col xs={12} md={6}>            
        <h5 className="text-center">Dónde nos ubicamos?</h5>
            <MediosDeComunicacion/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contacto