import React, { createContext, useState, useEffect } from "react";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  fetchProductById,
} from "../services/api";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetchProducts();
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch products.", error);
      setLoading(false);
    }
  };

  const addNewProduct = async (product) => {
    try {
      const response = await addProduct(product);
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.error("Failed to add product.", error);
    }
  };

  const updateExistingProduct = async (id, updatedProduct) => {
    try {
      const response = await updateProduct(id, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? response.data : product
        )
      );
    } catch (error) {
      console.error("Failed to update product.", error);
    }
  };

  const deleteExistingProduct = async (id) => {
    try {
      await deleteProduct(id);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete product.", error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        getProducts,
        addNewProduct,
        updateExistingProduct,
        deleteExistingProduct,
        fetchProductById,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
