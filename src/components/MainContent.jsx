import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { options } from '../utils/constant'
import { addtrailerKey } from '../utils/moviesSlice';
import usetrailer from '../hooks/useTrailer';

const MainContent = ({data}) => {
 const dispatch=useDispatch();
 const settrailerKey=useSelector(store=>store.movies.trailerKey)

const{id,original_title,overview}=data
  
usetrailer(id)
  
  

  return (
    <div className="relative w-full h-[80vh]">

<iframe className='object-cover w-full h-full' src={`https://www.youtube.com/embed/${settrailerKey}?si=14WTEuJgyeIFWbSs1`} title="YouTube video player"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        
        {/* <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        /> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-bold mb-4">{original_title}</h1>
          <p className="text-lg mb-6 ">{overview}</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 py-2 px-6 rounded-lg text-white font-semibold">Play</button>
            <button className="bg-gray-700 py-2 px-6 rounded-lg text-white font-semibold">Watch Trailer</button>
          </div>
        </div>
      </div>
  )
}

export default MainContent
