import React, { useReducer, useEffect } from 'react';
import { GameCollection } from './GameCollection';
import { GameCollectionAdd } from './GameCollectionAdd';
import { gameCollectionReducer } from '../../hooks/gameCollectionReducer';

//Creamos la función init que va utilizar el hook useReducer para inicializar su estado.
const init = () => {
  //Regresamos el contenido de localStorage como estado inicial. Si lo que obtenemos de localStorage regresa
  // null entonces regresamos un arreglo vacío [].
  return JSON.parse(localStorage.getItem('gameListId')) || [];
}


export const GameCollectionApp = () => {

  const [todoState, dispatch] = useReducer( gameCollectionReducer,[],init)


  useEffect(() => {
    //Debido a que en localStorage sólo se pueden guardar strings y no objetos, si queremos guarar un
    // JSON debemos convertirlo a string con JSON.stringify
    localStorage.setItem('gameListId', JSON.stringify(todoState));
}, [todoState]);

 //Mostramos en la consola del navegador el estado del todo.
 console.log(todoState+"si se guardo");



  const handleNewGame = (newGameId) => {

    const action = {
      type: 'add',
      payload: newGameId
  }
    dispatch(action);
  };


  const handleDeleteGame = (gameId) => {

    const action = {
      type: 'delete',
      payload: gameId
  }
    dispatch(action);
  };

  const handleCompleteGame = (gameId) => {
    const action = {
      type: 'complete',
      payload: gameId
  }
    dispatch(action)
  }

  return (
    
    <>
    <h1>Current Game Collection ({todoState.length})</h1>
    <hr />
    {
        //Creamos la lista de TODOs
    }
    <div className="row">
        <div className="col-7">
            <GameCollection
                todoState={todoState}
                handleDeleteGame={handleDeleteGame}
                handleCompleteGame={handleCompleteGame}
            />
        </div>
        <div className="col-5">
            <GameCollectionAdd
                handleNewGame={handleNewGame}
            />
        </div>
    </div>
</>


  );
};

