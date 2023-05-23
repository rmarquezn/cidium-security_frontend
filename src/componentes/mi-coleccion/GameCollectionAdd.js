import React, { useState, useEffect, useRef } from 'react';
import { useForm } from '../../custom/useForm';
export const GameCollectionAdd = ({ handleNewGame }) => {
  const [{ descripcion }, handleInputChange, reset] = useForm({
    descripcion: ''
  });

  const handleAddGame = (e) => {

    //Evitamos el refresh del navegador con la función preventDefault()
    e.preventDefault();
    console.log("no es default")
    //Validamos que la descripción tenga información para poderlo agregar a la lista.
    if (descripcion.trim().length === 0) {
      return;
    }
    console.log("validacion realizada")

    //Creamos el nuevo TODO

    const nuevoGameId = {
      id: new Date().getTime(),
      desc: descripcion, //Esta descripcion la obtenemos de la variable 'descripcion' que obtuvimos utilizando el custom hook useForm
      done: false
    }
    console.log("juego creado")

    //guardamos el id en memoria local
    localStorage.setItem('gameListId', JSON.stringify(nuevoGameId))
    console.log("almacenado en memoria")
    console.log(nuevoGameId)

    handleNewGame(nuevoGameId)
    console.log("handle creado")
    reset();

  }


  return (
    <>
      <h4>Agregar ID videojuego</h4>
      < hr />
      <form onSubmit={handleAddGame}>
        {
          //En este input text estamos igualando value a la variable 'descripcion' que
          // obtuvimos al utilizar el custom hook useForm
        }
        <input
          type="text"
          name="descripcion"
          className="form-control"
          placeholder="Indica el id del videojuego..."
          autoComplete="off"
          value={descripcion}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  )

}
