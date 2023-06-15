import axios from "axios";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
});

/////////////// Products /////////////////////

export const fetchProducts = () => {
  return api.get("/products");
};

export const addProduct = (product) => {
  return api.post("/products", product);
};

export const updateProduct = (id, updatedProduct) => {
  return api.put(`/products/${id}`, updatedProduct);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};

/////////////// Categories /////////////////////

export const fetchCategories = () => {
  return api.get("/categories");
};

export const addCategory = (category) => {
  return api.post("/categories", category);
};

export const updateCategory = (id, updatedCategory) => {
  return api.put(`/categories/${id}`, updatedCategory);
};

export const deleteCategory = (id) => {
  return api.delete(`/categories/${id}`);
};

/////////// Units of Measure /////////////////////

export const fetchUnits = () => {
  return api.get("/units");
};

export const addUnit = (unit) => {
  return api.post("/units", unit);
};

export const updateUnit = (id, updatedUnit) => {
  return api.put(`/units/${id}`, updatedUnit);
};

export const deleteUnit = (id) => {
  return api.delete(`/units/${id}`);
};

/////////////// Carts /////////////////////

export const createCart = (cart) => {
  return api.post("/carts", cart);
};

export const fetchCarts = () => {
  return api.get("/carts");
};

export const fetchCartById = (id) => {
  return api.get(`/carts/${id}`);
};

export const addToCart = (id, product) => {
  return api.post(`/carts/${id}/products`, product);
};

export const updateProductInCart = (cartId, productId, updatedProduct) => {
  return api.put(`/carts/${cartId}/products/${productId}`, updatedProduct);
};

export const removeFromCart = (cartId, productId) => {
  return api.delete(`/carts/${cartId}/products/${productId}`);
};

export const deleteCart = (id) => {
  return api.delete(`/carts/${id}`);
};
