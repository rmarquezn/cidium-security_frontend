import React from 'react';
//import { GameCollectionItem } from './GameCollectionItem';
import {GameCollectionItem} from './GameCollectionItem';
export const GameCollection = ({ todoState, handleDeleteGame, handleCompleteGame }) => {
  
  return (
    <ul className=" d-flex flex-wrap">
      {todoState.map((todo, i) => (
        <GameCollectionItem
          key={todo.id}
          todo={todo}
          index={i}
          handleDeleteGame={handleDeleteGame}
          handleCompleteGame={handleCompleteGame}
        />
      ))}
    </ul>
  );
  
}
