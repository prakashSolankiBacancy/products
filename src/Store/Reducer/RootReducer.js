import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import LoggedUser from './LoggedInUserRedcer'

/**
 * To combine all reducer
 */
export default combineReducers({
  ProductsReducer,LoggedUser
  });