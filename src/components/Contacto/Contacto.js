import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="barra-contacto py-3 d-block">
    <h2 className="text-center text-light m-0 py-2">Contacto</h2>
      <div className="d-flex justify-content-center">
    <div className="d-flex m-0 align-items-center">
      <iframe className="rounded-3" title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.583507481541!2d-65.23858567304681!3d-26.821387199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c592e0a78df%3A0x9e3c8f080b15f305!2sLa%20Quiaque%C3%B1a%20Mendoza%20y%20castelli!5e0!3m2!1ses-419!2sar!4v1653412651030!5m2!1ses-419!2sar" width="750" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div className="iconos-redes w-75 p-3">
      <label className="d-block fs-5 text-light">Email de Contacto</label>
      <input className="rounded-3 p-1 border-0 d-block w-100 fs-5" type="text" name="email" id="" />
      <label className="d-block fs-5 text-light">Nombre / Asunto</label>
      <input className="rounded-3 p-1 border-0 d-block w-100 fs-5" type="text" name="nombre-asunto" id="" />
      <label className="d-block text-light fs-5" >Mensaje</label>
      <textarea className="rounded-3 p-1 border-0 d-block w-100 fs-5" name="mensaje" rows="5"></textarea>
      <div className="d-flex justify-content-center w-100">
      <button className="btn my-2 px-5 btn-warning">Enviar</button>
      </div>
     </div>
     </div>
 </div>
 </div>
  );
};

export default Contacto;