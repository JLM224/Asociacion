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
        <h1 className="text-center">Sitios de Interés para consumidores</h1>

        <Col xs="12">
          <h3>
            <strong>Dirección de Comercio Interior de Tucumán (DCI)</strong>, 9 de julio 497, tel. 4525080,{" "}
            <a href={links[0].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[0].text}
            </a>
          </h3>
        </Col>

        <Col xs="12">
          <h3>Ente Regulador de Servicios Públicos de Tucumán, tel. 0800-555-0097</h3>
        </Col>

        <Col xs="12">
          <h3>
            <strong>Ente Nacional Regulador del Gas (Enargas)</strong>, Rivadavia 893, Tel. 4311994 ,{" "}
            <a href={links[1].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[1].text}
            </a>
            ,{" "}
            <a href={links[2].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[2].text}
            </a>
          </h3>
        </Col>

        <Col xs="12">
          <h3>
            <strong>Comisión Nacional de Comunicaciones (CNC),</strong> San Juan 261, San Miguel de Tucumán, tel.
            4222424,{" "}
            <a href={links[3].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[3].text}
            </a>
          </h3>
        </Col>

        <Col xs="12">
          <h3>
            <strong>Defensoría del Pueblo de Tucumán</strong> Balcarce 64, Tel. 4220860,{" "}
            <a href={links[4].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[4].text}
            </a>
            ,{" "}
            <a href={links[5].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[5].text}
            </a>
          </h3>
        </Col>

        <Col xs="12">
          <h3>
            <strong>Comisión Nacional de Regulación del Transporte (CNRT),</strong> Estación Terminal de ómnibus de
            Tucumán S.A., Av. Brígido Terán 250 - Local 518 A, Tel. 4000775 / 0800-333-0300,{" "}
            <a href={links[6].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[6].text}
            </a>
          </h3>
        </Col>

        <Col xs="12">
          <h3>
            <strong>Ente Regulador del Servicio de Agua y Cloacas de Tucumán (ERSACT),</strong> San Martín 3347, Tel.
            4320054,{" "}
            <a href={links[7].href} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
              {links[7].text}
            </a>
          </h3>
        </Col>
      </Row>
    </Container>
  )
}

export default SitiosDeInteres