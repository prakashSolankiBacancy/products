import React from 'react';
import { Route, Switch , BrowserRouter}  from 'react-router-dom';
import '../login.scss'
import LoginContainer from '../Container/LoginContainer';
import PrivateRoute from './HOC/LoginHOC';
import MainApp from './MainApp';

class AppView extends React.Component {

    render() {
        const { loggedUser } = this.props;
        return (
            // Provide the different router for navigation
            <BrowserRouter>
                <Switch>
                    <Route  exact path="/" component={LoginContainer} />
                    <PrivateRoute exact path='/home' component={MainApp} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppView;