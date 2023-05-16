import React, { useState } from "react";

const Lista = () => {
  const [lista, setLista] = useState([1, 2, 3, 4, 5, 7, 8, 9]);
  const [numero, setNumero] = useState(lista[lista.length-1]+1);
  const agregarElemento = () => {
    setNumero(numero + 1);
    setLista([...lista, numero]);
  };
  return (
    <>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {lista.map((item, index) => (
        <p key={index}>{item}</p> 
      ))}
    </>
  );
};

export default Lista;
