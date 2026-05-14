import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
const service_id = import.meta.env.VITE_SERVICE_ID_EMAILJS;
const template_id = import.meta.env.VITE_TEMPLATE_ID_CONTACTO;
const public_key = import.meta.env.VITE_PUBLIC_KEY_EMAILJS;
import './Formularios.css';

export const FormC = () => {
  const form = useRef();

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const validarFormulario = () => {
    const erroresForm = {};

    if (!formulario.nombre.trim()) {
      erroresForm.nombre = "El nombre y apellido es obligatorio";
    }

    if (!formulario.email.trim()) {
      erroresForm.email = "El email es obligatorio";
    }

    if (!formulario.mensaje.trim()) {
      erroresForm.mensaje = "El mensaje es obligatorio";
    }

    return erroresForm;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const erroresForm = validarFormulario();
    setErrores(erroresForm);

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
        });

        setFormulario({
          nombre: "",
          email: "",
          mensaje: ""
        });

        setErrores({});
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error al enviar:", error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un error al enviar tu consulta. Intenta nuevamente.',
        });
      });
  };

  return (
    <Container
      fluid
      className='my-3'
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <Form
        ref={form}
        onSubmit={sendEmail}
        className="p-3 border rounded shadow-sm formulario"
      >
        <h5
          className="text-center"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
        >
          Consultas por Correo
        </h5>

        <Form.Group
          className="mb-3"
          controlId="name"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <Form.Label>Nombre y Apellido</Form.Label>

          <Form.Control
            type="text"
            name="nombre"
            placeholder="Ingresa tu Nombre y Apellido"
            value={formulario.nombre}
            onChange={handleChange}
            isInvalid={!!errores.nombre}
          />

          <Form.Control.Feedback type="invalid">
            {errores.nombre}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="email"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <Form.Label>Email</Form.Label>

          <Form.Control
            type="email"
            name="email"
            placeholder="Ingresa tu Email"
            value={formulario.email}
            onChange={handleChange}
            isInvalid={!!errores.email}
          />

          <Form.Control.Feedback type="invalid">
            {errores.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="mensaje"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
        >
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

          <Form.Control.Feedback type="invalid">
            {errores.mensaje}
          </Form.Control.Feedback>
        </Form.Group>

        <div
          className="text-center mt-3"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="700"
          data-aos-easing="ease-out-cubic"
        >
          <input
            type="submit"
            value="Enviar Consulta"
            className="btn btn-personalizado"
          />
        </div>
      </Form>
    </Container>
  )
}

export default FormC;