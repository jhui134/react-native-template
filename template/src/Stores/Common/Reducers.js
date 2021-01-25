import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { CommonTypes } from './Actions';

export const fetchCommonReducer = (state, { params }) => {
    let result = { ...state };
    if (params.type === 'isLoading') {
        result = {
            ...state,
            isLoading: params.data.isLoading,
        };
    }
    return result;
};

export const reducer = createReducer(INITIAL_STATE, {
    [CommonTypes.FETCH_COMMON_REDUCER]: fetchCommonReducer,
});
