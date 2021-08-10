import axios from "axios";
import { apiUrl } from "../../src/constants/constants";
export const addCreatorApi = (params) => {
  return axios.post(apiUrl + "/profile", { params }).then((response) => {
    return response;
  });
};

export const getCreatorsApi = (address) => {
  return axios.get(apiUrl + "/profiles?address=" + address).then((response) => {
    return response;
  });
};
