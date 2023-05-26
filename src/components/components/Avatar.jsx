import React from "react";

const Avatar = ({ urlImagen }) => {
  return (
    <>
      <img src={urlImagen} alt="Avatar" className="mr-3" />
    </>
  );
};

export default Avatar;
