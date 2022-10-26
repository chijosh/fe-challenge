import { ActionTypes } from '../../constants/actionTypes';
import { ProductActions } from '../../actions/products/productActions';

import { ProductState } from '../../../types/index';

const intialState: ProductState = {
  products: []
};

export const productsReducer = (
  state = intialState,
  action: ProductActions
) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, action: ProductActions) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT:
      if (action.payload.quantity === undefined) {
        return { ...state, ...action.payload, quantity: 1 };
      }
      return { ...state, ...action.payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
