import { combineReducers } from 'redux';
import { productsReducer } from './products/productsReducer';

const rootReducer = combineReducers({
  Products: productsReducer
});
export default rootReducer;
