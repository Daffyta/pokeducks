import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import {
    Types,
    Creators
} from "../store/ducks/types";

const url = 'https://pokeapi.co/api/v2/type';

function fetchTypesEpic(action$) {
    return action$
        .ofType(Types.FETCH_TYPE)
        .switchMap(() => {
            return ajax
                .getJSON(url)
                .map(typeData => typeData.results)
                .map(typeData => typeData.map(tipoPokemon => ({
                    name: tipoPokemon.name,
                    url: tipoPokemon.url,
                })))
        })
        .map(typePokemon => Creators.successType(typePokemon))
        .catch(error => Observable.of(console.log(error.message)))
}

export default fetchTypesEpic;
