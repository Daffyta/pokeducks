import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PokemonItem = ({ pokemon }) => (
      <li className="collection-item">
        <Link to={{ pathname: '/pokemon/' + pokemon.name }}>{ pokemon.name }</Link>
      </li>
);

export default PokemonItem;