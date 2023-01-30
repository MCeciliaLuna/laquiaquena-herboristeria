import React from 'react';
import banner from '../assets/images/banner.png';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="banner-carousel d-flex justify-content-center align-items-center">
    <img src={banner} alt="logo" className="w-100"/>
        <Link to="/productos">
          <button className="button-carousel btn text-light"><h3 className="mb-0 p-1">PRODUCTOS</h3></button>
        </Link>
        </div>
  <div className="carousel-inner carousel-padre">
    </div>
</div>
  );
};

export default Carousel;