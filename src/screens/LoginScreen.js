import React, { useState } from "react";
import VerifyScreen from "./VerifyScreen";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_bkg">
        <img
          className="loginScreen_logo"
          src="/path-to-your-logo.png"
          alt="Logo"
        />
        <button className="loginScreen_btn" onClick={() => window.location.href="/login"}>
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
        
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <div className="loginScreen_input">
          <form>
            <input
              type="email"
              placeholder="Email Address"
            />
            <button
              className="loginScreen_start"
              onClick={() => setSignIn(true)}
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
export default LoginScreen;
