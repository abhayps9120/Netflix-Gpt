import React, { useRef, useState } from 'react'
import validate from '../utils/validate'
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import Header from './Header.js';
import {updateProfile} from "firebase/auth"
import { auth } from "../utils/firebase.js";
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice"
import { Photo } from '../constants/URL.js';


const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();



  const[isSignin , setisSignin]=useState(true)
  const[errmess , seterrmess] = useState(null);

  const toggleSignIn = () => {
    setisSignin(!isSignin)
  }

  const handlebuttonclick = () => {
    //Validate the form data
    
    const mess = validate(email.current.value, password.current.value);
    seterrmess(mess);
    if(mess) return;

    if(!isSignin){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value , 
            photoURL: Photo,
          }).then(() => {
            const {uid , email , displayName , photoURL} = auth.currentUser;
            dispatch(
              addUser({
              uid: uid , 
              email:email , 
              displayName: displayName , 
              photoURL: photoURL,
            })
          )
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrmess(errorCode+"-"+errorMessage)
        });

    }
    else{
      //Signed in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrmess(errorCode+"-"+errorMessage)
  });
    }
  }

  return (
    <div >
      <Header/>
      <div className=" absolute" >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_small.jpg" alt='logo'/>
      </div>
      <form onSubmit={(e)=> e.preventDefault()}className='absolute bg-black w-3/12 my-36 mx-auto px-10 right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignin ? "Sign In" : "Sign Up"}</h1>
        {!isSignin &&
         ( <input ref={name} type='text' placeholder='Full Name' className='p-2 my-4 w-full rounded-sm bg-gray-700'></input>
        )}
        <input ref={email} type='text' placeholder='Email Address' className='p-2 my-4 w-full rounded-sm bg-gray-700'></input>
        <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full rounded-sm bg-gray-700'></input>
        <p className='text-red-500'>{errmess}</p>
        <button className='p-4 my-4 bg-red-700 w-full text-white' onClick={handlebuttonclick}>{isSignin ? "Sign In" : "Sign Up"}</button>
        <p className='text-white py-2 cursor-pointer' onClick={toggleSignIn}> {isSignin ? "New to Netflix ? Sign Up" : "Already register - Sign In"} Now </p>
      </form>
    </div>
  )
}

export default Login