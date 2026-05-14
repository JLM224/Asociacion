import { Container } from "react-bootstrap";

const Mapa = () => {
  const mapaUrl =
    "https://www.google.com/maps?q=Virgen+de+la+Merced+105,+San+Miguel+de+Tucumán,+Argentina&output=embed";

  return (
    <Container
      fluid
      className="py-3"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out-cubic"
      data-aos-once="true"
    >
      <div
        data-aos="zoom-in"
        data-aos-delay="150"
        data-aos-duration="900"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <iframe
          title="Mapa Virgen de la Merced 105"
          style={{
            border: 0,
            width: "100%",
            height: "250px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapaUrl}
        ></iframe>
      </div>
    </Container>
  )
}

export default Mapa