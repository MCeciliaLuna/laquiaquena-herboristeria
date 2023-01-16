import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Productos from './pages/Productos/Productos';
import UsuarioLogueado from './pages/UsuarioLogueado/UsuarioLogueado';
import LoginInicial from './pages/LoginInicial/LoginInicial';
import PedidoPage from './pages/PedidoPage/PedidoPage';
import Usuarios from './pages/Usuarios/Usuarios';
import ProductosAdmin from './pages/ProductosAdmin/ProductosAdmin';
import Pedidos from './pages/Pedidos/Pedidos';
import PostPedido from './pages/PostPedido/PostPedido';

function App() {
  return (
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginInicial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/mipedido" element={<PedidoPage />} />
        <Route path="/postpedido" element={<PostPedido />} />
        <Route path="*" element={<Error />} />
        <Route path="/adminpage" element={<UsuarioLogueado />} />
        <Route path="/usuariosadmin" element={<Usuarios />} />
        <Route path="/productosadmin" element={<ProductosAdmin />} />
        <Route path="/pedidosadmin" element={<Pedidos />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
