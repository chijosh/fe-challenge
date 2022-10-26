import { ActionTypes } from '../../constants/actionTypes';
import { CartActions } from '../../actions/carts/cartActions';

import { CartState } from '../../../types/index';

const initialState: CartState = [];

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return state.some((product) => product.id === action.payload.id)
        ? state
        : [...state, { ...action.payload }];
    case ActionTypes.REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload);
    case ActionTypes.CLEAR_CART:
      return initialState;
    case ActionTypes.ADD_QTY_ITEM:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          console.log({ product });
          console.log('action.payload', action.payload);
          return {
            ...product,
            quantity: action.payload.quantity
          };
        }
        return product;
      });
    default:
      return state;
  }
};
