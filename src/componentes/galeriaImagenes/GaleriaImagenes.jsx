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

const campaniaEducandoConsumidores = [
  "/Educ-consumidores.jpg",
  "/Educ-consumidores2.jpg"
]

const charlaDerechoPrevisional = [
  "/Charla-derecho-previsional.jpg",
  "/Img6.jpg",
  "/Img7.jpg"
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
          data-aos-delay="300"
        >
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
            Campaña Educando a los Consumidores
          </h2>

          <p className="Texto">
            “Durante la charla de educacion a consumidores, los participantes 
            recibieron información sobre sus derechos y responsabilidades como consumidores,
            asi como recomendaciomes 
             para realizar compras informadas y seguras. La actividad incluyó un espacio de intercambio de preguntas y experiencias, promoviendo la participación y el aprendizaaje de los presentes”
          </p>
        </div>

        <div className="galeria-grid">
          {campaniaEducandoConsumidores.map((img, index) => (
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