import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from './pages/Error/Error';
import ProductosUser from './pages/ProductosUser/ProductosUser';
import Administrador from './pages/Administrador/Administrador';
import Login from './pages/Login/Login';
import PedidoPage from './pages/PedidoPage/PedidoPage';
import Usuarios from './pages/Usuarios/Usuarios';
import AdminProductos from './pages/AdminProductos/AdminProductos';
import AdminPedidos from './pages/AdminPedidos/AdminPedidos';
import PostPedido from './pages/PostPedido/PostPedido';
import AdminAceites from './pages/AdminAceites/AdminAceites';
import AdminCapsulas from './pages/AdminCapsulas/AdminCapsulas';
import AdminEnSobre from './pages/AdminEnSobre/AdminEnSobre';
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
        <Route path="/administrador/pedidos" element={<AdminPedidos />} />
        <Route path="/administrador/productos" element={<AdminProductos />} />
        <Route path="/usuariosadmin" element={<Usuarios />} />
        <Route path="/administrador/productos/aceites" element={<AdminAceites />} />
        <Route path="/administrador/productos/capsulas" element={<AdminCapsulas />} />
        <Route path="/administrador/productos/ensobre" element={<AdminEnSobre />} />
        <Route path="/administrador/productos/frascos" element={<AdminFrascos />} />
        <Route path="/administrador/productos/hierbas" element={<AdminHierbas />} />
        <Route path="/administrador/productos/jabones" element={<AdminJabones />} />
        <Route path="/administrador/productos/jarabe" element={<AdminJarabes />} />
        <Route path="/administrador/productos/maca" element={<AdminMaca />} />
        <Route path="/administrador/productos/nuezdelaindia" element={<AdminNuez />} />
        <Route path="/administrador/productos/pomadas" element={<AdminPomadas />} />
        <Route path="/administrador/productos/sahumerios" element={<AdminSahumerios />} />
        <Route path="/administrador/productos/stevia" element={<AdminSytevia />} />
        <Route path="/administrador/productos/te" element={<AdminTe />} />
        <Route path="/administrador/productos/yerbas" element={<AdminYerbas />} />
        <Route path="/administrador/productos/otros" element={<AdminOtros />} />

      <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
