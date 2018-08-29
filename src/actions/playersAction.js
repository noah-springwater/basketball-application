import {GET_PLAYERS} from '../actionTypes';
import {database} from '../firebase';

export function getPlayers() {
  return dispatch() => {
    database.on('value', snapshot => {
      dispatch({
        type: GET_PLAYERS,
        payload: snapshot.val()
      })
    })
  }
}