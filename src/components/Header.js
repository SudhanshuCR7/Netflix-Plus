import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
       <img 
       className='w-44'
       src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
       alt='netflix-logo'/> 
       {user && 
           <>
           <div className='text-white'>{user.displayName}</div>
           <div className='p-2'>
            <img 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXfE7SB58j4afPD54nAb_PTXPl42LAIYtsg&usqp=CAU' 
            alt='profile-icon'
            className='h-10 w-10'/>
            <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
           </div>
           </>
       }
      
       
      

    </div>
   
  )
}

export default Header