import { cambiarTituloPagina } from "../funcionesAuxiliares/CambiarTituloPagina";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

const links = [
  {
    id: 1,
    href: "mailto:servidores@tucuman.gov.ar",
    text: "servidores@tucuman.gov.ar",
  },
  {
    id: 2,
    href: "https://www.enargas.gob.ar/secciones/contacto/contacto.php",
    text: "Contacto ENARGAS",
  },
  {
    id: 3,
    href: "mailto:reclamos@enargas.gov.ar",
    text: "reclamos@enargas.gov.ar",
  },
  {
    id: 4,
    href: "http://www.cnc.gov.ar/ciudadanos/centros/tucuman.asp",
    text: "CNC Tucumán",
  },
  {
    id: 5,
    href: "http://www.defensoriatucuman.gob.ar/informa/",
    text: "Defensoría Tucumán",
  },
  {
    id: 6,
    href: "mailto:defensoria@tucuman.gov.ar",
    text: "defensoria@tucuman.gov.ar",
  },
  {
    id: 7,
    href: "https://www.argentina.gob.ar/transporte/cnrt/delegaciones",
    text: "CNRT Delegaciones",
  },
  {
    id: 8,
    href: "mailto:info@ersact.gov.ar",
    text: "info@ersact.gov.ar",
  },
];

const sitios = [
  {
    texto:
      "Dirección de Comercio Interior de Tucumán (DCI), 9 de Julio 497, Tel. 4525080",
    link: links[0],
  },
  {
    texto:
      "Ente Regulador de Servicios Públicos de Tucumán, Tel. 0800-555-0097",
  },
  {
    texto:
      "Ente Nacional Regulador del Gas (ENARGAS), Rivadavia 893, Tel. 4311994",
    links: [links[1], links[2]],
  },
  {
    texto:
      "Comisión Nacional de Comunicaciones (CNC), San Juan 261, San Miguel de Tucumán, Tel. 4222424",
    link: links[3],
  },
  {
    texto:
      "Defensoría del Pueblo de Tucumán, Balcarce 64, Tel. 4220860",
    links: [links[4], links[5]],
  },
  {
    texto:
      "Comisión Nacional de Regulación del Transporte (CNRT), Terminal de Ómnibus de Tucumán, Av. Brígido Terán 250 - Local 518 A, Tel. 4000775 / 0800-333-0300",
    link: links[6],
  },
  {
    texto:
      "Ente Regulador del Servicio de Agua y Cloacas de Tucumán (ERSACT), San Martín 3347, Tel. 4320054",
    link: links[7],
  },
];

const SitiosDeInteres = () => {
  useEffect(() => {
    cambiarTituloPagina("Sitios de Interés");
  }, []);

  return (
    <Container fluid className="sitios-container py-5 px-3 px-md-5">
      <div
        className="text-center mb-5"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <h1 className="T1">
          Sitios de interés para consumidores
        </h1>
        <p className="sitios-subtitle">
          Organismos y entidades útiles para consultas, reclamos y orientación.
        </p>
      </div>
      <Row className="g-4 justify-content-center">
        {sitios.map((item, i) => (
          <Col
            key={i}
            xs={12}
            lg={6}
            data-aos="fade-up"
            data-aos-delay={i * 120}
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <Card className="sitio-card border-0 h-100">
              <Card.Body>

                <h3 className="sitio-texto">
                  {item.texto}
                </h3>

                {item.link && (
                  <div className="mt-3">
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sitio-link"
                    >
                      {item.link.text}
                    </a>
                  </div>
                )}

                {item.links && (
                  <div className="mt-3 d-flex flex-column gap-2">
                    {item.links.map((l, j) => (
                      <a
                        key={j}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sitio-link"
                      >
                        {l.text}
                      </a>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default SitiosDeInteres;