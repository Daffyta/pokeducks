import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li><Link to="/">Pokedex</Link></li>
      <li><Link to="/typesPokemon">Types of Pokemon</Link></li>
    </ul>
  </nav>
);

export default Nav;