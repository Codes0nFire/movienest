import React from 'react'
import VideoCard from './VideoCard';



// const movies = [
//     { title: 'Stranger Things', image: 'https://picsum.photos/500/750?random=1' },
//     { title: 'The Witcher', image: 'https://picsum.photos/500/750?random=2' },
//     { title: 'The Crown', image: 'https://picsum.photos/500/750?random=3' },
//     { title: 'Money Heist', image: 'https://picsum.photos/500/750?random=4' },
//     { title: 'Breaking Bad', image: 'https://picsum.photos/500/750?random=5' },
//     { title: 'Narcos', image: 'https://picsum.photos/500/750?random=6' },
//     { title: 'Stranger Things', image: 'https://picsum.photos/500/750?random=1' },
//     { title: 'The Witcher', image: 'https://picsum.photos/500/750?random=2' },
//     { title: 'The Crown', image: 'https://picsum.photos/500/750?random=3' },
//     { title: 'Money Heist', image: 'https://picsum.photos/500/750?random=4' },
//     { title: 'Breaking Bad', image: 'https://picsum.photos/500/750?random=5' },
//     { title: 'Narcos', image: 'https://picsum.photos/500/750?random=6' },
//   ];


const VideoList = ({movies}) => {


  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
      <div className="flex  space-x-4 overflow-x-scroll scrollbar-hide">
        {movies && movies.map((movie, index) => (
          <VideoCard key={index} movie={movie} index={index} />
        ))}
      </div>
    </div>
  )
}

export default VideoList
