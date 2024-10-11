import React, { useState, useEffect } from 'react';
import './App.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { login, logout, selectUser } from './features/userSlice';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
// import VerifyScreen from './screens/VerifyScreen';
import LoadingScreen from './screens/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      setIsAuthChecked(true);
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

  if (!isAuthChecked) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="*" element={<LoginScreen />} />
        ) : (
          <>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;



