import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import { Provider, useDispatch } from 'react-redux'
import appStore from './utils/appStore'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './components/Login'
import Browse from './components/Browse'
import {  onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from './utils/userSlice'
import { auth } from './utils/firebase'

function App() {

  const dispatch=useDispatch();
  
  // when the state of auth changes 
  
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in
  //     const{uid,displayName,email}=user
     
  //      dispatch(addUser({uid,email,displayName}))
  
  //     // ...
  //   } else {
  //     // User is signed out
  //     dispatch(removeUser());
  //   }
  // });
  
  
 

  return (
    
       <BrowserRouter>
             <Routes>
               <Route path='/' element={<Login/>} />
               <Route path='/browse' element={<Browse/>} /> 
             </Routes>
        </BrowserRouter>
   
  
  )
}

export default App
