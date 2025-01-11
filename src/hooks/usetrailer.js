import { useDispatch, useSelector } from "react-redux";
import { addtrailerKey } from "../utils/moviesSlice";
import { useEffect } from "react";
import { options } from "../utils/constant";


// used this trailer to fetch the trailer and set the key into the store 


const usetrailer=(id)=>{
    const dispatch=useDispatch();
    const trailerkey=useSelector(store=>store.movies?.trailerKey)
    
     // fetch trailer  set key into store as trailerkey
       const getTrailer=async ()=>{
         // call getTariler api
         const blob=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,options)
         
         const data=await blob.json();
         const trailerkey=data.results.filter(v=>v.type=="Trailer")[0].key
         
         dispatch(addtrailerKey(trailerkey));
       }
     
       useEffect(()=>{!trailerkey && getTrailer()},[id])
     
       

       

}




export default usetrailer;