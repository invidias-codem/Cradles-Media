import React from "react";
import "./VerifyScreen.css";
import { useState, useEffect } from "react";

function VerifyScreen() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    // Add your verification logic here
    console.log('Verifying:', email, verificationCode);
  };

  return (
    <div className={`verifyScreen ${isVisible ? 'visible' : ''}`}>
      <h1>User Verification</h1>
      <h2>Please enter your details to verify your account</h2>
      <form onSubmit={handleVerify}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Verification Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        />
        <button type="submit" className="verifyScreen_start">Verify</button>
      </form>
      <div className="rotating-diamond"></div>
    </div>
  );
}

export default VerifyScreen;