import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./Tarjetas.css"

const TarjetasPrincipales = () => {
  return (
    <Container fluid className="my-5 px-3 px-md-5">
      <Row className="g-4 justify-content-center">
        <Col xs={12} lg={6}>
          <Card
            className="w-100 h-100 tarjeta shadow-sm border-0"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold mb-4">¿Quiénes somos?</h2>

              <p className="text-muted">
                <strong>REPRESENTAMOS ADEP-CU</strong>, una asociación civil
                sin fines de lucro, con sede en San Miguel de Tucumán, creada
                para defender, proteger, promover y garantizar los derechos de
                los consumidores y usuarios de bienes y servicios.
              </p>

              <p className="text-muted">
                Nacimos como respuesta a una necesidad concreta: el compromiso
                de defender al ciudadano común frente a los abusos, brindando
                acompañamiento, asesoramiento técnico y educación para el
                ejercicio pleno de sus derechos.
              </p>

              <blockquote className="blockquote text-center my-4">
                <p className="mb-0 fst-italic text-secondary">
                  “Creemos que una sociedad informada y consciente es la base
                  de un mercado más justo y transparente.”
                </p>
              </blockquote>

              <h5 className="fw-bold mt-4">
                En ADEP-CU, trabajamos con una visión integral:
              </h5>

              <ul className="text-muted ms-3">
                <li>Defendemos derechos.</li>
                <li>Promovemos la educación del consumidor.</li>
                <li>Fomentamos la transparencia.</li>
                <li>
                  Acompañamos a cada persona en su búsqueda de justicia y
                  equidad.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card
            className="w-100 h-100 tarjeta shadow-sm border-0"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold mb-4">Nuestra misión</h2>

              <p className="text-muted">
                Garantizar que cada consumidor y usuario pueda acceder a
                información clara, veraz y suficiente, y orientar cómo actuar
                frente a situaciones de abuso, incumplimiento o trato indigno
                para ejercer sus derechos con acompañamiento de nuestro equipo
                especializado.
              </p>

              <p className="text-muted">
                Promover una cultura de consumo consciente, responsable y
                respetuosa de los derechos fundamentales de las personas.
              </p>

              <blockquote className="blockquote text-center my-4">
                <p className="mb-0 fst-italic text-secondary">
                  “Buscamos garantizar que los consumidores y usuarios tengan
                  acceso a una información clara y canales efectivos para
                  defender sus intereses.”
                </p>
              </blockquote>

              <h5 className="fw-bold mt-4">En ADEP-CU, trabajamos con:</h5>

              <ul className="text-muted ms-3">
                <li>
                  Cercanía: trabajamos desde la realidad local, entendiendo cada
                  contexto.
                </li>
                <li>
                  Educación: un consumidor informado es un consumidor
                  empoderado.
                </li>
                <li>
                  Justicia: defendemos el acceso a soluciones reales, efectivas
                  y equitativas.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card
            className="w-100 h-100 tarjeta shadow-sm border-0"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold mb-4">Nuestra Actividad</h2>

              <p className="text-muted">
                En ADEP-CU, brindamos orientación integral para la defensa
                efectiva en todo tipo de relaciones de consumo y servicios.
              </p>

              <blockquote className="blockquote text-center my-4">
                <p className="mb-0 fst-italic text-secondary">
                  “Nuestro equipo de profesionales está preparado para
                  orientarte, representarte y acompañarte en cada paso.”
                </p>
              </blockquote>

              <h5 className="fw-bold mt-4">En ADEP-CU, vamos a:</h5>

              <ul className="text-muted ms-3">
                <li>
                  Orientación personalizada ante conflictos o consultas en
                  materia de consumo.
                </li>

                <li>Información veraz, clara y completa.</li>

                <li>
                  Análisis de contratos, cláusulas abusivas, intereses o cargos
                  indebidos.
                </li>

                <li>
                  Orientación técnico-jurídica en demandas individuales o
                  colectivas.
                </li>

                <li>
                  Educación y formación del consumidor mediante talleres,
                  campañas y publicaciones.
                </li>

                <li>
                  Todos los problemas de los consumidores son importantes.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card
            className="w-100 h-100 tarjeta shadow-sm border-0"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-once="true"
          >
            <Card.Body className="p-4 p-md-5">
              <h2 className="fw-bold mb-4">¿Cómo te ayudamos?</h2>

              <p className="text-muted">
                <strong>Escuchamos tu caso</strong> — Te orientamos sobre tus
                derechos y las opciones disponibles.
              </p>

              <p className="text-muted">
                <strong>Analizamos la situación</strong> — Revisamos
                documentación, contratos o facturas.
              </p>

              <blockquote className="blockquote text-center my-4">
                <p className="mb-0 fst-italic text-secondary">
                  “En ADEP-CU, no estás sola ni solo. Tu reclamo es nuestro
                  compromiso.”
                </p>
              </blockquote>

              <h5 className="fw-bold mt-4">Nuestro propósito</h5>

              <p className="text-muted">
                Ser una referencia regional en la protección de los derechos de
                consumidores y usuarios, promoviendo una cultura de respeto,
                responsabilidad y equidad.
              </p>

              <h5 className="fw-bold mt-4">Educación y prevención</h5>

              <p className="text-muted">
                Creemos que educar es proteger. Por eso desarrollamos talleres,
                campañas informativas y materiales educativos destinados a
                difundir los derechos de los consumidores.
              </p>

              <blockquote className="blockquote text-center my-4">
                <p className="mb-0 fst-italic text-secondary">
                  “El conocimiento es la herramienta más poderosa para prevenir
                  abusos.”
                </p>
              </blockquote>

              <p className="text-muted text-center mt-4">
                <strong>
                  Participá, informate y ayudanos a construir un mercado más
                  justo.
                </strong>
                <br />
                Cada consulta, cada reclamo y cada acción contribuye a mejorar
                la calidad de vida de todos.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default TarjetasPrincipales;