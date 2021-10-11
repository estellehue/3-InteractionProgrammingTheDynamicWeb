import React, {useEffect} from 'react';
import LoginView from '../view/LoginView';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    const {
      authListener,
      user,
      email,
      setEmail,
      password,
      setPassword,
      handleLogin,
      handleSignUp,
      hasAccount,
      setHasAccount,
      emailError,
      passwordError
    } = props;

    useEffect(() => {
        let isSubscribed = true;
        if(isSubscribed)  authListener();
        return () => isSubscribed = false;
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    
      return (
        <div className="App">
        {user ? (
          <Redirect to={"/home"}/>
        ) : (
            <LoginView
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleLogin={handleLogin}
              handleSignUp={handleSignUp}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              passwordError={passwordError}/>
              )}
        </div>
      );
}
export default Login;