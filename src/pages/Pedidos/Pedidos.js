import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TablePedidosAdmin from '../../components/TablePedidosAdmin/TablePedidosAdmin';

const Pedidos = () => {
  return (
    <>
    <Navbar />
      <TablePedidosAdmin />
      <Footer />
    </>
  );
};

export default Pedidos;