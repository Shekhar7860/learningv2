import { SET_STATUS, SET_DATA, SET_PROFILE_DATA } from "../actionTypes";
export function setLoggedIn(val) {
  return {
    type: SET_STATUS,
    status: val,
  };
}

export function saveUserData(data) {
  return {
    type: SET_DATA,
    data,
  };
}
export function setProfileData(data) {
  return {
    type: SET_PROFILE_DATA,
    profileData: data,
  };
}
