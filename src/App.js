import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from './pages/Error/Error';
import ProductosUser from './pages/ProductosUser/ProductosUser';
import Administrador from './pages/Administrador/Administrador';
import Login from './pages/Login/Login';
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
import AdminTe from './pages/AdminTe/AdminTe';
import AdminYerbas from './pages/AdminYerbas/AdminYerbas';
import AdminOtros from './pages/AdminOtros/AdminOtros';

function App() {
  return (
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/productos" element={<ProductosUser />} />
        <Route path="/mipedido" element={<PedidoPage />} />
        <Route path="/postpedido" element={<PostPedido />} />

        <Route path="/administrador" element={<Administrador />} />
        <Route path="/usuariosadmin" element={<Usuarios />} />
        <Route path="/pedidosadmin" element={<Pedidos />} />
        <Route path="/productosadmin" element={<ProductosAdmin />} />
        <Route path="/adminaceites" element={<AdminAceites />} />
        <Route path="/admincapsulas" element={<AdminCapsulas />} />
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
        <Route path="/adminte" element={<AdminTe />} />
        <Route path="/adminyerbas" element={<AdminYerbas />} />
        <Route path="/adminotros" element={<AdminOtros />} />

      <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
