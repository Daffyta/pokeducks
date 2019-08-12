import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PokemonItem = ({ typePokemon }) => (
      <li className="collection-item">
        <Link to={{ pathname: '/typesPokemon/' + typePokemon.name }}>{ typePokemon.name }</Link>
      </li>
);

export default PokemonItem;