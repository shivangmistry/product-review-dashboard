import React from "react";
import ProductOverview from "./ProductOverview/ProductOverview";
import ProductSales from "./ProductSales/ProductSales";
import { VscHome, VscGraph } from "react-icons/vsc";

const productTabs = {
  overview: {
    title: "Overview",
    component: <ProductOverview />,
    icon: <VscHome />,
  },
  sales: {
    title: "Sales",
    component: <ProductSales />,
    icon: <VscGraph />,
  },
};

export default productTabs;
