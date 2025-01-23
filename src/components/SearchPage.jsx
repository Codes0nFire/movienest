import React, { useRef } from 'react'

import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchMovies } from '../utils/searchSlice';
import SearchResults from './SearchResults';

const SearchPage = () => {
 const darkmode=useSelector(store=>store.theme.darkmode)
 let inputRef=useRef();
 const dispatch=useDispatch();

 const fetchcurrentmovie=async (movie)=>{
     
    const blob =await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`, options)

    const data=await blob.json();

    return data.results[0]

 }
 

 const onClickHandler=async ()=>{
    const SL=import.meta.env.VITE_SL
    const SR=import.meta.env.VITE_SR
    const currentInput=inputRef.current.value
    const apiKey = import.meta.env.VITE_GMI_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const query=SL+currentInput+"movies"+SR
    const result = await model.generateContent(query);
    const responseText = await result.response.text();
   
    // Array of results 
    const responseArray=responseText.split(",")
    // now fetch movies for each one of them from tmdb
    // this is an array of pending promises 
    const pendingArray=responseArray.map(movie=>fetchcurrentmovie(movie))
    // resolve the pending promises
    const movies = await Promise.all(pendingArray);

    // set these movies in our store 
    dispatch(addSearchMovies(movies));
    
 }



  return (
 <div className={`pt-[20vh] lg:pt-[10%]  h-screen w-full ${darkmode ? "bg-black text-white" : "bg-white text-black"}`}>
<div className='flex  gap-2 flex-col lg:flex-row justify-center items-center' >
   <img 
    className='w-12 h-12 rounded-full'
    src="https://i.pinimg.com/736x/4e/77/a8/4e77a8c2b74b4ced590341f6ee62f9e5.jpg" alt="" />
<form className='  items-center    w-full lg:w-auto  flex flex-col lg:flex-row gap-2' onSubmit={(e)=>e.preventDefault()} >
    <input type="text" placeholder='what kind of movies would you love to watch? ' 
    ref={inputRef}
    className={` w-[100vw] lg:w-[40vw] p-3  lg:px-4 outline-none rounded-md  ${darkmode ? "bg-white text-black border-black" : "bg-black text-white border-white"}`} />
    <button 
      className={` w-[20vw] lg:w-auto  py-3 px-4 rounded-md ${darkmode ? "bg-white text-black border-black" : "bg-black text-white border-white"}`} 
    onClick={onClickHandler}
     >Search </button>
</form>
</div>


<SearchResults/>
 
 </div>
  )
}

export default SearchPage
