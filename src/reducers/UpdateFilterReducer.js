import {
    UPDATE_SEARCH,
    UPDATE_TYPE,
    UPDATE_YEARS_START,
    UPDATE_YEARS_END,    
} from '../actions/actionTypes';

const initialState = {
    search: '',
    searchType: 1,
    yearsStart: '',
    yearsEnd: '',

};

export const UpdateFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH':
            return {
                ...state,
                search: action.search
            };
        case 'UPDATE_TYPE':
            return {
                ...state,
                searchType: action.searchType
            };
        case 'UPDATE_YEARS_START':
            return {
                ...state,
                yearsStart: action.yearsStart
            };
        case 'UPDATE_YEARS_END':
            return {
                ...state,
                yearsEnd: action.yearsEnd
            };
        default:
            return state;
    }
};