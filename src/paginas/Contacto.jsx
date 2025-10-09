import { Col, Container, Row } from "react-bootstrap"
import FormC from "../componentes/formularios/FormC"
import MapaAsociacion from "../componentes/mapa/MapaAsociacion"
import MediosDeComunicacion from "../componentes/mediosDeComunicacion/MediosDeComunicacion"

const Contacto = () => {
  return (
    <>
    <Container fluid>
        <Row className="justify-content-center">
            <Col xs={12} md={6}>
            <FormC/>
            </Col>
            <Col xs={12} md={6}>
            <MapaAsociacion/>
            </Col>
            <Col xs={3} className="d-flex justify-content-center">
            <MediosDeComunicacion/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Contacto