import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../Context/LoggedUserContext';
import { Email, Password } from '../Utils/StringConstant';
import { isValidEmail, isValidPassword } from '../Utils/ValidationRegex';

class Login extends React.Component {
    static contextType = AuthContext; 
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            clientId: '1059238656913-8j96fih0ev4iluqnra85lgfemqq469bf.apps.googleusercontent.com',
            showEmailError:  false,
            showPasswordError:  false,
        };
    }

    /**
     * Handle the email input change
     * @param {*} value 
     */
    handleEmailChange = (value) => {
        this.setState({
            email: value
        });
    };

    /**
     * Handle the password input change
     * @param {*} value 
     */
    handlePasswordChange = (value) => {
        this.setState({
            password: value
        });
    };

    // Redirect to main page if user is logged
    redirectToApp = () => {
        this.props.history.push('/home');
    };

    /**
     * Verify the email and password. if both are correct then redirect to main page
     * @param {*} event 
     */
    handleSubmitEvent = () => {
        const { email, password } = this.state;
        const validEmail = isValidEmail(email);
        const validPass = isValidPassword(password);

        /**
         * It will check the whether email and password are valid
         */
        if(validEmail && validPass) {
            this.context.setAuth(true, {email});
            this.redirectToApp();
        }

        this.setState({
            showEmailError: !validEmail,
            showPasswordError: !validPass,
        });
    };
    
    /**
     *  Once user is successfully logged using google api then redirect to main app
     * @param {*} res 
     */
    onSuccess = (res) => {
        const userObj = {};
        userObj.firstName = res.Ys.hU;
        userObj.lastName = res.Ys.dS;
        userObj.fullName = res.Ys.Ve;
        userObj.email = res.Ys.It;
        userObj.image = res.Ys.gJ;

        // this.props.addLoggedInUserInfo(userObj);
        this.context.setAuth(true, userObj);
        this.redirectToApp();
    };

    onFailure = () => {
        this.setState({
            showPasswordError: true,
            showEmailError: true,
        });
    };

    render() {
        const { password, email, showEmailError, showPasswordError } = this.state;
        return(
            <div className='login-container'>
               <div className="row">
                    <form className="col s12">
                        <div className="row  black-text text-darken-2">
                            <div className="input-field col s12">
                                <input id="email" type="text" onChange={(e) => this.handleEmailChange(e.target.value)} />
                                { email === '' && <label htmlFor="email">{Email}</label>}
                            </div>
                            { showEmailError && <a><i className='material-icons red-text left'>error</i> Please enter valid email.</a>}
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="text" onChange={(e) => this.handlePasswordChange(e.target.value)} />
                                {password === '' && <label htmlFor="password">{Password}</label>}
                            </div>
                            { showPasswordError && <a><i className='material-icons red-text left'>error</i> Please enter valid password. </a>}
                        </div>
                        
                        <div className='login-btn'>
                        <a className='btn btn-medium #64b5f6 blue lighten-2 black-text' onClick={this.handleSubmitEvent}>Login</a>
                            <GoogleLogin
                                clientId={this.state.clientId}
                                buttonText="Login"
                                onSuccess={this.onSuccess}
                                onFailure={this.onFailure}
                                cookiePolicy={'single_host_origin'}
                                style={{ marginTop: '100px' }}
                            />
                        </div>
                       
                    </form>
               </div>
            </div>
        );
    }
}

export default Login;