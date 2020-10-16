import React, { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductTags from "../ProductTags/ProductTags";
import Navbar from "../Navbar/Navbar";
import productTabs from "../productTabs";
import "./product-container.css";

function ProductContainer() {
  const [tab, setTab] = useState("sales");
  return (
    <div className="product-container">
      <div className="container">
        <ProductDetails />
        <ProductTags />
        <Navbar setTab={setTab} selected={tab} />
      </div>
      <div className="container">{productTabs[tab].component}</div>
    </div>
  );
}

export default ProductContainer;
