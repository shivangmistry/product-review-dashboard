import React from "react";
import { useSelector } from "react-redux";

function ProductDetails() {
  const product = useSelector((state) => state);
  return <div>Product Details: {product.id}</div>;
}

export default ProductDetails;
