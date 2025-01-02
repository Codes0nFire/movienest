import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Route, Routes } from 'react-router'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { Provider, useDispatch } from 'react-redux';
import appStore from '../utils/appStore';

const Body = () => {


  return (
    
    
     <> </>
    
   
  )
}

export default Body
