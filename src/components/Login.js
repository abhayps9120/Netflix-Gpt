import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const[isSignin , setisSignin]=useState(true)
  const toggleSignIn = () => {
    setisSignin(!isSignin) //for toggle
  }
  return (
    <div >
      <Header/>
      <div className=" absolute" >
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_small.jpg" alt='logo'/>
      </div>
      <form className='absolute bg-black w-3/12 my-36 mx-auto px-10 right-0 left-0 text-black bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignin ? "Sign In" : "Sign Up"}</h1>
        {!isSignin?
         ( <input type='text' placeholder='Full Name' className='p-2 my-4 w-full rounded-sm bg-gray-700'></input>
        ):0}
        <input type='text' placeholder='Email Address' className='p-2 my-4 w-full rounded-sm bg-gray-700'></input>
        <input type='password' placeholder='Password' className='p-2 my-4 w-full rounded-sm bg-gray-700'></input>
        <button className='p-4 my-4 bg-red-700 w-full text-white'>{isSignin ? "Sign In" : "Sign Up"}</button>
        <p className='text-white py-2 cursor-pointer' onClick={toggleSignIn}> {isSignin ? "New to Netflix ? Sign Up" : "Already register - Sign In"} Now </p>
      </form>
    </div>
  )
}

export default Login