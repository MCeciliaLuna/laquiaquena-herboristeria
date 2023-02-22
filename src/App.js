import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from './pages/Error/Error';
import UserProductos from './pages/UserProductos/UserProductos';
import Administrador from './pages/Administrador/Administrador';
import Login from './pages/Login/Login';
import MiPedido from './pages/MiPedido/MiPedido';
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
import Home from './pages/Home/Home';
import UserAceites from './pages/UserAceites/UserAceites';
import UserCapsulas from './pages/UserCapsulas/UserCapsulas';
import UserEnSobre from './pages/UserEnSobre/UserEnSobre';
import UserFrascos from './pages/UserFrascos/UserFrascos';
import UserHierbas from './pages/UserHierbas/UserHierbas';
import UserJabones from './pages/UserJabones/UserJabones';
import UserJarabes from './pages/UserJarabes/UserJarabes';
import UserMaca from './pages/UserMaca/UserMaca';
import UserNuez from './pages/UserNuez/UserNuez';
import UserPomadas from './pages/UserPomadas/UserPomadas';
import UserSahumerios from './pages/UserSahumerios/UserSahumerios';
import UserStevia from './pages/UserStevia/UserStevia';
import UserTe from './pages/UserTe/UserTe';
import UserYerbas from './pages/UserYerbas/UserYerbas';
import UserOtros from './pages/UserOtros/UserOtros';
import { useState } from 'react';


function App() {
  const [pedido, setPedido] = useState([])

  return (
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<UserProductos setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/aceites" element={<UserAceites setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/capsulas" element={<UserCapsulas setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/ensobre" element={<UserEnSobre setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/frascos" element={<UserFrascos setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/hierbas" element={<UserHierbas setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/jabones" element={<UserJabones setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/jarabe" element={<UserJarabes setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/maca" element={<UserMaca setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/nuezdelaindia" element={<UserNuez setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/pomadas" element={<UserPomadas setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/sahumerios" element={<UserSahumerios setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/stevia" element={<UserStevia setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/te" element={<UserTe setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/yerbas" element={<UserYerbas setPedido={setPedido} pedido={pedido} />} />
          <Route path="/productos/otros" element={<UserOtros setPedido={setPedido} pedido={pedido} />} />
        
        <Route path="/mipedido" element={<MiPedido />} />
        <Route path="/postpedido" element={<PostPedido />} />

        <Route path="/administrador" element={<Administrador />} />
        <Route path="/administrador/pedidos" element={<AdminPedidos />} />
        <Route path="/administrador/productos" element={<AdminProductos />} />
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
        <Route path="/administrador/usuarios" element={<Usuarios />} />

      <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
