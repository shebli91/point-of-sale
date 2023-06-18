import React, { useContext, useState, useEffect } from "react";
import { CartsContext } from "../contexts/cartsContext";
import { ProductsContext } from "../contexts/productsContext";

const PosProductInCart = ({ product: productProp }) => {
  const { selectedCart, updateCartProduct, removeProductFromCart } =
    useContext(CartsContext);
  const { fetchProductById } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      if (productProp && productProp.id) {
        const fetchedProduct = await fetchProductById(productProp.id);
        setProduct({ ...fetchedProduct.data, quantity: productProp.quantity });
      }
    };

    getProduct();
  }, [productProp, fetchProductById]);

  if (!product) return null;

  const { id, name, price, quantity } = product;

  const increaseQuantity = () => {
    const updatedProduct = { ...product, quantity: quantity + 1 };
    updateCartProduct(selectedCart.id, id, updatedProduct);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const updatedProduct = { ...product, quantity: quantity - 1 };
      updateCartProduct(selectedCart.id, id, updatedProduct);
    }
  };

  const handleRemoveProduct = () => {
    removeProductFromCart(selectedCart.id, id);
  };

  return (
    <div>
      <h4>{name}</h4>
      <p>${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total: ${quantity * price}</p>
      <button onClick={increaseQuantity}>+</button>
      <button onClick={decreaseQuantity}>-</button>
      <button onClick={handleRemoveProduct}>Delete</button>
    </div>
  );
};

export default PosProductInCart;
