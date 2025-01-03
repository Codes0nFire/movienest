import React from 'react';
import Header from './Header';

const Browse = () => {
  const movies = [
    { title: 'Stranger Things', image: 'https://picsum.photos/500/750?random=1' },
    { title: 'The Witcher', image: 'https://picsum.photos/500/750?random=2' },
    { title: 'The Crown', image: 'https://picsum.photos/500/750?random=3' },
    { title: 'Money Heist', image: 'https://picsum.photos/500/750?random=4' },
    { title: 'Breaking Bad', image: 'https://picsum.photos/500/750?random=5' },
    { title: 'Narcos', image: 'https://picsum.photos/500/750?random=6' },
    { title: 'Stranger Things', image: 'https://picsum.photos/500/750?random=1' },
    { title: 'The Witcher', image: 'https://picsum.photos/500/750?random=2' },
    { title: 'The Crown', image: 'https://picsum.photos/500/750?random=3' },
    { title: 'Money Heist', image: 'https://picsum.photos/500/750?random=4' },
    { title: 'Breaking Bad', image: 'https://picsum.photos/500/750?random=5' },
    { title: 'Narcos', image: 'https://picsum.photos/500/750?random=6' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b  bg-black text-white">
      {/* Header */}
      <Header/>

      {/* Background Video Section */}
      <div className="relative w-full h-[80vh]">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl font-bold mb-4">Watch Now</h1>
          <p className="text-lg mb-6">Exclusive Netflix Series and Movies</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 py-2 px-6 rounded-lg text-white font-semibold">Play</button>
            <button className="bg-gray-700 py-2 px-6 rounded-lg text-white font-semibold">Watch Trailer</button>
          </div>
        </div>
      </div>

      {/* Movie Cards Section */}
      <main className="pt-20 px-5 ">
        <div>
          <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
          <div className="flex  space-x-4 overflow-x-scroll scrollbar-hide">
            {movies.map((movie, index) => (
              <div key={index} className=" flex-shrink-0 relative w-60 h-72 transition-all duration-300 hover:scale-90 hover:cursor-pointer ">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="object-cover w-full h-full rounded-md"
                />
                <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black via-transparent to-transparent">
                  <p className="text-white font-semibold">{movie.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

   
      
      </main>
    </div>
  );
};

export default Browse;
