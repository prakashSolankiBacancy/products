import React from 'react';
import { Route, Switch , BrowserRouter}  from 'react-router-dom';
import '../login.scss'
import MainApp from './MainApp';
import LoginContainer from '../Container/LoginContainer';

class AppView extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route  exact path="/" component={LoginContainer} />
                    <Route  exact path="/home" component={MainApp} />
                </Switch>
            </BrowserRouter>
        )
        
    }
}

export default AppView;