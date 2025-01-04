import React, { useRef, useState } from "react";
import { isValid } from "../utils/validate";
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
const Login = () => {

 const [isLogin, setisLogin] = useState(true)
 const [errorMessage, seterrorMessage] = useState(null)
 const email=useRef();
 const password=useRef();
 const name=useRef();
 const navigate=useNavigate();
 const dispatch=useDispatch();
 
 

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
    
    // Update the user

updateProfile(auth.currentUser, {
  displayName: name.current.value, photoURL: "https://t3.ftcdn.net/jpg/06/28/49/84/360_F_628498402_LIIyNOYvFGuEsdHxEf9bO4ZbnWpgFyfp.jpg"
}).then(() => {
  // Profile updated!
  const{uid,displayName,email,photoURL}=auth.currentUser
  dispatch(addUser({uid,email,displayName,photoURL}));
  // console.log("Succesfully signUp")
  // navigate("/browse");

}).catch((error) => {
  // An error occurred
  // ...
});
     
    
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
    // console.log("Sign In complete")
    // navigate("/browse")
    
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
   <>
   {<Header/>}
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
              ref={name}
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
   </>
  );
};

export default Login;
