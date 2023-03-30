import React from 'react';
import banner from '../assets/images/banner.png';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const pushProductos = () => {
    alert('💡 𝗣𝗥𝗘𝗦𝗜𝗢𝗡𝗔́ en la 𝗙𝗢𝗧𝗢 de cada producto para conocer sus 𝙋𝙍𝙊𝙋𝙄𝙀𝘿𝘼𝘿𝙀𝙎 𝙔 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙄́𝙎𝙏𝙄𝘾𝘼𝙎 💡')
  }
  return (
    <div className="carousel">
      <div className="banner-carousel d-flex justify-content-center align-items-center">
    <img src={banner} alt="logo" className="w-100"/>
        <Link to="/productos">
          <button className="button-carousel btn text-light" onClick={pushProductos}><h3 className="mb-0 p-1">PRODUCTOS</h3></button>
        </Link>
        </div>
  <div className="carousel-inner carousel-padre">
    </div>
</div>
  );
};

export default Carousel;