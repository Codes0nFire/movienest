import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const NowPlayingMovies = () => {
  const nowPlayingMovies=useSelector(store=>store.movies?.nowPlayingMovies)
  const dispatch = useDispatch();

  const nowPlaying = async () => {
    let blob = await fetch(import.meta.env.VITE_NOWPLAYINGMOVIES_API, options);
    let data = await blob.json();
    // console.log(data.results)
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && nowPlaying();
  }, []);
};

export default NowPlayingMovies;
