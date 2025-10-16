import './BotonWhatsapp.css';
import {FaWhatsapp} from "react-icons/fa";

const BotonWhatsapp = () => {
const numero = "+5493815667496";
const mensaje = "¡Hola! Quisiera más información sobre su trabajo.";
const whatsappLink = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  return (
    <>
    <a
      href={whatsappLink}
      className="botonwhatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
    </>
  )
}

export default BotonWhatsapp