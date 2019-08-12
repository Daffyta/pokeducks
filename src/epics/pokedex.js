import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    Types,
    Creators
} from "../store/ducks/pokedex";

const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';

function fetchPokedexEpic(action$) {
    return action$
        .ofType(Types.FETCH_POKEDEX)
        .switchMap(() => {
            return ajax
                .getJSON(url)
                .map(data => data.results)
                .map(pokemons => pokemons.map(pokemon => ({
                    name: pokemon.name,
                    url: pokemon.url
                })))
        })
        .map(pokemons => Creators.successPokedex(pokemons))
        .catch(error => Observable.of(console.log(error.message)))
}

export default fetchPokedexEpic;
