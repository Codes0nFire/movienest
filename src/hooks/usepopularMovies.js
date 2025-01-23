import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addpopularMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const usepopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies=useSelector(store=>store.movies.popularMovies)
  

  const nowPlaying = async () => {
    let blob = await fetch(import.meta.env.VITE_POPULARMOVIES_API, options);
    let data = await blob.json();
    dispatch(addpopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovies && nowPlaying();
    
  }, []);
};

export default usepopularMovies;
