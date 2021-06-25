import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../Context/LoggedUserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated } = authContext;
  
  /**
   * If the user not authenticated then redirect to login page
   */
  return (
    <Route {...rest} render={props =>
      !isAuthenticated ? (
        <Redirect to='/'/>
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};

export default PrivateRoute;