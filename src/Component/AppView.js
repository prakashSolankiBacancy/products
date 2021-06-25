import React from 'react';
import { Route, Switch , BrowserRouter} from 'react-router-dom';
import Login from '../Component/Login';
import PrivateRoute from './HOC/PrivateRoute';
import MainApp from './MainApp';

class AppView extends React.Component {

    render() {
        return (
            // Provide the different router for navigation
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute exact path='/home' component={MainApp} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppView;