import React from 'react';

const PokemonSelector = (props)  => {

  const populate = props.pokemon.map((singlePokemon, index) => {
    return(<li key = {index} value = {index} >{singlePokemon.name}</li>);
  });

  function handleSelectChange(evt){
    const selectedIndex = evt.target.value;
    props.onPokemonSelected(selectedIndex);
  }

  return (<ul
    id = 'pokemon-selector'
    defaultValue = 'default'
    onClick = {handleSelectChange}
    >
    {populate}
    </ul>
  )
}

export default PokemonSelector;
