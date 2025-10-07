import './QueHacemos.css'

const QueHacemos = () => {
const diapositivas = [{
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
    <h1 className="text-center t1">¿Qué Hacemos?</h1>
      <h4 className='t2' style={{ textAlign: 'justify' }} >Desarrollamos una variedad de actividades orientadas al fortalecimiento de los derechos de los consumidores:</h4>
    <div className="card-container">
      {diapositivas.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.titulo}</h3>
          <div className="card-description">{item.descripcion}</div>
        </div>
      ))}
    </div>
    </>
  )
}

export default QueHacemos