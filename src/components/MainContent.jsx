import React from 'react'
import { useSelector } from 'react-redux'

const MainContent = () => {

 const movies=useSelector(store=>store.movies?.nowPlayingMovies)

 if(!movies)return ;

 
 const {id,
    original_title,
    overview,
    title
 }=movies[0]
 
 
  return (
    <div className="relative w-full h-[80vh]">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-bold mb-4">{original_title}</h1>
          <p className="text-lg mb-6 ">{overview.slice(0,200)}</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 py-2 px-6 rounded-lg text-white font-semibold">Play</button>
            <button className="bg-gray-700 py-2 px-6 rounded-lg text-white font-semibold">Watch Trailer</button>
          </div>
        </div>
      </div>
  )
}

export default MainContent
