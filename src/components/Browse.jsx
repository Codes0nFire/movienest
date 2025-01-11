import React, { useEffect, useState } from 'react';
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
  const darkmode = useSelector(store => store.theme.darkmode);
  const [idx, setidx] = useState(null);
  
  // Fetch movie data from hooks
  useNowPlayingMovies();
  usepopularMovies();
  usetopRatedMovies();
  useupcomingMovies();

  // Retrieve movie data from store
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  const search = useSelector(store => store.search?.isSearchPage);

 

  // Randomly select a movie index when movies are available
  useEffect(() => {
    if (movies && movies.length > 0) {
      setidx(Math.floor(Math.random() * movies.length));
    }
  }, [movies]); 

  // Early return 
  if (!movies || movies.length === 0 || idx === null) return null;

  
  const { id, original_title, overview } = movies[idx];

  return (
    <div className={`min-h-screen bg-gradient-to-b ${darkmode ? "bg-black text-white" : "bg-white text-black"} `}>
      {/* Header */}
      <Header />
      
     
      {search ? 
        <SearchPage /> : 
        <>
          <MainContent data={{ id, original_title, overview }} />
          <SecondaryContent />
        </>
      }
    </div>
  );
};

export default Browse;
