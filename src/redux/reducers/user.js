import { SET_STATUS, SET_DATA } from "../actionTypes";
const initialState = {
  data: null,
  status: false,
};
export function user(state = initialState, action) {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_DATA:
      return {
        ...state,
        data: { ...state.status, ...action.data },
      };
    default:
      return state;
  }
}
