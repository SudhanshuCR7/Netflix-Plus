import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const changeForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <>
    <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='background'/>
    </div>
    <form className='absolute bg-black my-36 mx-auto right-0 left-0 w-3/12  text-white p-12 rounded-lg' >
      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
      </h1>
      {!isSignInForm && (<input 
       type='text' 
       placeholder='Full Name' 
       className='p-3 my-4 w-full rounded-lg bg-gray-700'>
       </input>)}
      <input 
       type='text' 
       placeholder='Email' 
       className='p-3 my-4 w-full rounded-lg bg-gray-700'></input>
      <input 
       type='text' 
       placeholder='Password' 
       className='p-3 my-4 w-full rounded-lg bg-gray-700'></input>
      <button 
       className='p-3 my-6 mt-8 w-full bg-red-700 rounded-lg'>
         {isSignInForm ? 'Sign In' : 'Sign Up'}
      </button> 
      <p 
       className='py-4 cursor-pointer' onClick={changeForm}>
        {isSignInForm ? 'New to Netflix ? Sign Up Now' : 'Already Registered ? Sign In Now'} 
       
       </p>  
    </form>
    </>
    
  )
}

export default Login