import { combineReducers } from 'redux';
import { cartReducer } from './carts/cartReducer';
import { modalReducer } from './modal/modalReducer';
import { intlReducer } from 'react-intl-redux';
import {
  productsReducer,
  selectedProductsReducer
} from './products/productsReducer';

const rootReducer = combineReducers({
  AllProducts: productsReducer,
  selectedProduct: selectedProductsReducer,
  cart: cartReducer,
  modal: modalReducer,
  locale: intlReducer
});
export default rootReducer;
