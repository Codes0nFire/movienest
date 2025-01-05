import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlaying';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';


const Browse = () => {
  

// get nowPlaying Movies data and save into store
 useNowPlayingMovies();


  return (
    <div className="min-h-screen bg-gradient-to-b  bg-black text-white ">
      {/* Header */}
        <Header/>
      {/* Main */}
        <MainContent/>
      {/* Secondary */}
        <SecondaryContent/>
    
    </div>
  );
};

export default Browse;
