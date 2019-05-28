import React from 'react';

const PokemonTextBox = (props) => {
  
  function onPokemonFiltered(evt){
    const textValue = evt.target.value;
    props.onPokemonFiltered(textValue);
  }

  return(<input type = "text" onChange = {onPokemonFiltered}/>);
}

export default PokemonTextBox;
