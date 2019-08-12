import { createActions, createReducer } from 'reduxsauce';

/**
 * Constantes de las acciones
 */
export const { Types, Creators } = createActions({
    fetch: ['name'],
    success: ['data']
});

const initialState = {
    data: {},
    isLoading: true,
};

const fetch = (state = initialState, action) => {
    return {
        ...state,
        name: action.name,
        isLoading: true,
    };
};

const succcess = (state = initialState, action) => {
    return {
        ...state,
        data: action.data,
        isLoading: false
    };
};

/**
 * mapeo de action con los reducers
 */
export default createReducer(initialState, {
    [Types.FETCH]: fetch,
    [Types.SUCCESS]: succcess,
});
