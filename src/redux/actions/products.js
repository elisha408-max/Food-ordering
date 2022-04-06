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
      "https://ghumgham-demo.herokuapp.com/dishes?fbclid=IwAR10RIIrWs1sHv0B9nxVlvVYBXnb9UpWh3RzRdsXvwHe7Ib821zdgD9h6Is"
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
