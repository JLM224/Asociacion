import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./GaleriaImagenes.css";

const imagenes = [
  "/Img1.jpg",
  "/Img2.jpg",
  "/Img3.jpg",
  "/Img4.jpg",
  "/Img5.jpg",
]

const charlaDerechoPrevisional = [
  "/Charla-derecho-previsional.jpg",
  "/Img6.jpg",
  "/Img7.jpg"
]

const disertacionLegislatura = [
  "/Disertacion.jpeg",
  "/Disertacion1.jpeg",
  "/Disertacion2.jpeg",
  "/Disertacion3.jpeg",
  "/Disertacion4.jpeg",
  "/Disertacion5.jpeg",
]

const GaleriaImagenes = () => {
  const [imagenActiva, setImagenActiva] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section className="galeria-section">
        <div className="contenido-header" data-aos="fade-up">
          <h2 className="T2">
            Charla de concientización sobre el consumo en la Fundación Creando
            Sonrisas ubicada en San Miguel de Tucumán
          </h2>

          <p className="Texto">
            “Junto a nuestros profesionales, compartimos con jóvenes y adultos de distintas edades una
             jornada de reflexión, concientización y aprendizaje, promoviendo el diálogo, el 
             acompañamiento y el fortalecimiento de la comunidad.”
          </p>
        </div>

        <div className="galeria-grid">
          {imagenes.map((img, index) => (
            <div
              className="card-imagen"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setImagenActiva(img)}
            >
              <img src={img} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>

        <div
          className="video-container"
          data-aos="fade-up"
          data-aos-delay="300">
          <h2 className="video-titulo">Jornada en la Legislatura de Tucumán</h2>

          <p className="Texto">
            “Nuestros profesionales participaron en una reunión en la Legislatura de Tucumán, donde se 
            abordaron los próximos objetivos y acciones orientadas a fortalecer la concientización
            de la comunidad en relación con el consumo y su impacto social.”
          </p>

          <video controls>
            <source src="/Video.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </section>

      <section className="galeria-section">
        <div className="contenido-header" data-aos="fade-up">
          <h2 className="T2">
            Charla sobre derecho previsional
          </h2>

          <p className="Texto">
            “En esta charla abordamos los principales aspectos del derecho previsional siendo uno 
            de los temas que más consultas genera analizando los desafios actuales del sistema y 
            las novedades más relevantes. A lo largo del encuentro se desarrollaron temas 
            vinculados los requisitos para acceder a las prestaciones, los recientes cambios 
            normativos generando un espacio de intercambio donde los participantes pudieron 
            plantear consultas y compartir experiencias sobre lo que es el derecho previsional.”
          </p>
        </div>

        <div className="galeria-grid">
          {charlaDerechoPrevisional.map((img, index) => (
            <div
              className="card-imagen"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setImagenActiva(img)}
            >
              <img src={img} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className="galeria-section">
        <div className="contenido-header" data-aos="fade-up">
          <h2 className="T2">
            Disertación en la Honorable Legislatura de Tucumán sobre los derechos del consumidor frente
            a préstamos, deudas y tarjetas de crédito
          </h2>

          <p className="Texto">
            “En la vida cotidiana, muchas personas recurren a préstamos y tarjetas de crédito, lo que puede generar deudas y situaciones de vulnerabilidad. Por eso, es fundamental conocer los derechos que protegen a los consumidores y las herramientas disponibles para evitar abusos y reclamar ante situaciones injustas. Por lo que en esta disertación hablaremos sobre aquellos derechos y normas que buscan garantizar que las relaciones entre consumidores y entidades financieras sean transparentes y justas, analizando qué información se debe recibir antes de contratar un servicio financiero, sus derechos frente al endeudamiento y las prácticas de cobro y qué aspectos se deben tener en cuenta al utilizar una tarjeta de crédito con el objetivo de comprender que al conocer nuestros derechos como consumidores no solo nos permite defendernos ante situaciones injustas, sino también tomar decisiones financieras de una manera más responsable y segura.”
          </p>
        </div>

        <div className="galeria-grid">
          {disertacionLegislatura.map((img, index) => (
            <div
              className="card-imagen"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setImagenActiva(img)}
            >
              <img src={img} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="my-3 video-container">
          <video controls>
            <source src="/Disertacion-Video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {imagenActiva && (
        <div
          className="modal-imagen"
          onClick={() => setImagenActiva(null)}
        >
          <img src={imagenActiva} alt="Vista completa" />
        </div>
      )}
    </>
  );
};

export default GaleriaImagenes;