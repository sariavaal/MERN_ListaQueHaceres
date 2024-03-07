import { useState } from "react";

function PokemonButton() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807");
    const data = await response.json();
    const names = data.results.map((pokemon) => pokemon.name);
    setPokemonList(names);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <button type="button" className="btn btn-primary mt-3 mb-3" onClick={fetchPokemon}>
        Fetch Pokemon
      </button>
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon}</li>
          ))}
        </ul>
      </div>
  );
}

export default PokemonButton;
