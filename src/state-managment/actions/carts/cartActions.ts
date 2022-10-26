import { ActionTypes } from '../../constants/actionTypes';
import { IProductItem } from '../../../types/index';

export interface AddToCartAction {
  type: ActionTypes.ADD_TO_CART;
  payload: IProductItem;
}

export interface RemoveFromCartAction {
  type: ActionTypes.REMOVE_FROM_CART;
  payload: string;
}

export interface ClearCartAction {
  type: ActionTypes.CLEAR_CART;
  payload?: any;
}

export interface AddQtyItemAction {
  type: ActionTypes.ADD_QTY_ITEM;
  payload: IProductItem;
}

export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | ClearCartAction
  | AddQtyItemAction;

export const addToBasket = (product: IProductItem): AddToCartAction => ({
  type: ActionTypes.ADD_TO_CART,
  payload: product
});

export const removeFromBasket = (id: string): RemoveFromCartAction => ({
  type: ActionTypes.REMOVE_FROM_CART,
  payload: id
});

export const clearCart = (): ClearCartAction => ({
  type: ActionTypes.CLEAR_CART
});

export const setQtyItem = (product: IProductItem): AddQtyItemAction => ({
  type: ActionTypes.ADD_QTY_ITEM,
  payload: product
});
