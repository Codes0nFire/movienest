import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addpopularMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const usepopularMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    let blob = await fetch(import.meta.env.VITE_POPULARMOVIES_API, options);
    let data = await blob.json();
    // console.log(data.results)
    dispatch(addpopularMovies(data.results));
  };

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default usepopularMovies;
