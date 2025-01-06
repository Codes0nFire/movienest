import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addpopularMovies, addtopRatedMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const usetopRatedMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    let blob = await fetch(import.meta.env.VITE_TOPRATEDMOVIES_API, options);
    let data = await blob.json();
    // console.log(data.results)
    dispatch(addtopRatedMovies(data.results));
  };

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default usetopRatedMovies;
