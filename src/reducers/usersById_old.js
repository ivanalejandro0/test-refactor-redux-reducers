/**
 * This is the reducer as we started.
 */

import { USER_ADD, USER_REMOVE } from "../actions/users";

export function usersById(state = {}, action) {
  let newState;
  switch (action.type) {
    case USER_ADD:
      return {
        ...state,
        [action.user.id]: action.user,
      };
    case USER_REMOVE:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}
