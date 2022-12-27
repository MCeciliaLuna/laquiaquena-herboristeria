import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import TablePedido from '../../components/TablePedido/TablePedido';

const PedidoPage = () => {
  return (
    <>
    <Navbar />
      <TablePedido />
      <Footer />
    </>
  );
};

export default PedidoPage;