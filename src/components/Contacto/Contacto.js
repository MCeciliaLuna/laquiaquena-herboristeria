import React from 'react';

const Contacto = () => {
  return (
    <div className="py-3">
    <h2 className="text-center m-0">Contacto</h2>
    <div className="d-flex w-100">
    <div className="d-flex w-50 justify-content-center py-3">
      <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.583507481541!2d-65.23858567304681!3d-26.821387199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c592e0a78df%3A0x9e3c8f080b15f305!2sLa%20Quiaque%C3%B1a%20Mendoza%20y%20castelli!5e0!3m2!1ses-419!2sar!4v1653412651030!5m2!1ses-419!2sar" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="iconos-redes w-50 d-flex align-items-center justify-content-start">
    <img className="w-25 m-1 p-2" src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png" alt="" />
      <img className="w-25 m-1 p-2" src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="" />
      <img className="w-25 m-1 p-2" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png" alt="" />
     </div>

 </div>
 </div>
  );
};

export default Contacto;