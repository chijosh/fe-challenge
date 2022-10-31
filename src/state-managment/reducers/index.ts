import { combineReducers } from 'redux';
import { cartReducer } from './carts/cartReducer';
import { modalReducer } from './modal/modalReducer';
import {
  productsReducer,
  selectedProductsReducer
} from './products/productsReducer';

const rootReducer = combineReducers({
  AllProducts: productsReducer,
  selectedProduct: selectedProductsReducer,
  cart: cartReducer,
  modal: modalReducer
});
export default rootReducer;
