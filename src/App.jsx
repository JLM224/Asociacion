import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarC from './componentes/navbar/NavbarC'
import PaginaPrincipal from "./paginas/PaginaPrincipal";

const App = () => {
  return (
    <>
    <Router>
    <NavbarC/>
      <Routes>
        <Route path="/" element={<PaginaPrincipal/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App