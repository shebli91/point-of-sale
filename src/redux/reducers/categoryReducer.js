// action types import
import {
  FETCH_CATEGORIES_SUCCESS,
  ADD_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
} from "../actions/categoryActions";

// initial state
const initialState = {
  categories: [],
};

// reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload };
    case ADD_CATEGORY_SUCCESS:
      return { ...state, categories: [...state.categories, action.payload] };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.id ? action.payload : category
        ),
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default categoryReducer;
