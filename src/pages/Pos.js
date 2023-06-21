import React from "react";
import PosProductTable from "../components/PosProductTable";
import PosNewCartModal from "../components/PosNewCartModal";
import PosCartList from "../components/PosCartList";
import PosCheckoutBox from "../components/PosCheckoutBox";
import styles from "./Pos.module.css";

function POS() {
  return (
    <div className={styles.container}>
      <aside className={styles.cartList}>
        <PosCartList />
      </aside>
      <main className={styles.productTable}>
        <PosProductTable />
      </main>
      <aside className={styles.checkoutBox}>
        <PosCheckoutBox />
      </aside>
      <PosNewCartModal />
    </div>
  );
}

export default POS;
