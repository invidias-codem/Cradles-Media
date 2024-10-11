import './SignupScreen.css'
import React, { useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = getAuth();

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className='signupScreen'>
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <input
          type='email'
          ref={emailRef}
          placeholder='Email'
        />
        <input
          type='password'
          ref={passwordRef}
          placeholder='Password'
        />
        <button type='submit'>Sign In</button>
        <h4 className='signupScreen__gray'>
          New to Cradles Media?{' '}
          <span className='signupScreen__link' onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
