import {combineReducer} from 'redux';
import {positionReducer} from './positions/position-reducer'

export const rootReducer = combineReducer({
    positions: positionReducer
});