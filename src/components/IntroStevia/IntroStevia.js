import React from 'react';
import './IntroStevia.css';

const IntroStevia = () => {
  return (
    <div className="intro-stevia">
    <div className="contenedor-stevia col-6">
      <img src="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="stevia-img" />
      <div className="stevia-text">
      <h2 className="title-cards text-light">Stevia Original Peruana</h2>
      <h5 className="text-light">Encontrá en nuestros locales la Stevia Peruana Original</h5>
      <button className=" button-stevia btn btn-light"><strong>Más info</strong></button>
      </div>
    </div>
     <div className="contenedor-stevia col-6">
     <img src="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="stevia-img" />
     <div className="stevia-text">
      <h2 className="title-cards text-light">Cápsulas Natural Medix</h2>
      <h5 className="text-light">Trabajamos con la mejor medicina natural del mercado</h5>
      <button className="button-stevia btn btn-light"><strong>Más info</strong></button>
      </div>
   </div>
   </div>
  );
};

export default IntroStevia;