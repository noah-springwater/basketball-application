import { PLAYERS_STATUS, USER_STATUS } from '../actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case PLAYERS_STATUS:
      return { ...state, players: action.payload };
    case USER_STATUS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}