import { combineEpics } from 'redux-observable';

import fetchPokedex from './pokedex';
import fetchPokemon from './pokemon';
import fetchType from './type';

export const rootEpic = combineEpics(
    fetchPokedex,
    fetchPokemon,
    fetchType
);
