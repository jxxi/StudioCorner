import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';

class Login extends Component {

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

    const signupWasClickedCallback = (data) => {
      console.log(data);
      alert('Signup callback, see log on the console to see the data.');
    };

    const loginWasClickedCallback = (data) => {
      console.log(data);
      alert('Login callback, see log on the console to see the data.');
    };

    const recoverPasswordWasClickedCallback = (data) => {
      console.log(data);
      alert('Recover password callback, see log on the console to see the data.');
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
