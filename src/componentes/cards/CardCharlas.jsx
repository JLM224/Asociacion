import { Card, Col, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const CardCharlas = () => {
  return (
    <>
    <Container fluid>
        <Col md="5" className="d-flex justify-content-center">
        <Card className="cardC text-center">
              <Card.Img variant="top" src="/charla.png" />
              <NavLink to="/CharlasInstitucionales" className="boton mt-3">
                Programar Charlas
              </NavLink>
            </Card>
        </Col>
    </Container>
    </>
  )
}

export default CardCharlas