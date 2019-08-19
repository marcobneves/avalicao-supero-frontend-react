import { 
    UPDATE_SEARCH,  
    UPDATE_TYPE, 
    UPDATE_YEARS_START, 
    UPDATE_YEARS_END } from './actionTypes';

export const updateSearch = value => ({
    type: 'UPDATE_SEARCH',
    search: value
});

export const updateType = value => ({
    type: 'UPDATE_TYPE',
    searchType: value
});

export const updateYearsStart = value => ({
    type: 'UPDATE_YEARS_START',
    yearsStart: value
});

export const updateYearsEnd = value => ({
    type: 'UPDATE_YEARS_END',
    yearsEnd: value
});