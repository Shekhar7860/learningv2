import { addCreatorApi, getCreatorsApi } from "../../services/service";

export const addCreator = (params) => async (dispatch) => {
  const response = await addCreatorApi(params);
  return response;
};

export const getCreators = (params) => async (dispatch) => {
  const response = await getCreatorsApi(params);
  return response;
};
