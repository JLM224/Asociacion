import Carousel from 'react-bootstrap/Carousel';
import './Carrusel.css'

const Carrusel = () => {
const slides = [
    {
    id: 1,
    image: 'https://inside.pe/upload/img/notas/16479056743738233a377.jpg',
    title: '¿Quiénes somos?',
    text: (
      <>
        Somos una asociación civil sin fines de lucro, legalmente constituida, dedicados a la defensa, protección y difusión de los derechos de los consumidores/usuarios.
        <br />
        <br />
        <strong>Nuestro trabajo se basa en:</strong>
        <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
          <li>Transparencia</li>
          <li>Equidad</li>
          <li>Acceso a la información</li>
          <li>Educación para el consumo responsable</li>
          <li>Justicia social</li>
        </ul>
      </>
    )
    },{
    id: 2,
    image: 'https://www.santanderopenacademy.com/es/blog/comportamiento-del-consumidor/_jcr_content/root/hero/imageMobile.coreimg.jpeg/1733740659900/comportamiento-del-consumidor-1.jpeg',
    title: '¿Cuál es nuestra misión?',
    text: (
      <>
        Promover una cultura de consumo consciente, responsable y respetuosa de los derechos fundamentales de las personas.
        <br />
        Buscamos garantizar que los consumidores y usuarios tengan acceso a:
        <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
          <li>Información clara</li>
          <li>Servicios adecuados</li>
          <li>Canales efectivos para defender sus intereses frente a prácticas abusivas</li>
        </ul>
      </>
    )
    },{
    id: 3,
    image: 'https://empresas.mercadopago.com.br/hs-fs/hubfs/imagens/blog/empresas/psicologia-do-consumidor.jpg?width=670&name=psicologia-do-consumidor.jpg',
    title: '¿Cuál es nuestra visión?',
    text: (
      <>
        Ser una organización de referencia en el ámbito del derecho del consumidor, construyendo una sociedad más informada, empoderada y capaz de ejercer sus derechos en todos los ámbitos del consumo:
        <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
          <li>Servicios públicos</li>
          <li>Productos</li>
          <li>Contratos</li>
          <li>Comercio digital</li>
          <li>Publicidad</li>
          <li>Y más</li>
        </ul>
      </>
    )
    },{
    id: 4,
    image: 'https://blog.storecheck.com.mx/wp-content/uploads/2023/09/perfil-del-consumidor.jpg',
    title: '¿A quiénes acompañamos?',
    text: (
      <>
        Nuestra labor está orientada a todas las personas consumidoras y usuarias,
        con especial atención a grupos en situación de vulnerabilidad o desprotección, como:
        <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
          <li>Adultos mayores</li>
          <li>Personas con discapacidad</li>
          <li>Jóvenes</li>
          <li>Sectores de bajos ingresos</li>
          <li>Usuarios del sistema de salud</li>
          <li>Usuarios de servicios financieros</li>
          <li>Usuarios de servicios públicos</li>
        </ul>
      </>
    )
    },{
    id: 5,
    image: 'https://usil-blog.s3.amazonaws.com/PROD/blog/image/Dia-del-consumidor.jpg',
    title: '¿Por qué es importante nuestro trabajo?',
    text: (
      <>
        En un contexto de creciente complejidad del mercado, es fundamental que los consumidores cuenten con herramientas para defender sus derechos.
        <br />
        <strong>Entre los principales problemas que enfrentan:</strong>
        <ul style={{ paddingLeft: "1.2rem", marginBottom: 0 }}>
          <li>Prácticas abusivas</li>
          <li>Publicidad engañosa</li>
          <li>Contratos poco claros</li>
          <li>Falta de información</li>
        </ul>
        Por eso, trabajamos para garantizar una relación más justa y equitativa entre consumidores y proveedores.
      </>
    )
    },{
    id: 6,
    image: 'https://blog.gs1mexico.org/hubfs/Blog/Analisis_Consumidor/Consumidor.jpg',
    title: '¿Cómo podés colaborar?',
    text: (
      <>
        • Difundiendo nuestras actividades y materiales educativos. <br />
        • Participando en nuestras capacitaciones o como voluntario/a. <br />
        • Comunicándote con nosotros si fuiste víctima de una práctica abusiva. <br />
        • Sumándote a nuestras campañas de concientización.
      </>
    )
    }
]
  return (
    <>
    <Carousel className='my-2 carrusel' pause="hover">
      {slides.map(({ id, image, title, text }) => (
  <Carousel.Item key={id}>
    <img className="d-block w-100" src={image} alt={`Imagen de ${title}`} />
    <Carousel.Caption>
      <h2>{title}</h2>
      <div className="carousel-text">{text}</div>
    </Carousel.Caption>
  </Carousel.Item>))}
    </Carousel>
    </>
  )
}

export default Carrusel