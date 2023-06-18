import React, { useState, useContext } from "react";

import { CartsContext } from "../contexts/cartsContext";
import NewCartModal from "./PosNewCartModal";

const PosCartList = () => {
  const { carts, selectCart } = useContext(CartsContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <aside>
      <button onClick={() => setIsModalOpen(true)}>Add New Cart</button>
      {carts.map((cart) => (
        <div key={cart.id} onClick={() => selectCart(cart.id)}>
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
