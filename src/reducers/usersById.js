/**
 * This is the reducer after we refactored it.
 */

import { USER_ADD, USER_REMOVE } from "../actions/users";

function addUser(state, user) {
  return {
    ...state,
    [user.id]: user,
  };
}

function removeUser(state, id) {
  const newState = { ...state };
  delete newState[id];
  return newState;
}

// e.g. src/reducers/usersById.js
export function usersById(state = {}, action) {
  switch (action.type) {
    case USER_ADD:
      return addUser(state, action.user);
    case USER_REMOVE:
      return removeUser(state, action.id);

    default:
      return state;
  }
}
