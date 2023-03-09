import * as ACTION_TYPES from "../../types/actionTypes";

const INITIAL_STATE = {
  loading: false,
  data: []
};

export const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOAD_DATA_PENDING:
      return { ...state, loading: true };
    case ACTION_TYPES.LOAD_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case ACTION_TYPES.LOAD_DATA_FAILURE:
      return { ...state, loading: false };
    default:
         return state;
  }
};
