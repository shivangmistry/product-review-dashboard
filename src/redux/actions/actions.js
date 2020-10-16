import ADD_PRODUCT from "./actionTypes";

const add_product = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export default add_product;
