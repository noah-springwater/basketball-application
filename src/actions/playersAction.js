import {GET_PLAYERS, PLAYERS_STATUS} from '../actionTypes';
import {database} from '../firebase';

export function getPlayers() {
  return dispatch => {
    // as soon as this function fires show loading to true
    dispatch({
      type: PLAYERS_STATUS,
      payload: true
    });
    database.on(
      'value',
      snapshot => {
        dispatch({
          type: GET_PLAYERS,
          payload: snapshot.val()
        });
        // once PLAYERS are received show loading to false
        dispatch({
          type: PLAYERS_STATUS,
          payload: false
        });
        // wait until something changes and try again
      },
      () => {
        dispatch({
          type: PLAYERS_STATUS,
          payload: -1
        });
      }
    );
  };
}

export function savePlayer(player) {
  return dispatch => database.push(player);
}

export function deletePlayer(id) {
  return dispatch => database.child(id).remove();
}