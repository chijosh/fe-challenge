import { combineReducers } from 'redux';
import { productsReducer } from './products/productsReducer';

const rootReducer = combineReducers({
  AllProducts: productsReducer
});
export default rootReducer;
