import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import TypePokemon from './components/TypePokemon';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/typesPokemon" component={ TypePokemon } />
    <Route exact path="/pokemon/:name" component={ Pokemon } />
  </Switch>
);

export default Routes;