import React from 'react';
import './Carousel.css';
import banner from '../assets/images/banner.png';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="banner-carousel d-flex justify-content-center align-items-center">
    <img src={banner} alt="logo" className="w-100"/>
    <Link to="/productos">
    <button className="btn text-light py-2 px-3 d-block text-center banner-button">
        <h4 className="mb-0 text-center">Productos</h4>
        </button>
        </Link>
    </div>
  <div className="carousel-inner carousel-padre">
    </div>
</div>
  );
};

export default Carousel;