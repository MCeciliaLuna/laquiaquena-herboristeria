import React from 'react';
import './IntroStevia.css';

const IntroStevia = () => {
  return (
    <div className="card mb-3 d-flex align-items-center">
  <div className="row g-0">
      <div className="text-intro-stevia card-body text-center">
        <h2 className="title-stevia card-title">Intro Stevia</h2>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-outline-danger">Ver más</button>
    </div>
  </div>
  <div className="d-flex justify-content-around">
      <img src="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 img-fluid rounded-start image-stevia" alt="..." />
      <img src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 img-fluid rounded-start image-stevia" alt="..." />
    <img src="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 img-fluid rounded-start image-stevia" alt="..." />
      <img src="https://images.pexels.com/photos/409696/pexels-photo-409696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="col-3 img-fluid rounded-start image-stevia" alt="..." />
    </div>
 </div>
  );
};

export default IntroStevia;