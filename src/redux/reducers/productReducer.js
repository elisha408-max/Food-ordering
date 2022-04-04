import {
  PRODUCT_LIST,
  PRODUCT_LIST_FETCHING,
  PRODUCT_LIST_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FILTER_ITEMS,
  SEARCH_ITEMS,
} from "../constants";

const initialState = {
  products: [],
  breakfasts: [],
  lunchs: [],
  snacks: [],
  dinners: [],
  beverages: [],
  isLoading: false,
  cart: [],
  counter: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      const tmp_breakfasts = action.payload.filter(
        (item) => item.category?.toLowerCase() === "breakfast"
      );
      const tmp_lunchs = action.payload.filter(
        (item) => item.category?.toLowerCase() === "lunch"
      );
      const tmp_snacks = action.payload.filter(
        (item) => item.category?.toLowerCase() === "snacks"
      );
      const tmp_dinners = action.payload.filter(
        (item) => item.category?.toLowerCase() === "dinner"
      );
      const tmp_beverages = action.payload.filter(
        (item) => item.category?.toLowerCase() === "beverage"
      );

      return {
        ...state,
        isLoading: false,
        breakfasts: tmp_breakfasts,
        lunchs: tmp_lunchs,
        dinners: tmp_dinners,
        beverages: tmp_beverages,
        snacks: tmp_snacks,
      };

    case ADD_TO_CART: {
      let tmp_cart = state.cart;

      const current_product = action.payload.item;
      const quantity = action.payload.quantity;

      // check if item in cart exists
      const index = state.cart.findIndex(
        (item) => item.id === current_product.id
      );
      console.log(index);
      if (index >= 0) {
        tmp_cart[index] = { ...current_product, quantity };
      } else {
        tmp_cart.push({ ...current_product, quantity });
      }

      return {
        ...state,
        cart: tmp_cart,
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case FILTER_ITEMS:
      const searchedItems = state.products.filter((item) => {
        return (
          parseInt(item.price.split("").slice(1).join("") * 120) >=
            action.payload.Price &&
          parseInt(item.price.split("").slice(1).join("") * 120) <=
            action.payload.Price1 &&
          item.category[1] === action.payload.Category
        );
      });
      console.log(searchedItems, "searchedItems");
      return {
        ...state,
        products: searchedItems,
      };
    case SEARCH_ITEMS:
      console.log(action.payload);
      // const items = Object.values(action.payload.title);
      // const searchValues = state.product.breakfasts.find((item) => {
      //   console.log(item.name);
      //   console.log(action.payload.values);
      //   return item.name === items[0];
      // });
    default:
      return state;
  }
};

export default productReducer;
