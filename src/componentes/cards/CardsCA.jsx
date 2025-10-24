import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './CardsCA.css';

const CardsCA = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center g-3">
          <Col md="5" className="d-flex justify-content-center">
            <Card className="cardC text-center">
              <Card.Img variant="top" src="/contacto.jpeg" />
              <NavLink to="/Contacto" className="boton mt-3">
                Contáctanos
              </NavLink>
            </Card>
          </Col>
          <Col md="5" className="d-flex justify-content-center">
            <Card className="cardC text-center">
              <Card.Img variant="top" src="/charla.png" />
              <NavLink to="/CharlasInstitucionales" className="boton mt-3">
                Programar Charlas
              </NavLink>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardsCA