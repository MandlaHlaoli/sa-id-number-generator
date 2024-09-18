import React from "react";
import Barcode from "react-barcode";

function BarcodeComponent({ barcode }) {
  return (
    <section className="id-barcode">
      <Barcode value={barcode} />
    </section>
  );
}

export default BarcodeComponent;
