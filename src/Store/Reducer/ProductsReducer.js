/**
 * Initial state for the products which is empty.
 */
const initProductsState = {
  products: [],
};

/**
 * To store products information and alter the data  
 * @param {*} state
 * @param {*} action
 * @returns 
 */
export default function ProductsReducer(state = initProductsState, action) {
    switch(action.type) {
       case 'ADD':
       action.payload.id = state.products.length + 1;
         return {...state, products: [...state.products, action.payload]};

      case 'EDIT': 
      const updatedList = state.products.map((item) => {
        if(item.id === action.payload.id) {
          return action.payload;
        } else { 
          return item;
        }
      });
        return {...state, products: updatedList};

      case 'DELETE':
        const filterList = state.products.filter((item) => {
          return action.id !== item.id;
        });
          return {...state, products: filterList};

       default:
         return state;
     }
  }