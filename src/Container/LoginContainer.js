import {connect} from 'react-redux';
import Login from '../Component/Login';

/**
 *  Save logged in user information into store.
 * @param {*} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
    return {
      addLoggedInUserInfo: (userInfo) => { dispatch({ type: 'LOGGED_USER', payload: userInfo })},
    }
}

export default connect(null,  mapDispatchToProps)(Login);