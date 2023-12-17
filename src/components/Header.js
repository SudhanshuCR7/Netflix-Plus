import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constant';
import { toggleGPT } from '../utils/gptSlice';
import { langChange } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    return () => unsubscribe();
  },[])

  const handleIsGptView = () => {
   dispatch(toggleGPT())
  }

  const handleLangChange = (e) => {
    dispatch(langChange(e.target.value))
  }

  const isGPT = useSelector(store => store.gpt.isGPT)

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
       <img 
       className='w-44'
       src={LOGO}
       alt='netflix-logo'/> 
       {user && 
           <>
          
           <div className='p-2 flex'>
           {isGPT &&  <select
           onChange={handleLangChange} 
           className='h-10 mr-4 bg-gray-900 text-white'>
           {SUPPORTED_LANGUAGES.map((lang) => (
              <option 
              key={lang.identifier} 
              value={lang.identifier} 
              >{lang.name}</option>
           ))
           }
           </select> }
          
           

           <div className='mr-4'>
           <button 
             className='text-white p-2 rounded-lg bg-purple-500'
             onClick={handleIsGptView}>
              {isGPT ? 'Homepage' : 'GPT Search'}
             </button>
           </div>

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