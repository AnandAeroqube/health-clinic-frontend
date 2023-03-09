import {API} from '../../../middleware/axiosDefaultConfig'
import {
  loadDataSucccess,
  loadDataPending,
  loadDataFailure
} from "../actionCreators";

/**
 * fetch data from api
 */
export const getDataFromApi = () => {
  return async dispatch => {
    try {
      dispatch(loadDataPending());
      let response = await API({
        url: "/todos",
        method: "GET"
      });
      if (response.status === 200) {
        console.log('response',response.data)
        dispatch(loadDataSucccess(response.data));
      }
    } catch (error) {
      dispatch(loadDataFailure());
      throw error;
    }
  };
};
