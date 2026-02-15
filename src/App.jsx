import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarC from "./componentes/navbar/NavbarC";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import NuestraLabor from "./paginas/NuestraLabor";
import SitiosDeInteres from "./paginas/SitiosDeInteres";
import Opina from "./paginas/Opina";
import Contacto from "./paginas/Contacto";
import Error404 from "./paginas/Error404";
import FooterC from "./componentes/footer/FooterC";
import BotonWhatsapp from "./componentes/botones/BotonWhatsapp";
import CharlasInstitucionales from "./paginas/CharlasInstitucionales";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import './App.css';

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true
    })
  }, [])

  const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    Aos.refresh()
  }, [pathname])

  return null
}
  return (
    <div className="contenedor">
      <Router>
        <ScrollToTop />
        <NavbarC />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/NuestraLabor" element={<NuestraLabor />} />
            <Route path="/SitiosDeInteres" element={<SitiosDeInteres />} />
            <Route path="/Opina" element={<Opina />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/CharlasInstitucionales" element={<CharlasInstitucionales />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <BotonWhatsapp/>
        </div>
      </Router>
      <FooterC/>      
    </div>
  );
};


export default App