import { ActionTypes } from '../../constants/actionTypes';
import { IProductItem } from '../../../types/index';

export interface setProducts {
  type: ActionTypes.SET_PRODUCTS;
  payload: IProductItem;
}

export interface selectedProduct {
  type: ActionTypes.SELECTED_PRODUCT;
  payload: IProductItem;
}

export interface RemoveProduct {
  type: ActionTypes.REMOVE_SELECTED_PRODUCT;
  payload: IProductItem;
}

export type ProductActions = setProducts | selectedProduct | RemoveProduct;

export const setProducts = (products: IProductItem) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products
  };
};

export const selectedProduct = (product: IProductItem) => {
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
