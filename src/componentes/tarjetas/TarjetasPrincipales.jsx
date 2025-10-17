import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

const TarjetasPrincipales = () => {
  return (
    <>
    <Container fluid className="my-5">
      <Row className='g-3 equal-height-row'>
      <Col xs="12" md="6">
      <Card className='w-100 h-100 tarjeta'>
      <Card.Body>
        <h2 className='text-center'>¿Quiénes somos?</h2>
        <p className="text-muted">
        <strong>REPRESENTAMOS ADEP-CU</strong>, una asociación civil sin fines de lucro, con sede en San Miguel de Tucumán, creada para defender, proteger, promover y garantizar los derechos de los consumidores y usuarios de bienes y servicios.
        </p> 
        <p className="text-muted"> Nacimos como respuesta a una necesidad concreta: el compromiso de defender al ciudadano común frente a los abusos, brindando acompañamiento, asesoramiento técnico y educación para el ejercicio pleno de sus derechos.
        </p> 
        <blockquote className="blockquote text-center my-4"><p className="mb-0 fst-italic text-secondary"> “Creemos que una sociedad informada y consciente es la base de un mercado más justo y transparente.” </p> 
        </blockquote> 
        <h5 className="fw-bold mt-4">En ADEP-CU, trabajamos con una visión integral:</h5> 
        <ul className="text-muted ms-3">
            <li>Defendemos derechos.</li>
            <li>Promovemos la educación del consumidor.</li>
            <li>Fomentamos la transparencia.</li>
            <li>Acompañamos a cada persona en su búsqueda de justicia y equidad.</li>
        </ul>
      </Card.Body>
    </Card>
      </Col>
      <Col xs="12" md="6">
      <Card className='w-100 h-100 tarjeta'>
      <Card.Body>
        <h2 className='text-center'>Nuestra misión</h2>
        <p className="text-muted">
        Garantizar que cada consumidor y usuario pueda acceder a información clara, veraz y suficiente, y orientar como actuar frente a situaciones de abuso, incumplimiento o trato indigno para ejercer sus derechos con acompañamiento de nuestro equipo especializado. Promover una cultura de consumo consciente, responsable y respetuosa de los derechos fundamentales de las personas.        
        </p>
        <blockquote className="blockquote text-center my-4"><p className="mb-0 fst-italic text-secondary"> “Buscamos garantizar que los consumidores y usuarios tengan acceso a una información clara, servicios adecuados y sobre todo, juntos facilitar el acceso a canales efectivos para defender sus intereses con: Transparencia: todo reclamo merece ser escuchado y respondido con claridad.” </p> 
        </blockquote> 
        <h5 className="fw-bold mt-4">En ADEP-CU, trabajamos con:</h5> 
        <ul className="text-muted ms-3">
            <li>Cercanía: trabajamos desde la realidad local, entendiendo cada contexto.</li>
            <li>Educación: un consumidor informado es un consumidor empoderado.</li>
            <li>Justicia: defendemos el acceso a soluciones reales, efectivas y equitativas.</li>
        </ul>
      </Card.Body>
    </Card>
      </Col>
      <Col xs="12" md="6">
      <Card className='w-100 h-100 tarjeta'>
      <Card.Body>
        <h2 className='text-center'>Nuestra Actividad</h2>
        <p className="text-muted">
        En ADEP-CU, brindamos orientación integral para la defensa efectiva en todo tipo de relaciones de consumo y servicios.        
        </p>
        <blockquote className="blockquote text-center my-4"><p className="mb-0 fst-italic text-secondary"> “Nuestro equipo de profesionales está preparado para orientarte, representarte y acompañarte en cada paso.” </p> 
        </blockquote> 
        <h5 className="fw-bold mt-4">En ADEP-CU, vamos a:</h5> 
        <ul className="text-muted ms-3">
            <li>Orientación personalizada ante conflictos o consultas en materia de consumo.</li>
            <li>Información veraz, clara y completa.</li>
            <li>Análisis de contratos, cláusulas abusivas, intereses o cargos indebidos. 
              Orientación técnico-jurídica en demandas individuales o colectivas, buscando soluciones efectivas en pos de un consumo consiente y justo.</li>
            <li>Educación y formación del consumidor, a través de charlas, jornadas, talleres, campañas y publicaciones.</li>
            <li>Todos los problemas de los consumidores son importantes y solo uniendo nuestras voces podemos lograr un cambio verdadero.</li>
        </ul>
      </Card.Body>
    </Card>
      </Col>
      <Col xs="12" md="6">
      <Card className='w-100 h-100 tarjeta'>
  <Card.Body>
    <h2 className='text-center'>Cómo te ayudamos?</h2>
    <p className="text-muted">
      <strong>Escuchamos tu caso</strong> — Te orientamos sobre tus derechos y las opciones disponibles.
    </p>
    <p className="text-muted">
      <strong>Analizamos la situación</strong> — Revisamos documentación, contratos o facturas.
    </p>
    <blockquote className="blockquote text-center my-4">
      <p className="mb-0 fst-italic text-secondary">
        “En ADEP-CU, no estás sola ni solo. Tu reclamo es nuestro compromiso.”
      </p>
    </blockquote>
    <h5 className="fw-bold mt-4">Nuestro Propósito</h5>
    <p className="text-muted">
      Ser una referencia regional en la protección de los derechos de consumidores y usuarios,
      promoviendo una cultura de respeto, responsabilidad y equidad en el mercado, y contribuyendo
      a la construcción de una sociedad más justa, solidaria e informada.
    </p>
    <h5 className="fw-bold mt-4">Educación y prevención</h5>
    <p className="text-muted">
      Creemos que educar es proteger. Por eso desarrollamos talleres, campañas informativas y materiales educativos
      destinados a difundir los derechos de los consumidores, promover el consumo responsable y fortalecer el vínculo
      entre ciudadanos, empresas y Estado.
    </p>
    <blockquote className="blockquote text-center my-4">
      <p className="mb-0 fst-italic text-secondary">
        “El conocimiento es la herramienta más poderosa para prevenir abusos.”
      </p>
    </blockquote>
    <p className="text-muted text-center mt-4">
      <strong>Participá, informate y ayudanos a construir un mercado más justo.</strong><br />
      Cada consulta, cada reclamo y cada acción contribuye a mejorar la calidad de vida de todos.
    </p>
  </Card.Body>
</Card>
      </Col>
      </Row>
    </Container>
    </>
  )
}

export default TarjetasPrincipales