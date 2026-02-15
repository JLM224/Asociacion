import { Card, Col, Container, Row } from 'react-bootstrap'
import './Actividades.css'

const Actividades = () => {
const acciones = [{
    id:1,
    titulo: '1-Educación y sensibilización',
    descripcion: <>
    <ul>
        <li>Talleres, charlas, seminarios y capacitaciones abiertas al público.</li>
        <li>Material educativo (folletos, guías, contenido audiovisual).</li>
        <li>Campañas informativas en redes sociales y medios tradicionales.</li>
    </ul>
    </>
},
{
    id:2,
    titulo: '2-Asesoramiento y orientación legal',
    descripcion: <>
    <ul>
        <li>Brindamos asesoramiento gratuito a consumidores frente a conflictos con empresas o prestadores de servicios.</li>
        <li>Orientamos sobre cómo presentar reclamos, denuncias o iniciar procedimientos de conciliación.</li>
    </ul>
    </>
},
{
    id:3,
    titulo: '3-Investigación y monitoreo',
    descripcion: <>
    <ul>
        <li>Realizamos investigaciones sobre prácticas comerciales, publicidad engañosa, productos defectuosos o servicios deficientes.</li>
        <li>Monitoreamos mercados para detectar abusos o desequilibrios que afecten a los consumidores.</li>
    </ul>
    </>
},
{
    id:4,
    titulo: '4-Incidencia pública y participación ciudadana',
    descripcion: <>
    <ul>
        <li>Proponemos mejoras en políticas públicas, leyes y normativas que protejan al consumidor.</li>
        <li>Participamos en espacios de diálogo con organismos gubernamentales y otras organizaciones sociales.</li>
        <li>Impulsamos la participación activa de la ciudadanía en el control social del consumo.</li>
    </ul>
    </>
}]
  return (
    <>
    <Container fluid className='mt-4'>
      <h1 className="text-center t1">¿Qué Hacemos?</h1>
      <h4 className='t2' style={{ textAlign: 'justify' }} >Desarrollamos una variedad de actividades orientadas al fortalecimiento de los derechos de los consumidores:</h4>
    </Container>
    <Container fluid className="my-4">
        <Row className="g-3">
          {acciones.map((item, i) => (
            <Col key={item.id} xs={12} md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-duration="800">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{item.titulo}</Card.Title>
                  <div>{item.descripcion}</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Actividades