import * as types from "../types";

const initialState = {
    selectedSize: '',
    selectedColor: '',
};

export const pdpReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCT_SELECTED_SIZE:
      return { ...state, selectedSize: action.payload};
    case types.PRODUCT_SELECTED_COLOR:
      return { ...state, selectedColor: action.payload};
    default:
      return state;
  }
};
