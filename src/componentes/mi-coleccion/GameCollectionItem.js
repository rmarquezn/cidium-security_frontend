import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useFetch } from '../../custom/useFetch';

export const GameCollectionItem = ({ todo, index, handleDeleteGame, handleCompleteGame }) => {

  const {loading, info, error} = useFetch(`https://api.rawg.io/api/games/${todo.desc}?key=11614dd0241341dba8f658e63d5ecf31`);
  console.log("abajo")
console.log(info)
  console.log("arriva")


  const{background_image, name, metacritic} = !!info && info;
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <li
      key={todo.id}
      className="list-group-item"
    >
      <Card style={{ width: '18rem' }} className="m-3">
        <Card.Img variant="top" src={background_image } />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Rating de Metacritic: {metacritic}
          </Card.Text>
        </Card.Body>
        <button
        className="btn btn-danger"
        onClick={() => handleDeleteGame(todo.id)}
      >
        Borrar
      </button>
      </Card>
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleCompleteGame(todo.id)}
      >
      </p>
      
    </li>
  )



}

