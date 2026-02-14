import { Col, Container, Row } from "react-bootstrap"
import LinksContacto from "../mediosDeComunicacion/LinksContacto";
import qrImg from "/Qr.jpeg";
import Mapa from "../mediosDeComunicacion/Mapa";
import './Footer.css'

const FooterC = () => {
function obtenerAnioActual() {
  const fecha = new Date();
  return fecha.getFullYear();
}
  return (
    <>
    <Container fluid className="footer">
        <Row className="text-center g-2">
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center">
          <LinksContacto/>
          </Col>
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center">
          <img src={qrImg} alt="Código Qr" width={200} height={200} />
          </Col>
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center">
          <Mapa/>
          </Col>
        </Row>
        <Col xs="12" className="my-3 d-flex flex-column align-items-center justify-content-center">
        <p className="Adep">&copy; {obtenerAnioActual()} Asociacion Civil en defensa y proteccion de consumidores y usuarios </p>
        </Col>
    </Container>
    </>
  )
}

export default FooterC