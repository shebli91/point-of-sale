import React, { useState, useContext } from "react";
import styles from "./PosCartList.module.css";
import { CartsContext } from "../contexts/cartsContext";
import NewCartModal from "./PosNewCartModal";

const PosCartList = () => {
  const { carts, selectCart, selectedCart } = useContext(CartsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <aside className={styles.cartList}>
      <button className={styles.addButton} onClick={() => setIsModalOpen(true)}>
        Add New Cart
      </button>
      {carts.map((cart) => (
        <div
          className={
            selectedCart && cart.id === selectedCart.id
              ? styles.activeCart
              : styles.cart
          }
          key={cart.id}
          onClick={() => selectCart(cart.id)}
        >
          {cart.client.firstName} {cart.client.lastName}'s Cart
        </div>
      ))}
      <NewCartModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </aside>
  );
};

export default PosCartList;
