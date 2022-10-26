import { ActionTypes } from '../../constants/actionTypes';
import { IProductItem } from '../../../types/index';

export interface AddProducts {
  type: ActionTypes.SET_PRODUCTS;
  payload: IProductItem;
}

export interface SetSelectedProduct {
  type: ActionTypes.SELECTED_PRODUCT;
  payload: IProductItem;
}

export interface RemoveProduct {
  type: ActionTypes.REMOVE_SELECTED_PRODUCT;
  payload: IProductItem;
}

export type ProductActions = AddProducts | SetSelectedProduct | RemoveProduct;

export const setProducts = (products: Array<IProductItem>) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

export const setSelectedProduct = (product: IProductItem) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT
  };
};
