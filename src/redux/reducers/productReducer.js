import ADD_PRODUCT from "../actions/actionTypes";

const initialState = {
  id: "",
  title: "",
  image: "",
  subtitle: "",
  brand: "",
  reviews: [],
  retailer: "",
  details: [],
  tags: [],
  sales: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
