import React from "react";
import { useSelector } from "react-redux";
import "./product-tags.css";

function ProductTags() {
  const tags = useSelector((state) => state.tags);
  return (
    <div className="product-tags">
      <ul className="app-ul tags-ul">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTags;
