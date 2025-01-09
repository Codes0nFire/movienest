import React, { useRef } from 'react'

import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { options } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchMovies } from '../utils/searchSlice';
import SearchResults from './SearchResults';

const SearchPage = () => {
 
 let inputRef=useRef();
 const dispatch=useDispatch();

 const fetchcurrentmovie=async (movie)=>{
     
    const blob =await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`, options)

    const data=await blob.json();

    return data.results[0]

 }
 

 const onClickHandler=async ()=>{
    const currentInput=inputRef.current.value
    const apiKey = import.meta.env.VITE_GMI_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const query="act like movies recommendation system and suggest me only 8 movies seprated by  , and dont write anything else  query=> "+currentInput+"i want the output in this format eg=> House of the Dragon, Game of Thrones , The Lord of the Rings, The Witcher, Vikings"
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
 <div className='bg-black pt-[10%] text-white h-screen w-full'>
<div className='flex justify-center' >
<form onSubmit={(e)=>e.preventDefault()} >
    <input type="text" placeholder='what kind of movies would you love to watch? ' 
    ref={inputRef}
    className='w-[20vw] py-2 px-2 outline-none text-black' />
    <button className='p-2 bg-blue-600 text-white'
    onClick={onClickHandler}
     >Search </button>
</form>
</div>


<SearchResults/>
 
 </div>
  )
}

export default SearchPage
