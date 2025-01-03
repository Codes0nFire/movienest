import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';

const Header = () => {

const navigate=useNavigate();
const dispatch=useDispatch();
 const onClickHandler=()=>{
// sign out api
  signOut(auth).then(() => {
    // Sign-out successful.
     dispatch(removeUser());
     console.log("signed out")
     navigate("/");
  }).catch((error) => {
    // An error happened.
    console.log("unable to signout")
  });
       
 }


  return (
    <header className="absolute top-0 w-full p-5 flex justify-between items-center z-10">
    <img
      className="h-12"
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Some Logo"
    />
    <button
    onClick={onClickHandler}
     className="text-white bg-blue-700 px-4 py-2 rounded-lg">Sign Out</button>
  </header>
  )
}

export default Header
