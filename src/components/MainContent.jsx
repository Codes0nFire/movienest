import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usetrailer from '../hooks/usetrailer';

const MainContent = ({ data }) => {
  const dispatch = useDispatch();
  const settrailerKey = useSelector(store => store.movies.trailerKey);

  const { id, original_title, overview } = data;



 
/*         */











  

  usetrailer(id);

  return (
    <div className="relative w-full h-screen overflow-hidden  ">
     
     <iframe
  className=" aspect-video h-full w-full "
  src={`https://www.youtube.com/embed/${settrailerKey}?autoplay=1&mute=1&loop=1&playlist=${settrailerKey}&rel=0&showinfo=0&modestbranding=1`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>


      {/* Solid Dark Overlay */}
      <div className="absolute w-full h-full bg-gradient-to-r from-black top-0">
        {/* Title and Overview positioned on top of the video */}
        <div className="absolute bottom-[0vh] lg:top-1/2 left-0 w-full lg:w-[40%] px-5 lg:px-20 transform -translate-y-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">{original_title}</h1>
          <p className="text-sm lg:text-base text-white mb-6">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
