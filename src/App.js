import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Productos from './pages/Productos/Productos';
import LoginPage from './pages/LoginPage/LoginPage'
import UsuarioLogueado from './pages/UsuarioLogueado/UsuarioLogueado';

function App() {
  return (
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/usuariologueado" element={<UsuarioLogueado />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
