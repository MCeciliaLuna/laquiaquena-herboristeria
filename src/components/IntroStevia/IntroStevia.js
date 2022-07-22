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
      <button className=" button-stevia btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal1"><strong>Más info</strong></button>
      </div>
    </div>
     <div className="contenedor-stevia col-6">
     <img src="https://images.pexels.com/photos/66869/green-leaf-natural-wallpaper-royalty-free-66869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="stevia-img" />
     <div className="stevia-text">
      <h2 className="title-cards text-light">Cápsulas Natural Medix</h2>
      <h5 className="text-light">Trabajamos con la mejor medicina natural del mercado</h5>
      <button className="button-stevia btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal2"><strong>Más info</strong></button>
      </div>
   </div>


   <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content fondo-modal">
      <div class="modal-header">
        <h5 class="modal-title text-light" id="exampleModalLabel">Stevia Original Peruana</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque voluptate tempora placeat nesciunt? Necessitatibus, autem? Fuga saepe soluta modi expedita aliquid vitae consequatur at itaque, sed, accusamus reiciendis quis.
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <a href="/producto">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Ver todos los productos</button>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content fondo-modal">
      <div class="modal-header">
        <h5 class="modal-title text-light" id="exampleModalLabel">Cápsulas Natural Medix</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cumque voluptate tempora placeat nesciunt? Necessitatibus, autem? Fuga saepe soluta modi expedita aliquid vitae consequatur at itaque, sed, accusamus reiciendis quis.
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <a href="/producto">
        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Ver todos los productos</button>
        </a>
      </div>
    </div>
  </div>
</div>
   </div>
  );
};

export default IntroStevia;