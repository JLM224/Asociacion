import { Container } from "react-bootstrap";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const LinksContacto = () => {
  const links = [
    {
      icon: <FaMapMarkerAlt />,
      text: "Virgen de la Merced 105, San Miguel de Tucumán",
      href: "https://www.google.com/maps?q=Virgen+de+la+Merced+105,+San+Miguel+de+Tucumán,+Argentina",
    },
    {
      icon: <FaPhone />,
      text: "+54 9 381 5086378",
      href: "tel:+5493815086378",
    },
    {
      icon: <FaWhatsapp />,
      text: "+54 9 381 5667496",
      href: "https://wa.me/5493815667496",
    },
    {
      icon: <FaEnvelope />,
      text: "adepcu25@gmail.com",
      href: "mailto:adepcu25@gmail.com",
    },
    {
      icon: <FaInstagram />,
      text: "Seguinos en Instagram!",
      href: "https://www.instagram.com/adepcu2025",
    },
    {
      icon: <FaFacebook />,
      text: "Seguinos en Facebook!",
      href: "https://www.facebook.com/61579450741591",
    },
  ];

  return (
    <Container
      fluid
      className="text-center d-flex flex-column gap-3 my-4 px-3"
    >
      {links.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none d-flex align-items-center justify-content-center gap-2 contacto-link"
          data-aos="fade-right"
          data-aos-delay={index * 120}
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true"
        >
          <span className="contacto-icon">{item.icon}</span>
          <span className="contacto-text">{item.text}</span>
        </a>
      ))}
    </Container>
  )
}

export default LinksContacto