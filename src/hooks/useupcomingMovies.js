import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addpopularMovies, addtopRatedMovies, addupcomingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useupcomingMovies = () => {
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    let blob = await fetch(import.meta.env.VITE_UPCOMINGMOVIES_API, options);
    let data = await blob.json();
    // console.log(data.results)
    dispatch(addupcomingMovies(data.results));
  };

  useEffect(() => {
    nowPlaying();
  }, []);
};

export default useupcomingMovies;
