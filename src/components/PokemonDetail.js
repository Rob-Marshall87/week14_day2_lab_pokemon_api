import React from 'react';

const PokemonDetail = ({pokemon})  => {
  if (pokemon === null){
    return(
      <p>Select a pokemon from the list...</p>
    );
  }

  const allMoves = (moves)=> {
    return moves.map((move, index) => {
     return(<li key ={index}>{move.move.name}</li>);
   });
  }

  return (
    <div>
    <h1>{pokemon.name}</h1>
    <img src = {pokemon.sprites.front_default}></img>
    <h2>Weight:{pokemon.weight}</h2>
    <ul>{allMoves(pokemon.moves)}</ul>
    </div>
  )
}

export default PokemonDetail;
