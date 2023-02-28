import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./FormPedido.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormPedido = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const producto = JSON.parse(localStorage.getItem("pedido"));

  
  
  
  
  const {
    register,
    handleSubmit,
  } = useForm();
  const [sendPedido, setSendPedido] = useState();
  
  const enviarPedido = async (data) => {
    await axios
      .post("https://laquiaquenaherboristeriabe.onrender.com/crearpedido", data)
      .then((resp) => {
        setSendPedido(resp.data);
      });
      alert(
        "El pedido ha sido enviado exitosamente. Si pagaste, envianos el comprobante vía whatsapp"
        );
        window.location.href = "/home";
      };
      
      const usuarioNombre = JSON.stringify(
        `${usuario.nombre} ${usuario.apellido}`
        ).replace(/['"]+/g, "");
        const usuarioDireccion = JSON.stringify(`${usuario.direccion}`).replace(
          /['"]+/g,
          ""
          );
          const usuarioTelefono = JSON.stringify(`${usuario.telefono}`).replace(
            /['"]+/g,
            ""
            );

  const pedidoString = JSON.stringify(producto).replace(/[[\]'"]+/g, "", / /g, ",\n")
  const pedido = pedidoString.replace(/,/g, "\n")
  const precioTotal = JSON.stringify(producto).replace(/[^0-9\\.]+/g, "")
  const horaJs = new Date();
  const horaString = horaJs.toString();
  const hora = horaString.substr(4, 17);

  console.log(producto)

  // const removeItem = () => {
  //   localStorage.removeItem("producto");
  //   window.location.reload();
  // };

  const [copied, setCopied] = useState(false);
  const copiedCbu = (event) => {
    setCopied(true);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(enviarPedido)}>
      <div className="m-3">
        <div className="height-pedidos">
          <div className="d-flex justify-content-center">
            <div className="w-50 form-width">
              <textarea
                className="text-mipedido text-center form-control d-block mb-1"
                {...register("pedido", { required: true })}
                value={pedido}
                rows="7"
              />
              <label className="text-center w-100 text-light mt-1">
                Total:
              </label>
              <div className="d-flex justify-content-center align-items-center">
                <p className="d-flex text-light mb-0 me-2 fs-4">$</p>
                <input
                  type="text"
                  className="text-mipedido text-center form-control w-25"
                  {...register("precio", { required: true })}
                  value={precioTotal}
                />
              </div>
              <hr className="text-light" />

              <input
                type="text"
                className="d-none"
                value={hora}
                {...register("datetime", { required: true })}
              />
              <label className="text-center w-100 text-light mb-2">
                Revisá si tus datos están correctos. Podés modoficarlos si es
                necesario
              </label>
              <input
                type="text"
                className="text-mipedido text-center form-control d-block mb-1"
                defaultValue={usuarioNombre}
                {...register("nombre", { required: true })}
                required
              />
              <input
                type="text"
                className="text-mipedido text-center form-control d-block mb-1"
                defaultValue={usuarioDireccion}
                {...register("direccion", { required: true })}
                required
              />
              <input
                type="number"
                className="text-mipedido text-center form-control d-block mb-1"
                defaultValue={usuarioTelefono}
                {...register("telefono", { required: true })}
                required
              />
              <select
                className="text-mipedido form-select text-center mb-1"
                aria-label="Default select example"
                {...register("entrega", { required: true })}
                required
              >
                <option value="Retiro del local">Retiro del local</option>
                <option value="Envío">Envío</option>
              </select>
              <div className="d-flex justify-content-center align-items-center d-block my-2">
                <CopyToClipboard text="21938729084940013">
                  <div className="d-flex align-items-center">
                    <button
                      className="m-1 btn text-light d-flex align-items-center"
                      onClick={copiedCbu}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-credit-card-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                      </svg>
                      Pagá transfiriendo a nuestro CBU
                    </button>
                  </div>
                </CopyToClipboard>
                <p className="mb-0">
                  {copied && (
                    <span className="text-light text-center fs-6 px-1 d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-clipboard-check-fill mx-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3Zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3Z" />
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5v-1Zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                      </svg>
                      CBU copiado al portapapeles
                    </span>
                  )}
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <select
                  className="text-mipedido form-select text-center p-0 mb-0 w-50 input-center"
                  aria-label="Default select example"
                  {...register("pago", { required: true })}
                  required
                >
                  <option className="p-0" value="NO PAGADO">
                    No pagado
                  </option>
                  <option className="p-0" value="PAGADO">
                    Pagado por transferencia
                  </option>
                </select>
              </div>
              <div className="w-100 text-center mt-3">
                <button type="submit" className="btn text-light">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormPedido;
