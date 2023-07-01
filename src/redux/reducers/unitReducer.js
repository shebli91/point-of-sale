// action types import
import {
  FETCH_UNITS_SUCCESS,
  ADD_UNIT_SUCCESS,
  UPDATE_UNIT_SUCCESS,
  DELETE_UNIT_SUCCESS,
} from "../actions/unitActions";

// initial state
const initialState = {
  units: [],
};

// reducer
const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNITS_SUCCESS:
      return { ...state, units: action.payload };
    case ADD_UNIT_SUCCESS:
      return { ...state, units: [...state.units, action.payload] };
    case UPDATE_UNIT_SUCCESS:
      return {
        ...state,
        units: state.units.map((unit) =>
          unit.id === action.payload.id ? action.payload : unit
        ),
      };
    case DELETE_UNIT_SUCCESS:
      return {
        ...state,
        units: state.units.filter((unit) => unit.id !== action.payload),
      };
    default:
      return state;
  }
};

export default unitReducer;
