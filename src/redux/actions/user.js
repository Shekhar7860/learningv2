import { SET_STATUS } from "../actionTypes";
export function setLoggedIn(val) {
  return {
    type: SET_STATUS,
    status: val,
  };
}
