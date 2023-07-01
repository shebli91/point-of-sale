import * as api from "../../services/api";

// action types
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const ADD_CATEGORY_SUCCESS = "ADD_CATEGORY_SUCCESS";
export const UPDATE_CATEGORY_SUCCESS = "UPDATE_CATEGORY_SUCCESS";
export const DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS";

// action creators
export const fetchCategories = () => async (dispatch) => {
  const response = await api.fetchCategories();
  dispatch({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: response.data,
  });
};

export const addCategory = (category) => async (dispatch) => {
  const response = await api.addCategory(category);
  dispatch({
    type: ADD_CATEGORY_SUCCESS,
    payload: response.data,
  });
};

export const updateCategory = (id, updatedCategory) => async (dispatch) => {
  const response = await api.updateCategory(id, updatedCategory);
  dispatch({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: response.data,
  });
};

export const deleteCategory = (id) => async (dispatch) => {
  await api.deleteCategory(id);
  dispatch({
    type: DELETE_CATEGORY_SUCCESS,
    payload: id,
  });
};
