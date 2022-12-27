import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Productos from './pages/Productos/Productos';
import LoginPage from './pages/LoginPage/LoginPage'
import UsuarioLogueado from './pages/UsuarioLogueado/UsuarioLogueado';
import LoginInicial from './pages/LoginInicial/LoginInicial';
import PedidoPage from './pages/PedidoPage/PedidoPage';

function App() {
  return (
      <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/" element={<LoginInicial />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/usuariologueado" element={<UsuarioLogueado />} />
        <Route path="/mipedido" element={<PedidoPage />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
