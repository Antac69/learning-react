import React, { useState } from "react";

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };
  const enviarDatos = event=>{
    event.preventDefault();
    console.log(datos.nombre+' '+datos.apellido)
  }
  return (
    <>
      <h1>Formulario</h1>
      <form className="row" onSubmit={enviarDatos}>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Ingrese Nombre"
            name="nombre"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Ingrese Apellido"
            name="apellido"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <h3>{datos.nombre}-{datos.apellido}</h3>
    </>
  );
}

export default Formulario;
