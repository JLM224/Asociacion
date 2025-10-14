import { Container } from "react-bootstrap"
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
      text: "Correo electrónico",
      href: "mailto:ejemplo@correo.com",
    },
    {
      icon: <FaInstagram />,
      text: "Instagram",
      href: "https://www.instagram.com/tuusuario",
    },
    {
      icon: <FaFacebook />,
      text: "Facebook",
      href: "https://www.facebook.com/tuusuario",
    }
]
  return (
    <>
    <Container fluid className="text-center d-flex flex-column gap-2 my-3">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none d-flex align-items-center justify-content-center gap-2"
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </Container>
    </>
  )
}

export default LinksContacto