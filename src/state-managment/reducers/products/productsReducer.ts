import { ActionTypes } from '../../constants/actionTypes';
import { ProductActions } from '../../actions/products/productActions';

import { ProductState } from '../../../types/index';

const intialState: ProductState = {
  products: [],
  selectedProduct: null
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
