import React from "react";
import PosProductTable from "../components/PosProductTable";
import PosNewCartModal from "../components/PosNewCartModal";
import PosCartList from "../components/PosCartList";
import PosCheckoutBox from "../components/PosCheckoutBox";

function POS() {
  return (
    <div>
      <PosNewCartModal />
      <PosCartList />
      <PosProductTable />
      <PosCheckoutBox />
    </div>
  );
}

export default POS;
