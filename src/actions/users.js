export const USER_ADD = "USER_ADD";
export const USER_REMOVE = "USER_REMOVE";

export function userAdd(user) {
  return {
    type: USER_ADD,
    user,
  };
}

export function userRemove(id) {
  return {
    type: USER_REMOVE,
    id,
  };
}
