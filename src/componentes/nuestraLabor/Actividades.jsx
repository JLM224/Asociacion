import { Card, Col, Container, Row } from 'react-bootstrap';
import './Actividades.css';

const Actividades = () => {
  const acciones = [
    {
      id: 1,
      titulo: '1 - Educación y sensibilización',
      descripcion: (
        <ul>
          <li>
            Talleres, charlas, seminarios y capacitaciones abiertas al público.
          </li>
          <li>
            Material educativo (folletos, guías y contenido audiovisual).
          </li>
          <li>
            Campañas informativas en redes sociales y medios tradicionales.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      titulo: '2 - Asesoramiento y orientación legal',
      descripcion: (
        <ul>
          <li>
            Brindamos asesoramiento gratuito frente a conflictos con empresas o
            prestadores de servicios.
          </li>
          <li>
            Orientamos sobre cómo presentar reclamos, denuncias o iniciar
            procedimientos de conciliación.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      titulo: '3 - Investigación y monitoreo',
      descripcion: (
        <ul>
          <li>
            Realizamos investigaciones sobre prácticas comerciales, publicidad
            engañosa y servicios deficientes.
          </li>
          <li>
            Monitoreamos mercados para detectar abusos o desequilibrios que
            afecten a los consumidores.
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      titulo: '4 - Incidencia pública y participación ciudadana',
      descripcion: (
        <ul>
          <li>
            Proponemos mejoras en políticas públicas, leyes y normativas de
            protección al consumidor.
          </li>
          <li>
            Participamos en espacios de diálogo con organismos y organizaciones
            sociales.
          </li>
          <li>
            Impulsamos la participación activa de la ciudadanía en el control
            social del consumo.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <Container fluid className="actividades-header py-5">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          data-aos-once="true">
          <h1 className="t1">¿Qué hacemos?</h1>
          <h4 className="t2">
            Desarrollamos actividades orientadas al fortalecimiento de los
            derechos de los consumidores.
          </h4>
        </div>
      </Container>
      <Container fluid className="pb-5 px-3 px-md-5">
        <Row className="g-4 justify-content-center">
          {acciones.map((item, i) => (
            <Col
              key={item.id}
              xs={12}
              lg={6}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              data-aos-duration="900"
              data-aos-easing="ease-out-cubic"
              data-aos-once="true">
              <Card className="actividad-card h-100 border-0">
                <Card.Body className="p-4 p-md-5">
                  <Card.Title className="actividad-title">
                    {item.titulo}
                  </Card.Title>
                  <div className="actividad-content">
                    {item.descripcion}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Actividades;