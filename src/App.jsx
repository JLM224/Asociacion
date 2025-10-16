import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarC from "./componentes/navbar/NavbarC";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import NuestraLabor from "./paginas/NuestraLabor";
import SitiosDeInteres from "./paginas/SitiosDeInteres";
import Profesionales from "./paginas/Profesionales";
import Opina from "./paginas/Opina";
import Contactanos from "./paginas/Contactanos";
import Contacto from "./paginas/Contacto";
import Error404 from "./paginas/Error404";
import FooterC from "./componentes/footer/FooterC";
import './App.css';
import BotonWhatsapp from "./componentes/botones/BotonWhatsapp";

const App = () => {
  return (
    <div className="contenedor">
      <Router>
        <NavbarC />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/NuestraLabor" element={<NuestraLabor />} />
            <Route path="/SitiosDeInteres" element={<SitiosDeInteres />} />
            <Route path="/Profesionales" element={<Profesionales />} />
            <Route path="/Opina" element={<Opina />} />
            <Route path="/Contactanos" element={<Contactanos />} />
            <Route path="/Contacto" element={<Contacto />} />
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