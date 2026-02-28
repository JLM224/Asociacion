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
        <Row className="text-center g-2 footer-1">
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800">
          <LinksContacto/>
          </Col>
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800">
          <img src={qrImg} alt="Código Qr" width={200} height={200} />
          </Col>
          <Col xs="12" md="4" className="d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800">
          <Mapa/>
          </Col>
        </Row>
        <Row>
        <Col xs="12" className="d-flex justify-content-center copyright"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800">
          <p className="copyright-text">
            &copy; {obtenerAnioActual()} 
            Asociacion Civil en defensa y proteccion de consumidores y usuarios
          </p>
        </Col>
        </Row>
    </Container>
    </>
  )
}

export default FooterC