import DesplazamientoArriba from "./funcionesAuxiliares/DesplazamientoArriba";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CharlasInstitucionales from "./paginas/CharlasInstitucionales";
import BotonWhatsapp from "./componentes/botones/BotonWhatsapp";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import SitiosDeInteres from "./paginas/SitiosDeInteres";
import NuestrosCasos from "./paginas/NuestrosCasos";
import NavbarC from "./componentes/navbar/NavbarC";
import FooterC from "./componentes/footer/FooterC";
import NuestraLabor from "./paginas/NuestraLabor";
import Contacto from "./paginas/Contacto";
import Error404 from "./paginas/Error404";
import { useEffect } from "react";
import Aos from "aos";
import './App.css';

const App = () => {
  useEffect(() => {
    Aos.init({
    once: true,
    offset: 80,
    })
  }, [])
  return (
    <div className="contenedor">
      <Router>
        <DesplazamientoArriba />
        <NavbarC />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/NuestraLabor" element={<NuestraLabor />} />
            <Route path="/SitiosDeInteres" element={<SitiosDeInteres />} />
            <Route path="/NuestrosCasos" element={<NuestrosCasos />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/CharlasInstitucionales" element={<CharlasInstitucionales />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <BotonWhatsapp/>
        </div>
      </Router>
      <FooterC/>      
    </div>
  )
}


export default App