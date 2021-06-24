import React from 'react';
import "materialize-css/dist/css/materialize.min.css";
import { GoogleLogin } from 'react-google-login';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            clientId: '1059238656913-8j96fih0ev4iluqnra85lgfemqq469bf.apps.googleusercontent.com',
            showEmailError:  false,
            showPasswordError:  false,

        }
    }

    /**
     * Handle the email input change
     * @param {*} value 
     */
    handlEmailChange = (value) => {
        this.setState({
            email: value
        })
    }

    /**
     * Handle the password input change
     * @param {*} value 
     */
    handlePasswordChange = (value) => {
        this.setState({
            password: value
        })
    }

    // Redirect to main page if user is logged
    redirectToApp = () => {
        this.props.history.push('/home')
    }

    /**
     * Verify the email and password. if both are correct then redirect to main page
     * @param {*} event 
     */
    handleSubmitEvent = (event) => {
        const { email, password } = this.state;
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex= /[A-Za-z0-9_*-]/;
        const isValidEmail = emailRegex.test(email);
        const isValidPass = passwordRegex.test(password);

        /**
         * It will check the whether email and password are valid
         */
        if( isValidEmail && isValidPass) {
            this.redirectToApp();
        }

        this.setState({
            showEmailError: !isValidEmail,
            showPasswordError: !isValidPass,
        })
    }
    
    /**
     *  Once user is successfulyy logged using google api then redirect to main app
     * @param {*} res 
     */
    onSuccess = (res) => {
        console.log('sucess: ',this.props,  res.Ys);

        const userObj = {};
        userObj.firstName = res.Ys.hU;
        userObj.lastName = res.Ys.dS;
        userObj.fullName = res.Ys.Ve;
        userObj.email = res.Ys.It;
        userObj.image = res.Ys.gJ;

        this.props.addLoggedInUserInfo(userObj)
        this.redirectToApp();
    }

    onFailure = (res) => {
        
    }

    render() {
        const { password, email, showEmailError, showPasswordError } = this.state;
        return(
            <div className='login-container'>
               <div className="row">
                    <form className="col s12">
                        <div className="row  black-text text-darken-2">
                            <div className="input-field col s12">
                                <input id="email"  type="text" onChange={(e) => this.handlEmailChange(e.target.value)} />
                                { email === '' && <label for="email">Email</label>}
                            </div>
                            { showEmailError &&  <a><i className='material-icons red-text left'>error</i> Please enter valid email.</a>}
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="text" onChange={(e) => this.handlePasswordChange(e.target.value)} />
                                {password === ''&&  <label for="password" >Password</label>}
                            </div>
                            { showPasswordError &&  <a><i className='material-icons red-text left'>error</i> Please enter valid password. </a>}
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
                                // isSignedIn={true}
                            />
                        </div>
                       
                    </form>
               </div>
            </div>
        );
    }
}

export default Login;