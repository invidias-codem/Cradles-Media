import React, { useEffect, useState, useMemo } from 'react';
import './Nav.css';
import netflixLogo from './netflix-logo.png';

function Nav() {
  const [show, handleShow] = useState(false);

  const TransitionNavBar = useMemo(() => {
    return () => {
      // eslint-disable-next-line
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', TransitionNavBar);
    return () => window.removeEventListener('scroll', TransitionNavBar);
  }, [TransitionNavBar]);

  return (
    <div className={`nav ${show ? 'nav_black' : ''}`}>
        <div className='nav_contents'>
            <img className='netflix_logo' src={netflixLogo} alt='netflix logo'></img>
            <img className='avatar_icon' src='https://assets.awwwards.com/awards/avatar/821872/5db70d13142cf578748034.png' alt='avatar icon'></img>
        </div>
    </div>
  );
}

export default Nav;








