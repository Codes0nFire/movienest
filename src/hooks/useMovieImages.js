import { useDispatch } from "react-redux"
import { options } from "../utils/constant"
import { addmovieImages } from "../utils/moviesSlice"
import { useEffect } from "react"


const useMovieImages=(id)=>{
   
    // fetch movie images posters 

    // fetch movie images by id 
    const dispatch=useDispatch()
    const getImages=async()=>{
        const blob= await fetch(`https://api.themoviedb.org/3/movie/${id}/images`,options)
        const data=await blob.json()
       
        // store the data in store
        dispatch(addmovieImages(data.posters))
    }
    
    useEffect(()=>{getImages()},[])
    
}


export default useMovieImages;