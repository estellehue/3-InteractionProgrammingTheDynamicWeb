import React from 'react';

const LoginView = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username: </label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button className="loginBtn" onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>

                        </>
                    ) : (
                            <>
                                <button className="loginBtn" onClick={handleSignUp}>Sign up</button>
                                <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span></p>
                            </>
                        )}
                </div>
            </div>
        </section>
    )

}
export default LoginView;