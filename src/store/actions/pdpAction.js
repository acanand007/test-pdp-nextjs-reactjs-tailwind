import * as types from "../types";

export const productSizeUpdate = (payload) => async (dispatch) => {
  dispatch({
    type: types.PRODUCT_SELECTED_SIZE,
    payload: payload,
  });
};

export const productColorUpdate = (payload) => async (dispatch) => {
  dispatch({
    type: types.PRODUCT_SELECTED_COLOR,
    payload: payload,
  });
};

