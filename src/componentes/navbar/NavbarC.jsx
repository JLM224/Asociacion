import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavbarC = () => {
  return (
    <>
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container className='text-white'>
        <NavLink className="nav-link nav-logo" to="/">
        <img src="/logo.jpeg" alt="Logo" className="logo"/>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">Bienvenidos</NavLink>
            <NavLink to="/NuestraLabor" className="nav-link">Nuestra Labor</NavLink>
            <NavLink to="/SitiosDeInteres" className="nav-link">Sitios de Interés</NavLink>
            <NavLink to="/NuestrosCasos" className="nav-link">Nuestros Casos</NavLink>
            <NavLink to="/Contacto" className="nav-link">Contactános</NavLink>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarC