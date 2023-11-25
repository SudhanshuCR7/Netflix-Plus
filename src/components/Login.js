import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { validateFormFiedls } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleValidation = () => {
    const message = validateFormFiedls(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (!message) {
      if (!isSignInForm) {
        //sign up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            updateProfile(user, {
              displayName: userName.current.value
            }).then(() => {
              // Profile updated!
              const {uid, email, displayName} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}))
            }).catch((error) => {
              // An error occurred
              // ...
            });
            navigate('/browse')
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            setErrorMessage(errorCode + "" + errorMessage);
          });
      } else {
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            navigate('/browse')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+''+errorMessage)
          });
      }
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black my-36 mx-auto right-0 left-0 w-3/12  text-white p-12 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full rounded-lg bg-gray-700"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-3 my-4 w-full rounded-lg bg-gray-700"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full rounded-lg bg-gray-700"
        ></input>
        <p className="py-2 font-bold text-red-600">{errorMessage}</p>
        <button
          className="p-3 my-6 mt-8 w-full bg-red-700 rounded-lg"
          onClick={handleValidation}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={changeForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </>
  );
};

export default Login;
