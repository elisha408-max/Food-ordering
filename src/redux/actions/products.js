import axios from "axios";
import {
  PRODUCT_LIST,
  PRODUCT_LIST_FETCHING,
  PRODUCT_LIST_SUCCESS,
} from "../constants";

export const fetchProduct = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_FETCHING,
  });

  try {
    let response = await axios.get(
      "https://khanpin-api.herokuapp.com/data"
    );
   
    if (response?.data) {

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log(error)
  }

  
};
