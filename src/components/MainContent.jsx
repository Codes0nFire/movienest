import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { options } from '../utils/constant'
import { addtrailerKey } from '../utils/moviesSlice';
import usetrailer from '../hooks/usetrailer';

const MainContent = ({data}) => {
 const dispatch=useDispatch();
 const settrailerKey=useSelector(store=>store.movies.trailerKey)

const{id,original_title,overview}=data
  

  usetrailer(id);

  
  

  return (
    <div className="relative w-full aspect-video">

<iframe
  className="object-cover w-full h-full bg-gradient-to-r from-black"
  src={`https://www.youtube.com/embed/${settrailerKey}?autoplay=0&mute=1&loop=1&si=14WTEuJgyeIFWbSs1`} 
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>


        
 
       <div className='absolute w-full aspect-video bg-gradient-to-r from-black top-0' >
       <div className=" relative top-1/2 left-[0%]  text-center w-[30%] px-20  ">
          <h1 className="text-5xl font-bold mb-4 text-left text-white ">{original_title}</h1>
          <p className="text-sm text-left mb-6   text-white ">{overview}</p>
      
        </div>
       </div>
      </div>
  )
}

export default MainContent
