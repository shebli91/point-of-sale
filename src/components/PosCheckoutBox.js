import React, { useContext, useState, useEffect } from "react";
import { CartsContext } from "../contexts/cartsContext";
import { ProductsContext } from "../contexts/productsContext";
import PosProductInCart from "./PosProductInCart";
import styles from "./PosCheckoutBox.module.css";

const PosCheckoutBox = () => {
  const { selectedCart, deleteCartById } = useContext(CartsContext);
  const { fetchProductById } = useContext(ProductsContext);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await Promise.all(
        selectedCart?.products?.map((item) =>
          fetchProductById(item.id).then((res) => ({
            ...res.data,
            quantity: item.quantity,
          }))
        ) || []
      );

      setCartProducts(fetchedProducts);
    };

    fetchProducts();
  }, [selectedCart, fetchProductById]);

  if (!selectedCart)
    return <p className={styles.noCartMessage}>No cart selected</p>;

  const { client } = selectedCart;
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckout = () => {
    alert(
      `Thank you for your purchase\nClient Name: ${selectedCart?.client?.firstName} ${selectedCart?.client?.lastName}\nClient Address: ${selectedCart?.client?.address}\nTotal Price: $${totalPrice}`
    );

    deleteCartById(selectedCart.id);
  };

  return (
    <aside className={styles.checkoutBox}>
      <h2 className={styles.header}>
        Name: {`${client?.firstName} ${client?.lastName}`}
      </h2>
      <p className={styles.info}>Address: {client?.address}</p>
      <div className={styles.productList}>
        {cartProducts.map((product) => (
          <PosProductInCart key={product.id} product={product} />
        ))}
      </div>
      <p className={styles.total}>Total Price: ${totalPrice}</p>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        Checkout
      </button>
    </aside>
  );
};

export default PosCheckoutBox;
