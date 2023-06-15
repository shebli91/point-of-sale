import { createContext, useEffect, useState } from "react";
import {
  createCart,
  fetchCartById,
  addToCart,
  updateProductInCart,
  removeFromCart,
  deleteCart,
  fetchCarts,
} from "../services/api";

export const CartsContext = createContext();

const CartsContextProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [selectedCart, setSelectedCart] = useState(null);

  useEffect(() => {
    const fetchAllCarts = async () => {
      const response = await fetchCarts();
      setCarts(response.data);
    };

    fetchAllCarts();
  }, []);

  const createNewCart = async (cart) => {
    const response = await createCart(cart);
    setCarts([...carts, response.data]);
  };

  const selectCart = async (id) => {
    const response = await fetchCartById(id);
    setSelectedCart(response.data);
  };

  const addProductToCart = async (id, product) => {
    const response = await addToCart(id, product);
    setSelectedCart(response.data);
  };

  const updateCartProduct = async (cartId, productId, updatedProduct) => {
    const response = await updateProductInCart(
      cartId,
      productId,
      updatedProduct
    );
    setSelectedCart(response.data);
  };

  const removeProductFromCart = async (cartId, productId) => {
    await removeFromCart(cartId, productId);
    setSelectedCart(
      selectedCart.products.filter((product) => product.id !== productId)
    );
  };

  const deleteCartById = async (id) => {
    await deleteCart(id);
    setCarts(carts.filter((cart) => cart.id !== id));
    if (selectedCart && selectedCart.id === id) setSelectedCart(null);
  };

  return (
    <CartsContext.Provider
      value={{
        carts,
        selectedCart,
        createNewCart,
        selectCart,
        addProductToCart,
        updateCartProduct,
        removeProductFromCart,
        deleteCartById,
      }}
    >
      {children}
    </CartsContext.Provider>
  );
};

export default CartsContextProvider;
