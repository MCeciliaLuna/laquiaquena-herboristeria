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
import AdminAceites from './pages/AdminAceites/AdminAceites';
import AdminCapsulas from './pages/AdminCapsulas/AdminCapsulas';
import AdminEnSobre from './pages/AdminEnSobre/AdminAceites';
import AdminFrascos from './pages/AdminFrascos/AdminFrascos';
import AdminHierbas from './pages/AdminHierbas/AdminHierbas';
import AdminJabones from './pages/AdminJabones/AdminJabones';
import AdminJarabes from './pages/AdminJarabes/Adminjarabes';
import AdminMaca from './pages/AdminMaca/AdminMaca';
import AdminNuez from './pages/AdminNuez/AdminNuez';
import AdminPomadas from './pages/AdminPomadas/AdminPomadas';
import AdminSahumerios from './pages/AdminSahumerios/AdminSahumerios';
import AdminSytevia from './pages/AdminStevia/AdminStevia';

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
        <Route path="/adminaceites" element={<AdminAceites />} />
        <Route path="/adminensobre" element={<AdminEnSobre />} />
        <Route path="/adminfrascos" element={<AdminFrascos />} />
        <Route path="/adminhierbas" element={<AdminHierbas />} />
        <Route path="/adminjabones" element={<AdminJabones />} />
        <Route path="/adminjarabe" element={<AdminJarabes />} />
        <Route path="/adminmaca" element={<AdminMaca />} />
        <Route path="/adminnuezdelaindia" element={<AdminNuez />} />
        <Route path="/adminpomadas" element={<AdminPomadas />} />
        <Route path="/adminsahumerios" element={<AdminSahumerios />} />
        <Route path="/adminstevia" element={<AdminSytevia />} />
        <Route path="/admincapsulas" element={<AdminCapsulas />} />
        <Route path="/admincapsulas" element={<AdminCapsulas />} />
        <Route path="/admincapsulas" element={<AdminCapsulas />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
