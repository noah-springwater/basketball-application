import {combineReducers} from 'redux';
import playersReducer from './playersReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    players: playersReducer,
    user: userReducer
})

export default rootReducer;