import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error from './pages/Error/Error';
import UserProductos from './pages/UserProductos/UserProductos';
import Administrador from './pages/Administrador/Administrador';
import Login from './pages/Login/Login';
import MiPedido from './pages/MiPedido/MiPedido';
import AdminProductos from './pages/AdminProductos/AdminProductos';
import AdminPedidos from './pages/AdminPedidos/AdminPedidos';
import Home from './pages/Home/Home';
import { useState } from 'react';


function App() {
  const [pedido, setPedido] = useState([])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<UserProductos setPedido={setPedido} pedido={pedido} />} />
          <Route path="/mipedido" element={<MiPedido setPedido={setPedido} pedido={pedido} />} />

        <Route path="/login" element={<Login />} />

          <Route path="/administrador" element={<Administrador />} />
          <Route path="/administrador/pedidos" element={<AdminPedidos />} />
          <Route path="/administrador/productos" element={<AdminProductos />} />

        <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
