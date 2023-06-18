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
    const cartToCreate = {
      client: {
        firstName: cart.firstName,
        lastName: cart.lastName,
        address: cart.address,
      },
      description: cart.description,
      products: [],
    };
    const response = await createCart(cartToCreate);
    setCarts([...carts, response.data]);
  };

  const selectCart = async (id) => {
    const response = await fetchCartById(id);
    setSelectedCart(response.data);
  };

  const addProductToCart = async (id, product) => {
    const response = await fetchCartById(id);
    const cart = response.data;

    const productInCart = cart.products.find((p) => p.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1;
      await updateProductInCart(id, productInCart.id, productInCart);
    } else {
      const newProduct = { ...product, quantity: 1 };
      await addToCart(id, newProduct);
    }
    const updatedCart = await fetchCartById(id);
    setSelectedCart(updatedCart.data);
  };

  const updateCartProduct = async (cartId, productId, updatedProduct) => {
    await updateProductInCart(cartId, productId, updatedProduct);
    const updatedCartResponse = await fetchCartById(cartId);
    setSelectedCart(updatedCartResponse.data);
  };

  const removeProductFromCart = async (cartId, productId) => {
    await removeFromCart(cartId, productId);
    const updatedCartResponse = await fetchCartById(cartId);
    setSelectedCart(updatedCartResponse.data);
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
