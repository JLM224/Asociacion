import { Container } from "react-bootstrap"


const MapaAsociacion = () => {
  const mapaUrl = "https://www.google.com/maps?q=Virgen+de+la+Merced+105,+San+Miguel+de+Tucumán,+Argentina&output=embed"
  return (
    <>
    <Container fluid className="my-3" style={{ width: '100%', height: '400px' }}>
      <h5 className="text-center my-2">Dónde nos ubicamos</h5>
      <div style={{ width: '100%', height: '100%' }}>
      <iframe
      title="Mapa Virgen de la Merced 105"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={mapaUrl}></iframe>
      </div>
    </Container>
    </>
  )
}

export default MapaAsociacion