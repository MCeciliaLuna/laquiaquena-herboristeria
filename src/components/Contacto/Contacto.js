import React from 'react';

const Contacto = () => {
  return (
    <div className="d-flex justify-content-evenly w-100">

    <div className="d-flex w-50 justify-content-center">
      <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.583507481541!2d-65.23858567304681!3d-26.821387199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c592e0a78df%3A0x9e3c8f080b15f305!2sLa%20Quiaque%C3%B1a%20Mendoza%20y%20castelli!5e0!3m2!1ses-419!2sar!4v1653412651030!5m2!1ses-419!2sar" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div className="w-50 d-flex align-items-center justify-content-center">
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger">Left</button>
  <button type="button" className="btn btn-warning">Middle</button>
  <button type="button" className="btn btn-success">Right</button>
     </div>
     </div>

 </div>
  );
};

export default Contacto;