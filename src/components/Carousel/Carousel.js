import React from 'react';
import './Carousel.css';
import banner from '../assets/images/banner.png';

const Carousel = () => {
  return (
    <div className="carousel">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <img src={banner} className="banner-carousel" alt="logo" />
  <div className="carousel-inner carousel-padre">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg?auto=compress&cs=tinysrgb&h=550&w=1060" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&h=550&w=1060" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/107606/pexels-photo-107606.jpeg?auto=compress&cs=tinysrgb&h=550&w=1060" className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
</div>
  );
};

export default Carousel;