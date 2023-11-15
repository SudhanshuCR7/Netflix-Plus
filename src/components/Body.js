import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {deleteUser, onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter(
    [
      {
        path:'/',
        element:<Login/>
      },
      {
        path:'/browse',
        element:<Browse/>
      }
    ]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
      } else {
        dispatch(deleteUser());
      }
    });
  },[])

  return (
    <>
     <RouterProvider router={appRouter}/>
    </>
   

  )
}

export default Body