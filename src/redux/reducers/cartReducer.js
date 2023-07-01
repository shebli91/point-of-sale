// action types import
import {
  CREATE_CART_SUCCESS,
  FETCH_CARTS_SUCCESS,
  FETCH_CART_SUCCESS,
  ADD_TO_CART_SUCCESS,
  UPDATE_PRODUCT_IN_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS,
  DELETE_CART_SUCCESS,
} from "../actions/cartActions";

// initial state
const initialState = {
  carts: [],
  selectedCart: null,
};

// reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CART_SUCCESS:
      return { ...state, carts: [...state.carts, action.payload] };
    case FETCH_CARTS_SUCCESS:
      return { ...state, carts: action.payload };
    case FETCH_CART_SUCCESS:
      return { ...state, selectedCart: action.payload };
    case ADD_TO_CART_SUCCESS:
    case UPDATE_PRODUCT_IN_CART_SUCCESS:
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart.id === action.payload.id ? action.payload : cart
        ),
      };
    case DELETE_CART_SUCCESS:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
