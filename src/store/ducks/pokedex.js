import { createActions, createReducer } from 'reduxsauce';

/**
 * Constantes de las acciones
 */
export const { Types, Creators } = createActions({
    fetchPokedex: [],
    successPokedex: ['pokemons']
});

const initialState = [];

const fetch = (state = initialState, action) => {
    console.log(action);
    console.log('action fetch');
    return [
        ...state,
    ];
};

const succcess = (state = initialState, action) => {
    console.log(action);
    console.log('action succcess');
    return action.pokemons;
};

/**
 * mapeo de action con los reducers
 */
export default createReducer(initialState, {
    [Types.FETCH_POKEDEX]: fetch,
    [Types.SUCCESS_POKEDEX]: succcess,
});
