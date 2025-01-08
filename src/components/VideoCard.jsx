import React from "react";
import { Image_URL } from "../utils/constant";

const VideoCard = ({ movie, index }) => {
  return (
    <div
      key={index}
      className="flex-shrink-0 w-60 h-72 relative"
    >
      {/* Red overlay div */}
     

      {/* Blue main card */}
      <div className="bg-blue-600 cursor-pointer w-full h-full transition-transform duration-300 hover:scale-90 hover:cursor-pointer">
        {/* Uncomment to show movie poster */}
        <img
          src={Image_URL + movie.poster_path}
          alt={movie.title}
          className="object-cover w-full h-full rounded-md"
        />
        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black via-transparent to-transparent">
          <p className="text-white font-semibold">{movie.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
