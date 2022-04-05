import { SEARCH_ITEMS } from "../constants/index";

export const searchItems = (values) => {
  return {
    type: SEARCH_ITEMS,
    payload: values,
  };
};
