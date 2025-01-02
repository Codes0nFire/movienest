import React, { useRef, useState } from "react";
import { isValid } from "../utils/validate";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {

 const [isLogin, setisLogin] = useState(true)
 const [errorMessage, seterrorMessage] = useState(null)
 const email=useRef();
 const password=useRef();

 const handleClick=()=>{
    const currMessage=isValid(email.current.value,password.current.value)
    seterrorMessage(currMessage);

    if(currMessage)return;

    // if the currMessge is null it means that the user can signUp or SignIn

    if(!isLogin){
        //  signUp

  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("This is signup user :",user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorMessage)
  });



    }
    else{
      // signIn

      signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("This is loggedIn user",user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage("emailId or password is wrong ")
  });



    }
    
 }

 const toggleForm=()=>{
    setisLogin(!isLogin)
 }




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-600">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-center text-blue-800 mb-8">{isLogin ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e)=>e.preventDefault()} >
          <div className="mb-6">
          <div className="mb-8">
            {!isLogin && <><label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full p-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your fullname"
            /> </>}
          </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              className="w-full p-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              ref={password}
              type="password"
              id="password"
              className="w-full p-4 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
            />
             <p className="text-red-500  mt-4" >{errorMessage}</p>
          </div>
         
          <button
            onClick={handleClick}
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
           {isLogin ? " Sign In" : "Sign up"}
          </button>
        </form>
        <p onClick={toggleForm} href="" className="text-blue-400 hover:text-blue-600 hover:underline px-12 py-4 cursor-pointer">
          {isLogin ? "Don't have an account? Sign up now" : "Already have an account? Sign In now"}
          </p>
      </div>
    </div>
  );
};

export default Login;
