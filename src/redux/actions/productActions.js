import {
  fetchProducts as fetchProductsApi,
  fetchProductById as fetchProductByIdApi,
  addProduct as addProductApi,
  updateProduct as updateProductApi,
  deleteProduct as deleteProductApi,
} from "../../services/api";

// action types
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCT_BY_ID_SUCCESS = "FETCH_PRODUCT_BY_ID_SUCCESS";
export const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";

// action creators
export const fetchProducts = () => async (dispatch) => {
  const response = await fetchProductsApi();
  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: response.data,
  });
};

export const fetchProductById = (id) => async (dispatch) => {
  const response = await fetchProductByIdApi(id);
  dispatch({
    type: FETCH_PRODUCT_BY_ID_SUCCESS,
    payload: response.data,
  });
};

export const addProduct = (product) => async (dispatch) => {
  const response = await addProductApi(product);
  dispatch({
    type: ADD_PRODUCT_SUCCESS,
    payload: response.data,
  });
};

export const updateProduct = (id, updatedProduct) => async (dispatch) => {
  const response = await updateProductApi(id, updatedProduct);
  dispatch({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: response.data,
  });
};

export const deleteProduct = (id) => async (dispatch) => {
  await deleteProductApi(id);
  dispatch({
    type: DELETE_PRODUCT_SUCCESS,
    payload: id,
  });
};
