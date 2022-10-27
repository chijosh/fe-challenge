import { combineReducers } from 'redux';
import { cartReducer } from './carts/cartReducer';
import {
  productsReducer,
  selectedProductsReducer
} from './products/productsReducer';
import { snackbarReducer } from './snackbar/snackbarReducer';

const rootReducer = combineReducers({
  AllProducts: productsReducer,
  selectedProduct: selectedProductsReducer,
  cart: cartReducer,
  snackbar: snackbarReducer
});
export default rootReducer;
