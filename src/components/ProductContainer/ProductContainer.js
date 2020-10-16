import React, { useState, useEffect } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import ProductTags from "../ProductTags/ProductTags";
import Navbar from "../Navbar/Navbar";
import productTabs from "../productTabs";
import data from "../../data/Webdev_data2.json";
import { useDispatch } from "react-redux";
import add_product from "../../redux/actions/actions";
import "./product-container.css";

function ProductContainer() {
  const [tab, setTab] = useState("sales");
  const dispatch = useDispatch();

  useEffect(() => {
    // stroing data fetched from API in redux store
    dispatch(add_product(data[0]));
  });

  return (
    <div className="product-container">
      <div className="background-white container side-panel">
        <ProductDetails />
        <ProductTags />
        <Navbar setTab={setTab} selected={tab} />
      </div>
      <div className="background-white container main-panel">
        {productTabs[tab].component}
      </div>
    </div>
  );
}

export default ProductContainer;
