import React from "react";
import { Image_URL } from "../utils/constant";
import { Link } from "react-router";

const VideoCard = ({ movie, index }) => {
  if (!movie || !movie.poster_path) return null;

 

  return (
   <Link to={`/details/${movie.id}`} >
   

   <div
      key={index}
      className="flex-shrink-0 w-60 h-80 relative group transition-transform duration-300 hover:scale-95"
    >
      {/* Card Container */}
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg hover:cursor-pointer transition-shadow duration-300">
        {/* Movie Poster */}
        <img
          src={Image_URL + movie.poster_path}
          alt={movie.title}
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
        {/* Movie Details */}
        <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black via-transparent to-transparent">
          <p className="text-lg font-semibold truncate">{movie.title}</p>
        </div>
        {/* Floating Icon */}
        <div className="absolute top-2 right-2 bg-white text-black text-sm font-semibold px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          ★ {movie.vote_average.toFixed(1) || "N/A"}
        </div>
      </div>
    </div>


   
   </Link>
  );
};

export default VideoCard;
