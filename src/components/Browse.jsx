import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlaying';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import { useSelector } from 'react-redux';
import usepopularMovies from '../hooks/usepopularMovies';
import usetopRatedMovies from '../hooks/usetopRatedMovies';
import useupcomingMovies from '../hooks/useupcomingMovies';
import SearchPage from './searchPage';


const Browse = () => {
  
  // get nowPlaying Movies data and save into store
 useNowPlayingMovies();
 usepopularMovies();
 usetopRatedMovies();
 useupcomingMovies();

  const movies=useSelector(store=>store.movies?.nowPlayingMovies)
  const search=useSelector(store=>store.search?.isSearchPage)
 

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
      {search ? <SearchPage/> : <>  <MainContent data={{id,original_title,overview}}/> 
      <SecondaryContent/>    </> }
        
    
    </div>
  );
};

export default Browse;
