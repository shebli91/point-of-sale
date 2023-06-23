import React, { useContext, useState, useEffect } from "react";
import { CartsContext } from "../contexts/cartsContext";
import { ProductsContext } from "../contexts/productsContext";
import styles from "../styles/PosProductInCart.module.css";

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
    <div className={styles.productInCart}>
      <div className={styles.productDetails}>
        <h4 className={styles.productName}>{name}</h4>
        <p>${price}</p>
        <p className={styles.quantity}>Q: {quantity}</p>
        <p>Total: ${quantity * price}</p>
      </div>
      <div className={styles.buttons}>
        <button
          className={`${styles.actionButton} ${styles.increaseButton}`}
          onClick={increaseQuantity}
        >
          +
        </button>
        <button
          className={`${styles.actionButton} ${styles.decreaseButton}`}
          onClick={decreaseQuantity}
        >
          -
        </button>
        <button
          className={`${styles.actionButton} ${styles.deleteButton}`}
          onClick={handleRemoveProduct}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PosProductInCart;
