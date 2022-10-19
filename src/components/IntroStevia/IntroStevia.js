import React from 'react';
import './IntroStevia.css';
import imagestevia from '../assets/images/estevia.jpg';
import imagesnaturalmedix from '../assets/images/naturalmedix.jpg'

const IntroStevia = () => {
  return (
    <div className="intro-stevia h-auto">
    <div className="contenedor-stevia col-6">
      <img src={imagestevia} alt="stevia" className="stevia-img" />
      <div className="stevia-text">
      <h2 className="title-cards text-light">Stevia Original Peruana</h2>
      <h5 className="text-light">Encontrá en nuestros locales la Stevia Peruana Original</h5>
      <button className=" button-stevia btn" data-bs-toggle="modal" data-bs-target="#exampleModal1"><strong>Más info</strong></button>
      </div>
    </div>
     <div className="contenedor-stevia col-6">
     <img src={imagesnaturalmedix} alt="" className="stevia-img" />
     <div className="stevia-text">
      <h2 className="title-cards text-light">Cápsulas Natural Medix</h2>
      <h5 className="text-light">Trabajamos con la mejor medicina natural del mercado</h5>
      <button className="button-stevia btn" data-bs-toggle="modal" data-bs-target="#exampleModal2"><strong>Más info</strong></button>
      </div>
   </div>


   <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content fondo-modal">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="text-modal text-center modal-body text-light">
      Este endulzante natural ofrece múltiples beneficios: es un buen reemplazo del azúcar, tiene aporte calórico casi nulo, regula la presión arterial, posee antioxidantes, reduce el colesterol, beneficia la salud bucal y la piel, ayuda a prevenir la osteoporosis y posee propiedades anti diarreicas, anti hiperglucémicas, antihipertensivas, diuréticas, antiinflamatoria e inmunomoduladoras.<br />
      <h2 className="fs-4 mt-2">¡Nosotros tenemos la Stevia Peruana Original!</h2>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <a href="/productos">
        <button type="button" class="boton-modal btn" data-bs-dismiss="modal">Ver todos los productos</button>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content fondo-modal">
      <div class="modal-header">
        {/* <h4 class="modal-title text-light" id="exampleModalLabel">Cápsulas Natural Medix</h4> */}
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="text-modal text-center modal-body text-light fs-5">
      Natural medix ofrece suplementos que benefician al sistema inmunológico, ayudan a la transformación del cuerpo y proveen el bienestar general.<br />
      <h2 className="fs-4 mt-2">¡En nuestros locales encontrás sus mejores productos!</h2>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <a href="/productos">
        <button type="button" class="boton-modal btn" data-bs-dismiss="modal">Ver todos los productos</button>
        </a>
      </div>
    </div>
  </div>
</div>
   </div>
  );
};

export default IntroStevia;