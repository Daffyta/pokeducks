import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    Types,
    Creators
} from "../store/ducks/pokemon";

const url = 'https://pokeapi.co/api/v2/pokemon/';

function fetchPokemonEpic(action$) {
    return action$
        .ofType(Types.FETCH)
        .switchMap((action) => {
            return ajax.getJSON(url + action.name);
        })
        .map(pokemon => Creators.success(pokemon))
        .catch(error => Observable.of(console.log(error)))
}

export default fetchPokemonEpic;
