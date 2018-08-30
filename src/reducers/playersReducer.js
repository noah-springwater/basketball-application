import { GET_PLAYERS } from '../actionTypes';

export default function(state={}, action) {
    switch(action.type) {
        case GET_PLAYERS:
            return action.payload;
        default:
            return state;
    }
}