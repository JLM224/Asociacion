import { Container, Form } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
const service_id = import.meta.env.VITE_SERVICE_ID_EMAILJS;
const template_id = import.meta.env.VITE_TEMPLATE_ID_CHARLAS;
const public_key = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

const FormInstituciones = () => {
const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

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
      form.current.reset();
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar tu consulta. Intenta nuevamente.',
      })
    })
  }
  return (
    <>
    <Container fluid className="w-50 my-5">
        <Form ref={form} onSubmit={sendEmail} className="p-3 border rounded shadow-sm bg-light form">
            <h5 className="text-center my-2">¿Le gustaría que brindemos una charla en su institución?</h5>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control 
                type="text"
                name="name"
                placeholder="Ingresa tu Nombre y Apellido"
                required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                name="email"
                placeholder="Ingresa tu Email"
                required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="institucion">
              <Form.Label>Nombre de la Institución</Form.Label>
              <Form.Control
                type="text"
                name="institucion"
                placeholder="Ejemplo: Escuela N°45, Universidad Nacional..."
                required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="cargo">
              <Form.Label>Cargo o función</Form.Label>
              <Form.Control
                type="text"
                name="cargo"
                placeholder="Ejemplo: Directivo, docente, coordinador..."
                required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Mensaje</Form.Label>
                <Form.Control 
                  as="textarea"
                  name="mensaje"
                  rows={2}
                  placeholder="Ingresa tu mensaje"
                  required
                          />
            </Form.Group>

        <div className="text-center mt-3">
          <input 
            type="submit" 
            value="Enviar datos"
            className="btn btn-primary"/>
        </div>
          </Form>
    </Container>
    </>
  )
}

export default FormInstituciones