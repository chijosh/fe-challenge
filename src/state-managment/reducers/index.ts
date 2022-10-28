import { combineReducers } from 'redux';
import { cartReducer } from './carts/cartReducer';
import {
  productsReducer,
  selectedProductsReducer
} from './products/productsReducer';

const rootReducer = combineReducers({
  AllProducts: productsReducer,
  selectedProduct: selectedProductsReducer,
  cart: cartReducer
});
export default rootReducer;
