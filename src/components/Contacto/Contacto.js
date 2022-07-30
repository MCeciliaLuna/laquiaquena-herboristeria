import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="barra-contacto py-3 d-block">
    <h2 className="title-contacto text-center text-light m-0 py-2">Contacto</h2>
      <div className="w-100">
    <div className="contacto-items d-flex justify-content-evenly p-1 align-items-center">
      <iframe className="mapa rounded-3" title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.583507481541!2d-65.23858567304681!3d-26.821387199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c592e0a78df%3A0x9e3c8f080b15f305!2sLa%20Quiaque%C3%B1a%20Mendoza%20y%20castelli!5e0!3m2!1ses-419!2sar!4v1653412651030!5m2!1ses-419!2sar" width="450" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <form className="iconos-redes p-3 w-50">
      <label className="d-block fs-5 text-light">Email de Contacto</label>
      <input className="input-contacto rounded-3 p-2 border-0 d-block w-100 fs-5" type="text" name="email" pattern="^[^@]+@[^@]+\.[a-zA-Z]{2,}$" maxLength="35" required />
      <label className="d-block fs-5 text-light pt-2">Nombre / Asunto</label>
      <input className="input-contacto rounded-3 p-2 border-0 d-block w-100 fs-5" type="text" name="nombre-asunto" maxLength="40" required />
      <label className="d-block text-light fs-5 pt-2" >Mensaje</label>
      <textarea className="input-contacto rounded-3 p-2 border-0 d-block w-100 fs-5" name="mensaje" rows="5" maxLength="500" required ></textarea>
      <div className="d-flex justify-content-center w-100">
      <button className="btn my-2 px-5 text-light">Enviar</button>
      </div>
     </form>
     </div>
 </div>
 </div>
  );
};

export default Contacto;