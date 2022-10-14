import React from 'react';
import './Carousel.css';
import banner from '../assets/images/banner.png';
import imagecarousel from '../assets/images/carousel.jpg';

const Carousel = () => {
  return (
    <div className="carousel">
    <div className="carousel">
    <img src={banner} className="banner-carousel" alt="logo" />
  <div className="carousel-inner carousel-padre">
    <div className="carousel-item active">
      <img src={imagecarousel} className="d-block w-100" alt="..." />
    </div>
    </div>
  </div>
</div>
  );
};

export default Carousel;