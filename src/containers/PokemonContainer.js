import React, {Component} from 'react';
import PokemonDetail from '../components/PokemonDetail.js';
import PokemonSelector from '../components/PokemonSelector.js';
import PokemonTextBox from '../components/PokemonTextBox.js';

class PokemonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemon: null,
      filteredPokemon: [],
    }

    this.selectPokemon = this.selectPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);

  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=807';
    fetch(url)
    .then(res => res.json())
    .then((pokemon) => {
      const allPokemon = pokemon.results
      this.setState( {pokemon: allPokemon, filteredPokemon: allPokemon})
    });
  }

  fetchPokemon(url){
    fetch(url)
    .then(res => res.json())
    .then((pokemon) => {
      this.setState( {selectedPokemon: pokemon })
    });
  }

  selectPokemon(selectedIndex){
    const selectedPokemon = this.state.filteredPokemon[selectedIndex];
    this.fetchPokemon(selectedPokemon.url);
  }

  filterPokemon(text){
    if (text !== ""){
      const pokemonToFilter = [];
      this.state.pokemon.map( (pokemon) => {
        if (pokemon.name.includes(text)){
          pokemonToFilter.push(pokemon);
        }
      })
      this.setState( {filteredPokemon: pokemonToFilter} )
    } else {
      this.setState( {filteredPokemon: this.state.pokemon} )
    }
  }


  render(){
    return(
      <div>
      <h1>Gotta Catch Em All.......POKEMON!</h1>
      <PokemonTextBox
        onPokemonFiltered = {this.filterPokemon}
      />
      <PokemonSelector
        pokemon = {this.state.filteredPokemon}
        onPokemonSelected = {this.selectPokemon}
      />

      <PokemonDetail
      pokemon = {this.state.selectedPokemon}
      />

      </div>
    );
  }



}

export default PokemonContainer;
