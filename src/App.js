import React, { useState, useEffect } from 'react';
import './App.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { login, logout, selectUser } from './features/userSlice';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import VerifyScreen from './screens/VerifyScreen';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  // Add a loading state while checking authentication
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setIsAuthChecked(true);
    });

    return () => unsubscribe();
  }, [auth]);

  if (!isAuthChecked) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? <HomeScreen /> : <Navigate to="/login" replace />
          }
        />
        <Route 
          path="/login" 
          element={user ? <Navigate to="/" replace /> : <LoginScreen />} 
        />
        <Route 
          path="/verify" 
          element={user && !user.emailVerified ? <VerifyScreen /> : <Navigate to="/" replace />} 
        />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;



