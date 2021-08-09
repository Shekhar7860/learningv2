import { SET_STATUS, SET_DATA, SET_PROFILE_DATA } from "../actionTypes";
const initialState = {
  data: null,
  profileData: {},
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
    case SET_PROFILE_DATA:
      return {
        ...state,
        profileData: { ...state, ...action.profileData },
      };
    default:
      return state;
  }
}
