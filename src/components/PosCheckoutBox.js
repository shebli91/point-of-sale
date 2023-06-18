import React, { useContext, useState, useEffect } from "react";
import { CartsContext } from "../contexts/cartsContext";
import { ProductsContext } from "../contexts/productsContext";
import PosProductInCart from "./PosProductInCart";

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

  if (!selectedCart) return <p>No cart selected</p>;

  const { client } = selectedCart;
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckout = () => {
    alert(
      `Thank you for your purchase\nClient Name: ${selectedCart?.client?.firstName} ${selectedCart?.client?.lastName}\nClient Address: ${selectedCart?.client?.address}\nTotal Price: ${totalPrice}`
    );

    deleteCartById(selectedCart.id);
  };

  return (
    <aside>
      <h2>Name: {`${client?.firstName} ${client?.lastName}`}</h2>

      <p>Address: {client?.address}</p>
      {cartProducts.map((product) => (
        <PosProductInCart key={product.id} product={product} />
      ))}
      <p>Total Price: ${totalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </aside>
  );
};

export default PosCheckoutBox;
