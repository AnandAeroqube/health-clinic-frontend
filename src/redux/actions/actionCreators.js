import * as ACTION_TYPES from "../types/actionTypes";

/**
 * action creatores
 */
export const loadDataPending = () => ({
  type: ACTION_TYPES.LOAD_DATA_PENDING
});
export const loadDataSucccess = data => ({
  type: ACTION_TYPES.LOAD_DATA_SUCCESS,
  payload: data
});
export const loadDataFailure = () => ({
  type: ACTION_TYPES.LOAD_DATA_FAILURE
});
