import React, { useContext , useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../../Context/LoggedUserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const {  isAuthenticated } = authContext;
  
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