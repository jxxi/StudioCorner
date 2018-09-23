import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';

class Login extends Component {

  handleSignup(object)
  {
   return {
     username: 'johndoe',
     password: '1234%##D',
     passwordConfirmation: '1234%##D'
   };
  };

  handleLogin(object)
  {
    return {
      username: 'johndoe',
      password: '1234%##D'
    };
  };

  handleRecoverPassword(object)
  {
    return {
      username: 'johndoe'
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
        <div>
            <ReactSignupLoginComponent
                title="My awesome company"
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
                styles={{
                      mainWrapper: { background: 'transparent', textAlign: 'center', opacity: '.98', fontFamily: 'Lato, sans-serif'},
                      mainTitle: {  },
                      flipper: { transition: '0.1s' },
                      signup: {
                        input: {  },
                        recoverPassword: {},
                        button: { border: '2px solid #7CD6CE', background: 'transparent' },
                      },
                      login: {
                        wrapper: { background: 'transparent' },
                        inputWrapper: {  },
                        input: {  },
                        recoverPasswordWrapper: {  },
                        recoverPasswordButton: {  },
                        button: { border: '2px solid #7CD6CE', background: 'transparent' },
                      },
                      recoverPassword: {
                        wrapper: { background: 'transparent' },
                        inputWrapper: {  },
                        input: {  },
                        button: { border: '2px solid #7CD6CE', background: 'transparent' },
                      },
                    }}
            />
        </div>
    );
  }
};

export default Login
