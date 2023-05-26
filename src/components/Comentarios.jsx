import React from "react";
import Avatar from './components/Avatar.jsx'


const Comentarios = ({sujeto}) => {
    const {urlImagen,nombre,texto}=sujeto
  return (
    <>
      <h1>Comentarios</h1>
      <hr></hr>
      <div className="media">
        <Avatar urlImagen={urlImagen}></Avatar>
        <div className="media-body">
          <h5 className="mt-0">{nombre}</h5>
          {texto}
        </div>
      </div>
    </>
  );
};

export default Comentarios;
