import * as api from "../../services/api";

// action types
export const FETCH_UNITS_SUCCESS = "FETCH_UNITS_SUCCESS";
export const ADD_UNIT_SUCCESS = "ADD_UNIT_SUCCESS";
export const UPDATE_UNIT_SUCCESS = "UPDATE_UNIT_SUCCESS";
export const DELETE_UNIT_SUCCESS = "DELETE_UNIT_SUCCESS";

// action creators
export const fetchUnits = () => async (dispatch) => {
  const response = await api.fetchUnits();
  dispatch({
    type: FETCH_UNITS_SUCCESS,
    payload: response.data,
  });
};

export const addUnit = (unit) => async (dispatch) => {
  const response = await api.addUnit(unit);
  dispatch({
    type: ADD_UNIT_SUCCESS,
    payload: response.data,
  });
};

export const updateUnit = (id, updatedUnit) => async (dispatch) => {
  const response = await api.updateUnit(id, updatedUnit);
  dispatch({
    type: UPDATE_UNIT_SUCCESS,
    payload: response.data,
  });
};

export const deleteUnit = (id) => async (dispatch) => {
  await api.deleteUnit(id);
  dispatch({
    type: DELETE_UNIT_SUCCESS,
    payload: id,
  });
};
