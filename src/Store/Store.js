import RootReducer from "./Reducer/RootReducer";
import { createStore  } from 'redux';

/**
 * Create store to store app data
 */
export const store = createStore(RootReducer);