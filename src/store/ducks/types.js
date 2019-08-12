import { createActions, createReducer } from 'reduxsauce';
/**
 * Constantes de las acciones
 */
export const { Types, Creators } = createActions({
    fetchType: ['name',
                'url'],
    successType: ['typeData'],
});


const initialState = {
    type: {},
    isLoading: true,
};

const fetch = (state = initialState, action) => {
    return {
        ...state,
        isLoading: true,
    };
};

const succcess = (state = initialState, action) => {
    return {
        ...state,
        type: action.typeData,
        isLoading: false
    };
};

/**
 * mapeo de action con los reducers
 */
export default createReducer(initialState, {
    [Types.FETCH_TYPE]: fetch,
    [Types.SUCCESS_TYPE]: succcess,
});