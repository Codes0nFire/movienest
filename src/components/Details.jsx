import React, { useEffect } from "react";
import { FaStar, FaClock, FaCalendarAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router";
import useMovieDetails from "../hooks/useMovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constant";
import { addmovieImages } from "../utils/moviesSlice";
import useMovieImages from "../hooks/useMovieImages";
import ShimmerUI from "./ShimmerUI";



const Details = () => {

const movie=useSelector(store=>store.movies.movieDetail);
const post=useSelector(store=>store.movies.movieImages);

const posters=post && post.slice(0,15)


//for navigation
const navigate=useNavigate();


// find movie id
 const {id}=useParams()

// fetch movie data
useMovieDetails(id)

// fetch posters images
useMovieImages(id)

 // Render shimmer if data is not loaded
 if (!movie || !posters ) {
    return <ShimmerUI/>;
  }

  return movie && (
   <div>
  
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + movie?.backdrop_path})`,
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

      {/* Content */}
      <div className="relative pt-[15vh] pl-6 pr-6 lg:p-0  z-10 lg:top-[25vh] lg:left-[-25vw] max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">{movie.title || "Title"}</h1>

        {/* Movie Info */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span className="text-lg font-medium">{movie?.vote_average} / 10</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-white" />
            <span className="text-lg font-medium">{movie?.runtime} minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-white" />
            <span className="text-lg font-medium">
              {new Date(movie?.release_date).toDateString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">Genres:</span>
            <span>{movie?.genres[0]?.name}</span>
          </div>
        </div>

        {/* Overview */}
        <div>
         
          <p className="text-base leading-relaxed">{movie.overview}</p>
        </div>

        {/* Additional Images */}
        <div className="mt-8">
          
          <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
            {posters && posters.map((poster, index) => (
              <div
                key={index}
                className="min-w-[200px] h-[150px] rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={"https://image.tmdb.org/t/p/original"+poster.file_path}
                  alt={`Additional Image ${index + 1}`}
                  className="w-full h-full object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 flex gap-4" >
        <button
        onClick={()=>navigate(-1)}
        className={` bg-white text-black   px-4 py-2 hover:scale-90 duration-300 `}
      >
       Go Back
      </button>
      <Link
       to={`/trailer/${id}`}
        className={` bg-white text-black   px-4 py-2 hover:scale-90 duration-300 `}
      >
       Watch Trailer
      </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Details;
