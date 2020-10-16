import React from "react";
import { useSelector } from "react-redux";
import "./product-details.css";

function ProductDetails() {
  const [title, image, subtitle] = useSelector((state) => {
    return [state.title, state.image, state.subtitle];
  });

  return (
    <div className="product-details">
      <div>
        <img src={image} alt={title + " image"} className="product-image" />
      </div>
      <div className="product-title">{title}</div>
      <div className="product-subtitle">{subtitle}</div>
    </div>
  );
}

export default ProductDetails;
