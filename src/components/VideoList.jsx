import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({ movies, title }) => {
  return (
    <div className="pb-10">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {movies && movies.map((movie, index) => (
          <VideoCard key={index} movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
