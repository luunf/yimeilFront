import React from "react";

const Correo = ({ correo }) => {
  if (!correo) {
    return <div>Seleccione un correo para ver los detalles.</div>;
  }
  

  return (
    <div className="correo-detalle">
        <h3>De: {correo.from}</h3>
      <h3>Asunto: {correo.subject}</h3>
      <p>{correo.body}</p><br/>
      <p>URL de archivo adjunto: {correo.attachments.url}</p>
      
    </div>
  );
};

export default Correo;
