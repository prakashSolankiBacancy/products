import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


function Navigation() {
  return ( 
    <div>
      {/* <Router> */}
        <nav className="#26a69a teal lighten-1">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                {" "}
                <i className="material-icons">view_module</i>Products
              </a>

              <ul className="right">
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link > Add product</Link>
                </li>
                <li>
                  <Link >Link2</Link>
                </li>
                <li>
                  <a></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>  
      {/* </Router>    */}
    </div>
  )
}

export default Navigation;