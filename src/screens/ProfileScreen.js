import React from 'react'
import './ProfileScreen.css'
import Nav from '../components/Nav'
import { auth } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function ProfileScreen() {
    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img
                    src='https://assets.awwwards.com/awards/avatar/821872/5db70d13142cf578748034.png' alt='avatar icon'
                />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen_plans'>
                        <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen