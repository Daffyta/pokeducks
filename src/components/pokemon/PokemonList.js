import React from 'react';

import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons }) => (
    <div className="col s12">
        <ul className="collection">
        {pokemons.map(pokemon => (<PokemonItem key={pokemon.name} pokemon={pokemon} />))}
        </ul>
    </div>
);

export default PokemonList;