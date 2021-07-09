import { SET_STATUS } from "../actionTypes";

export function user(state = false, action) {
  switch (action.type) {
    case SET_STATUS:
      return action.status;
    default:
      return state;
  }
}
