import { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";

const Error404 = () => {
useEffect(() => {
  cambiarTituloPagina("Error404")
},[])
  return (
    <Container className="text-center my-5">
      <h1 className="display-3">404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Button as={Link} to="/" variant="primary">
        Volver al inicio
      </Button>
    </Container>
  )
}

export default Error404