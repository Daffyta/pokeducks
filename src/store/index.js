import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import pokedexReducer from './ducks/pokedex';
import pokemonReducer from './ducks/pokemon';
import typeReducer from './ducks/types';

export default (history) => combineReducers({
  router: connectRouter(history),
  pokemon: pokemonReducer,
  pokedex: pokedexReducer,
  typePokemon: typeReducer,
});