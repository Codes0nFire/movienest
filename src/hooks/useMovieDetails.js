import { useDispatch } from "react-redux";
import { addmovieDetail } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";


const useMovieDetails=(id)=>{
    // this will fetch the details using movie id


    const dispatch=useDispatch();
     
     //fetch the movie data using its id
     const getmovieDetails=async ()=>{
    
        const blob=await fetch(`https://api.themoviedb.org/3/movie/${id}`,options)
        const data=await blob.json()
        
        // save the data in store
        
        dispatch(addmovieDetail(data));

        
    
     }
    
    
     useEffect(()=>{getmovieDetails()},[])
    
    
    
}


export default useMovieDetails;