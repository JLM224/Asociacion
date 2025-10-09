import { Container } from "react-bootstrap"
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const MediosDeComunicacion = () => {
const icons = [
  { icon: <FaMapMarkerAlt />, text: "Virgen de la Merced 105, San Miguel de Tucumán" },
  { icon: <FaPhone />, text: "+5493815086378" },
  { icon: <FaWhatsapp />, text: "+5493815667496" },
  { icon: <FaEnvelope />, text: "correo" },
  { icon: <FaInstagram />, text: "Instagram" },
  { icon: <FaFacebook />, text: "Facebook" },
  ]
  return (
    <>
    <Container fluid className="d-flex flex-column gap-3 my-3">
      <h3 style={{ textAlign: "justify" }}>Otros Medios de Comunicación</h3>
      {icons.map((item, i) => (
        <div key={i} className="d-flex align-items-center gap-2">
          <span style={{ fontSize: "1.5rem", color: "#007bff" }}>{item.icon}</span>
          <span>{item.text}</span>
        </div>
      ))}
    </Container>
    </>
  )
}

export default MediosDeComunicacion