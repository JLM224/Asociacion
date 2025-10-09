import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarC from "./componentes/navbar/NavbarC";
import PaginaPrincipal from "./paginas/PaginaPrincipal";
import './App.css';
import FooterC from "./componentes/footer/FooterC";
import Contacto from "./paginas/Contacto";
import Error404 from "./paginas/Error404";

const App = () => {
  return (
    <div className="contenedor">
      <Router>
        <NavbarC />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
      <FooterC/>
    </div>
  );
};


export default App