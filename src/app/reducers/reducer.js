import {combineReducers} from 'redux';
import mangReducer from './mang';
import isAddingReducer from './isChecked';

const state = combineReducers({
    mang: mangReducer,
    isChecked: isAddingReducer
});

export const reducer = combineReducers({
    state
});