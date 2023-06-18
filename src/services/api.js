import axios from "axios";

const API_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
});

/////////////// Products /////////////////////

export const fetchProducts = () => {
  return api.get("/products");
};

export const fetchProductById = (id) => {
  return api.get(`/products/${id}`);
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

export const addToCart = async (id, product) => {
  const { data: cart } = await api.get(`/carts/${id}`);
  cart.products.push(product);
  const { data: updatedCart } = await api.put(`/carts/${id}`, cart);
  return updatedCart;
};

export const updateProductInCart = async (
  cartId,
  productId,
  updatedProduct
) => {
  const { data: cart } = await api.get(`/carts/${cartId}`);
  const productIndex = cart.products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    cart.products[productIndex] = updatedProduct;
    const { data: updatedCart } = await api.put(`/carts/${cartId}`, cart);
    return updatedCart;
  } else {
    throw new Error("Product not found in cart");
  }
};

export const removeFromCart = async (cartId, productId) => {
  const { data: cart } = await api.get(`/carts/${cartId}`);
  const productIndex = cart.products.findIndex(
    (product) => product.id === productId
  );

  if (productIndex !== -1) {
    cart.products.splice(productIndex, 1);
    return api.put(`/carts/${cartId}`, cart);
  } else {
    throw new Error("Product not found in cart");
  }
};

export const getCartWithProductDetails = async (cartId) => {
  const { data: cart } = await api.get(`/carts/${cartId}`);
  const productsWithDetails = await Promise.all(
    cart.products.map(async (product) => {
      const { data: productDetails } = await api.get(
        `/products/${product.productId}`
      );
      return {
        ...productDetails,
        quantity: product.quantity,
      };
    })
  );

  return {
    ...cart,
    products: productsWithDetails,
  };
};

export const deleteCart = (id) => {
  return api.delete(`/carts/${id}`);
};
