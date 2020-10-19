import React, { useState, useEffect, Suspense } from "react";
import Navbar from "../Navbar/Navbar";
import productTabs from "../productTabs";
import data from "../../data/Webdev_data2.json";
import { useDispatch } from "react-redux";
import add_product from "../../redux/actions/actions";
import Loading from "../Loading/Loading";
import "./product-container.css";

const ProductDetails = React.lazy(() =>
  import("../ProductDetails/ProductDetails")
);
const ProductTags = React.lazy(() => import("../ProductTags/ProductTags"));

function ProductContainer() {
  const [tab, setTab] = useState("sales");
  const dispatch = useDispatch();

  useEffect(() => {
    // storing data fetched from API in redux store
    dispatch(add_product(data[0]));
  });

  return (
    <div className="product-container">
      <div className="background-white container side-panel">
        <Suspense fallback={Loading}>
          <section>
            <ProductDetails />
            <ProductTags />
          </section>
        </Suspense>
        <Navbar setTab={setTab} selected={tab} />
      </div>
      <div className="main-panel">{productTabs[tab].component}</div>
    </div>
  );
}

export default ProductContainer;
