import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlaying';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import { useSelector } from 'react-redux';


const Browse = () => {
  
  // get nowPlaying Movies data and save into store
 useNowPlayingMovies();

  const movies=useSelector(store=>store.movies?.nowPlayingMovies)

  if(!movies)return ;
 
  const idx=Math.floor(Math.random()*movies.length)
  
  const {id,
     original_title,
     overview,
  }=movies[idx]




  return (
    <div className="min-h-screen bg-gradient-to-b  bg-black text-white ">
      {/* Header */}
        <Header/>
      {/* Main */}
        <MainContent data={{id,original_title,overview}}/>
      {/* Secondary */}
        <SecondaryContent/>
    
    </div>
  );
};

export default Browse;
