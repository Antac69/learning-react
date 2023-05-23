import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EjemploUno = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); 

  const [entradas, setEntradas] =useState([])
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    setEntradas([
        ...entradas,
        data
    ])
  };
  return (
    <>
      <h1>Ejemplo #1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="titulo"
          placeholder="Ingrese titulo"
          className="form-control my-2"
          {...register("titulo", {
            required: {
              value: true,
              message: "Campo obligatorio",
            },
            minLength: {
              value: 2,
              message: "Minimo 2 letras",
            },
          })}
        ></input>
        {   errors.titulo &&
            <span className="text-danger text-smal d-block mb-2">
            {errors.titulo.message}
        </span>}
        <input
          name="descripcion"
          placeholder="Ingrese titulo"
          className="form-control my-2"
          {...register("descripcion", {
            required: {
              value: true,
              message: "Campo obligatorio",
            },
          })}
        ></input>
        {   errors.descripcion &&
            <span className="text-danger text-smal d-block mb-2">
            {errors.descripcion.message}
        </span>}
        <button className="btn btn-primary ">Enviar</button>
      </form>
      <ul>
        {
            entradas.map((item,index)=>
                <li key={index}>{item.titulo} - {item.descripcion}</li>)
        }
      </ul>
    </>
  );
};

export default EjemploUno;
