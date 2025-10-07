import { Container } from "react-bootstrap"
import './Footer.css'


const FooterC = () => {
function obtenerAnioActual() {
  const fecha = new Date();
  return fecha.getFullYear();
}
  return (
    <>
    <Container fluid className="footer">
        <p>&copy; {obtenerAnioActual()} Asociacion Civil en defensa y proteccion de consumidores y usuario </p>
    </Container>
    </>
  )
}

export default FooterC