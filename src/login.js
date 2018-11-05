import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import { MyStudios } from './MyStudios.js'

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSignup(object)
  {
   return {
     username: 'jasminedoe',
     password: '1234%##D',
     passwordConfirmation: '1234%##D'
   };
  };

  handleLogin(object)
  {
    return {
      username: 'jasminedoe',
      password: '1234%##D'
    };
  };

  handleRecoverPassword(object)
  {
    return {
      username: 'jasminedoe'
    };
  };

  render() {

    const AuthService = {
      isAuthenticated: false,
      authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
      },
      logout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
      }
    }

    const signupWasClickedCallback = (data) => {
      console.log(data);
    };

    const loginWasClickedCallback = (data) => {
      console.log(data);

      AuthService.authenticate("");

      if(AuthService.isAuthenticated)
      {
        this.context.router.history.push("/myStudios");
      }
    };

    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
    };

    return (
        <div className="d-flex justify-content-center" style={{alignItems: 'center', justifyContent: 'center'}}>
            <ReactSignupLoginComponent
                title="Welcome Back"
                handleSignup={signupWasClickedCallback}
                handleLogin={loginWasClickedCallback}
                handleRecoverPassword={recoverPasswordWasClickedCallback}
                usernameCustomLabel="Username"
                passwordCustomLabel="Password"
                passwordConfirmationCustomLabel="Confirm Password"
                recoverPasswordCustomLabel="Forgot Password"
                signupCustomLabel="Signup"
                submitLoginCustomLabel="Login"
                goToLoginCustomLabel="Login"
                submitSignupCustomLabel="Signup"
                goToSignupCustomLabel="Signup"
                submitRecoverPasswordCustomLabel="Recover"
                recoverPasswordTitle="Recover Password"
                styles={{
                      mainWrapper: { background: 'transparent', opacity: '.98', fontFamily: 'Lato, sans-serif', alignItems: 'center', justifyContent: 'center'},
                      mainTitle: {  },
                      flipper: { transition: '0.1s' },
                      signup: {
                        input: {  },
                        recoverPassword: {},
                        button: { border: '2px solid #FFBE2B', background: 'transparent' },
                      },
                      login: {
                        wrapper: { background: 'transparent' },
                        inputWrapper: {  },
                        input: {  },
                        recoverPasswordWrapper: {  },
                        recoverPasswordButton: { border: '2px solid #FFBE2B', background: 'transparent' },
                        button: { border: '2px solid #FFBE2B', background: 'transparent' },
                      },
                      recoverPassword: {
                        wrapper: { background: 'transparent' },
                        inputWrapper: {  },
                        input: {  },
                        button: { border: '2px solid #FFBE2B', background: 'transparent' },
                      },
                    }}
            />
        </div>
    );
  }
};

export default Login
