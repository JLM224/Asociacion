import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
const service_id = import.meta.env.VITE_SERVICE_ID_EMAILJS;
const template_id = import.meta.env.VITE_TEMPLATE_ID_EMAILJS;
const public_key = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;

export const FormC = () => {
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
        title: 'Consulta enviada',
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
    <Container fluid className='my-3'>
    <Form ref={form} onSubmit={sendEmail} className="p-3 border rounded shadow-sm bg-light form">
            <h5 className="text-center">Consultas por Correo</h5>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control 
                type="text"
                name="nombre"
                placeholder="Ingresa tu Nombre y Apellido"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email"
                name="email"
                placeholder="Ingresa tu Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="mensaje">
              <Form.Label>Reclamo</Form.Label>
              <Form.Control 
                as="textarea"
                name="mensaje"
                rows={4}
                placeholder="Ingresa tu Reclamo"
                required
              />
            </Form.Group>

        <div className="text-center mt-3">
          <input 
            type="submit" 
            value="Enviar Consulta"
            className="btn btn-primary"/>
        </div>
          </Form>
    </Container>
  );
};

export default FormC