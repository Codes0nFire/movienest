import React from 'react';
import VideoList from './VideoList';
import { useSelector } from 'react-redux';

const SecondaryContent = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className="pt-10 px-5 lg:px-10">
      <VideoList title="Trending" movies={movies.nowPlayingMovies} />
      <VideoList title="TopRated" movies={movies.topRatedMovies} />
      <VideoList title="Upcoming" movies={movies.upcomingMovies} />
      <VideoList title="Popular" movies={movies.popularMovies} />
    </div>
  );
}

export default SecondaryContent;
