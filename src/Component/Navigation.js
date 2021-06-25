import React, { useContext } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {
  Link
} from 'react-router-dom';
import { AuthContext } from '../Context/LoggedUserContext';
import { Login, Products } from '../Utils/StringConstant';


function Navigation() {
  const authContext = useContext(AuthContext);

  return ( 
    <div>
        <nav className="#26a69a teal lighten-1">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                {' '}
                <i className="material-icons">view_module</i>{Products}
              </a>

              <ul className="right">
                <li>
                  <Link to="/">{Login}</Link>
                </li>
                <li>
                  <Link >Link1</Link>
                </li>
                <li>
                  <Link >Link2</Link>
                </li>
                <li>
                  <a className='btn-floating #26a69a teal darken-4 z-depth-0 user-image'>
                     <img src={authContext.userObj.image} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
}

export default Navigation;