import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina"

const links = [
{ id: 1, 
  href: "mailto:servidores@tucuman.gov.ar", 
  text: "servidores@tucuman.gov.ar"
},
{ id: 2, 
  href: "https://www.enargas.gob.ar/secciones/contacto/contacto.php", 
  text: "Contacto ENARGAS" 
},
{ id: 3, 
  href: "mailto:reclamos@enargas.gov.ar", 
  text: "reclamos@enargas.gov.ar" 
},
{ id: 4, 
  href: "http://www.cnc.gov.ar/ciudadanos/centros/tucuman.asp", 
  text: "CNC Tucumán" 
},
{ id: 5, 
  href: "http://www.defensoriatucuman.gob.ar/informa/", 
  text: "Defensoría Tucumán" 
},
{ id: 6, 
  href: "mailto:defensoria@tucuman.gov.ar", 
  text: "defensoria@tucuman.gov.ar" 
},
{ id: 7, 
  href: "https://www.argentina.gob.ar/transporte/cnrt/delegaciones", 
  text: "CNRT Delegaciones" 
},
{ id: 8, 
  href: "mailto:info@ersact.gov.ar", 
  text: "info@ersact.gov.ar" }
]

const SitiosDeInteres = () => {
useEffect(() => {
  cambiarTituloPagina("Sitios de Interes")
},[])
  return (
    <Container fluid className="my-3">
  <Row className="g-3">
    <h1 className="text-center" data-aos="fade-down" data-aos-delay="0">
      Sitios de Interés para consumidores
    </h1>

    {[
      { texto: "Dirección de Comercio Interior de Tucumán (DCI), 9 de julio 497, tel. 4525080", link: links[0] },
      { texto: "Ente Regulador de Servicios Públicos de Tucumán, tel. 0800-555-0097" },
      { texto: "Ente Nacional Regulador del Gas (Enargas), Rivadavia 893, Tel. 4311994", links: [links[1], links[2]] },
      { texto: "Comisión Nacional de Comunicaciones (CNC), San Juan 261, San Miguel de Tucumán, tel. 4222424", link: links[3] },
      { texto: "Defensoría del Pueblo de Tucumán Balcarce 64, Tel. 4220860", links: [links[4], links[5]] },
      { texto: "Comisión Nacional de Regulación del Transporte (CNRT), Estación Terminal de ómnibus de Tucumán S.A., Av. Brígido Terán 250 - Local 518 A, Tel. 4000775 / 0800-333-0300", link: links[6] },
      { texto: "Ente Regulador del Servicio de Agua y Cloacas de Tucumán (ERSACT), San Martín 3347, Tel. 4320054", link: links[7] }
    ].map((item, i) => (
      <Col 
        key={i} 
        xs="12"
        data-aos="fade-up"
        data-aos-delay={i * 100}
        data-aos-duration="800"
      >
        <h3>
          {item.texto}
          {item.link && <> — <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{item.link.text}</a></>}
          {item.links && item.links.map((l, j) => (
            <span key={j}>, <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-decoration-none">{l.text}</a></span>
          ))}
        </h3>
      </Col>
    ))}
  </Row>
</Container>
  )
}

export default SitiosDeInteres