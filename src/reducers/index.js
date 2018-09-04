import {combineReducers} from 'redux';
import playersReducer from './playersReducer';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    players: playersReducer,
    user: userReducer,
    loading: loadingReducer
})

export default rootReducer;