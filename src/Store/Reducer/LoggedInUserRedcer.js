/**
 * Initial state for the products which is empty.
 */
 const initUserState = {
    userObj: {},
  }
  
  /**
   * To store logged user info. 
   * @param {*} state
   * @param {*} action 
   * @returns 
   */
  export default function LoggedUser(state = initUserState, action)  {
      switch(action.type) {
         case 'LOGGED_USER': // At initial loading action will dispatch
           return {...state, userObj: action.payload};
         default:
           return state;
       }
    };