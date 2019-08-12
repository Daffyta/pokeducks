import React from 'react';

import TypesItem from './TypesItem';

const PokemonTypes = ({ typePokemon }) => (
    <div className="col s12">
        <ul className="collection">
            {typePokemon.map(type => (<li className="collection-item" key={type.name}>{type.name}</li>))}
        </ul>
    </div>
);

export default PokemonTypes; 

//{typePokemons.map(typePokemon => (<TypesItem key={typePokemon.name} pokemon={typePokemon} />))}
