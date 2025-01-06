import React from 'react'
import VideoList from './VideoList';
import { useSelector } from 'react-redux';





const SecondaryContent = () => {

  const movies=useSelector(store=>store.movies)
    
  return (
    <div className="pt-10 px-5 ">
   
    <VideoList movies={movies.nowPlayingMovies} />
    <VideoList movies={movies.topRatedMovies} />
    <VideoList movies={movies.upcomingMovies} />
    <VideoList movies={movies.popularMovies} />
  
  </div>
  )
}

export default SecondaryContent
