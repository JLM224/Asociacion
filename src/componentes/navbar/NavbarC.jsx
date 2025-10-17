import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BotonLogueo from '../botones/BotonLogueo';
import Swal from 'sweetalert2';
import './Navbar.css'

const NavbarC = () => {
const [usuario, setUsuario] = useState(null)

useEffect(() => {
  const token = sessionStorage.getItem("tokenGoogle")
    if (token) {
      try {
        const datosUsuario = jwtDecode(token);
        setUsuario(datosUsuario);
      } catch {
        sessionStorage.removeItem("tokenGoogle")
      }
    }
  }, [])

const cerrarSesion = () => {
    Swal.fire({
      icon: "question",
      title: "¿Quieres cerrar la sesión?",
      showCancelButton: true,
      confirmButtonText: "Sí!",
      cancelButtonText: "No",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        sessionStorage.removeItem("tokenGoogle");
        setUsuario(null);
        Swal.fire({
          icon: "success",
          title: "Sesión cerrada",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    })
  }

const iniciarSesion = (datosUsuario) => {
    setUsuario(datosUsuario)
  }
  return (
    <>
    <Navbar expand="lg" className="navbar">
      <Container className='text-white'>
        <NavLink className="nav-link" to="/">
        <img src="" alt="Logo"/>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">Bienvenidos</NavLink>
            <NavLink to="/NuestraLabor" className="nav-link">Nuestra Labor</NavLink>
            <NavLink to="/SitiosDeInteres" className="nav-link">Sitios de Interés</NavLink>
            <NavLink to="/Opina" className="nav-link">Opiná</NavLink>
            <NavLink to="/Contactanos" className="nav-link">Contactános</NavLink>
          </Nav>
          <Nav className="mx-auto">
            {usuario ? (
              <>
                <button
                  className="btn btn-outline-light"
                  onClick={cerrarSesion}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <BotonLogueo iniciarSesion={iniciarSesion} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarC