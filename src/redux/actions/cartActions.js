import * as api from "../../services/api";

// action types
export const CREATE_CART_SUCCESS = "CREATE_CART_SUCCESS";
export const FETCH_CARTS_SUCCESS = "FETCH_CARTS_SUCCESS";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
export const UPDATE_PRODUCT_IN_CART_SUCCESS = "UPDATE_PRODUCT_IN_CART_SUCCESS";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS";

// action creators
export const createCart = (cart) => async (dispatch) => {
  const response = await api.createCart(cart);
  dispatch({
    type: CREATE_CART_SUCCESS,
    payload: response.data,
  });
};

export const fetchCarts = () => async (dispatch) => {
  const response = await api.fetchCarts();
  dispatch({
    type: FETCH_CARTS_SUCCESS,
    payload: response.data,
  });
};

export const fetchCartById = (id) => async (dispatch) => {
  const response = await api.fetchCartById(id);
  dispatch({
    type: FETCH_CART_SUCCESS,
    payload: response.data,
  });
};

export const addToCart = (id, product) => async (dispatch) => {
  const response = await api.addToCart(id, product);
  dispatch({
    type: ADD_TO_CART_SUCCESS,
    payload: response.data,
  });
};

export const updateProductInCart =
  (cartId, productId, updatedProduct) => async (dispatch) => {
    const response = await api.updateProductInCart(
      cartId,
      productId,
      updatedProduct
    );
    dispatch({
      type: UPDATE_PRODUCT_IN_CART_SUCCESS,
      payload: response.data,
    });
  };

export const removeFromCart = (cartId, productId) => async (dispatch) => {
  const response = await api.removeFromCart(cartId, productId);
  dispatch({
    type: REMOVE_FROM_CART_SUCCESS,
    payload: response.data,
  });
};

export const deleteCart = (id) => async (dispatch) => {
  await api.deleteCart(id);
  dispatch({
    type: DELETE_CART_SUCCESS,
    payload: id,
  });
};
