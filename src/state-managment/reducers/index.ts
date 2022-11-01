import { combineReducers } from 'redux';
import { cartReducer } from './carts/cartReducer';
import { modalReducer } from './modal/modalReducer';
import { intlReducer } from 'react-intl-redux';
import {
  productsReducer,
  selectedProductsReducer
} from './products/productsReducer';
import { themeReducer } from './theme/themeReducer';

const rootReducer = combineReducers({
  AllProducts: productsReducer,
  selectedProduct: selectedProductsReducer,
  cart: cartReducer,
  modal: modalReducer,
  locale: intlReducer,
  themePref: themeReducer
});
export default rootReducer;
