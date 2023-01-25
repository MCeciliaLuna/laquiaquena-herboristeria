import React from 'react';
import './Carousel.css';
import banner from '../assets/images/banner.png';

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="banner-carousel d-flex justify-content-center align-items-center">
    <img src={banner} alt="logo" className="w-100"/>
        </div>
  <div className="carousel-inner carousel-padre">
    </div>
</div>
  );
};

export default Carousel;