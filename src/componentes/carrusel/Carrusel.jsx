import Carousel from 'react-bootstrap/Carousel';
import './Carrusel.css'

const Carrusel = () => {
const slides = [
    {
    id: 1,
    image: 'https://inside.pe/upload/img/notas/16479056743738233a377.jpg',
    text: (
      <>
        <blockquote className="blockquote text-center my-4"><p className="mb-0 fst-italic"> “En ADEP-CU creemos que una sociedad informada y consciente es la base de un mercado más justo y transparente.” </p> 
        </blockquote>
      </>
    )
    },{
    id: 2,
    image: 'https://www.santanderopenacademy.com/es/blog/comportamiento-del-consumidor/_jcr_content/root/hero/imageMobile.coreimg.jpeg/1733740659900/comportamiento-del-consumidor-1.jpeg',
    text: (
      <>
        <blockquote className="blockquote text-center my-4"><p className="mb-0 fst-italic"> “Buscamos garantizar que los consumidores y usuarios tengan acceso a una información clara, servicios adecuados y sobre todo, juntos facilitar el acceso a canales efectivos para defender sus intereses con: Transparencia: todo reclamo merece ser escuchado y respondido con claridad.” </p> 
        </blockquote> 
      </>
    )
    },{
    id: 3,
    image: 'https://empresas.mercadopago.com.br/hs-fs/hubfs/imagens/blog/empresas/psicologia-do-consumidor.jpg?width=670&name=psicologia-do-consumidor.jpg',
    text: (
      <>
        <blockquote className="blockquote text-center my-4"><p className="mb-0 fst-italic"> “Nuestro equipo de profesionales está preparado para orientarte, representarte y acompañarte en cada paso.” </p> 
        </blockquote>
      </>
    )
    },{
    id: 4,
    image: 'https://blog.storecheck.com.mx/wp-content/uploads/2023/09/perfil-del-consumidor.jpg',
    text: (
      <>
      <blockquote className="blockquote text-center my-4">
      <p className="mb-0 fst-italic">
        “Trabajamos para proteger a los consumidores frente a abusos, publicidad engañosa y falta de información, promoviendo relaciones justas y transparentes con los proveedores.”
      </p>
      </blockquote>
      </>
    )
    },{
    id: 5,
    image: 'https://usil-blog.s3.amazonaws.com/PROD/blog/image/Dia-del-consumidor.jpg',
    text: (
      <>
      <blockquote className="blockquote text-center my-4">
      <p className="mb-0 fst-italic">
        “En ADEP-CU apoyamos a todos los consumidores, especialmente a quienes se encuentran en situación de vulnerabilidad o desprotección.”
      </p>
      </blockquote>
      </>
    )
    },{
    id: 6,
    image: 'https://blog.gs1mexico.org/hubfs/Blog/Analisis_Consumidor/Consumidor.jpg',
    text: (
      <>
      <blockquote className="blockquote text-center my-4">
      <p className="mb-0 fst-italic">
        “Podés colaborar difundiendo nuestras acciones, participando como voluntario/a y sumándote a nuestras campañas y capacitaciones.”
      </p>
      </blockquote>
      </>
    )
    }
]
  return (
    <>
    <Carousel className='my-2 carrusel' pause="hover" fade>
      {slides.map(({ id, image, text }) => (
  <Carousel.Item key={id}>
    <img className="d-block w-100" src={image} />
    <Carousel.Caption>
      <div className="carousel-text">{text}</div>
    </Carousel.Caption>
  </Carousel.Item>))}
    </Carousel>
    </>
  )
}

export default Carrusel