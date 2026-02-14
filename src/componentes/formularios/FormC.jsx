import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
const service_id = import.meta.env.VITE_SERVICE_ID_EMAILJS;
const template_id = import.meta.env.VITE_TEMPLATE_ID_CONTACTO;
const public_key = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

export const FormC = () => {
  const form = useRef()
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  const [errores, setErrores] = useState({})

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const validarFormulario = () => {
    const erroresForm = {}
    if (!formulario.nombre.trim()) erroresForm.nombre = "El nombre y apellido es obligatorio"
    if (!formulario.email.trim()) erroresForm.email = "El email es obligatorio"
    if (!formulario.mensaje.trim()) erroresForm.mensaje = "El mensaje es obligatorio"
    return erroresForm
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const erroresForm = validarFormulario()
    setErrores(erroresForm)

    if (Object.keys(erroresForm).length > 0) return;

    emailjs
    .sendForm(`${service_id}`, `${template_id}`, form.current, {
      publicKey: `${public_key}`,
    })
    .then(() => {
      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: '¡Gracias por contactarnos! Te responderemos pronto.',
        confirmButtonColor: '#0033A0'
      })
      setFormulario({ nombre: "", email: "", mensaje: "" })
        setErrores({})
        form.current.reset()
      })
    .catch((error) => {
      console.error("Error al enviar:", error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar tu consulta. Intenta nuevamente.',
      })
    })
  }

  return (
    <Container fluid className='my-3'>
      <Form ref={form} onSubmit={sendEmail} className="p-3 border rounded shadow-sm bg-light form">
        <h5 className="text-center">Consultas por Correo</h5>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingresa tu Nombre y Apellido"
            value={formulario.nombre}
            onChange={handleChange}
            isInvalid={!!errores.nombre}
          />
          <Form.Control.Feedback type="invalid">{errores.nombre}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresa tu Email"
            value={formulario.email}
            onChange={handleChange}
            isInvalid={!!errores.email}
          />
          <Form.Control.Feedback type="invalid">{errores.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="mensaje">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            name="mensaje"
            rows={4}
            placeholder="Ingresa tu consulta"
            value={formulario.mensaje}
            onChange={handleChange}
            isInvalid={!!errores.mensaje}
          />
          <Form.Control.Feedback type="invalid">{errores.mensaje}</Form.Control.Feedback>
        </Form.Group>

        <div className="text-center mt-3">
          <input
            type="submit"
            value="Enviar Consulta"
            className="btn btn-primary"
          />
        </div>
      </Form>
    </Container>
  );
};

export default FormC