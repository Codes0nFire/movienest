import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const NowPlayingMovies=()=>{

const dispatch=useDispatch();

  
const nowPlaying=async ()=>{
    let blob=await fetch(import.meta.env.VITE_NOWPLAYINGMOVIES_API,options)
    let data=await blob.json();
    // console.log(data.results)
    dispatch(addNowPlayingMovies(data.results))
}
    


useEffect(()=>{nowPlaying();},[])

}

export default NowPlayingMovies;