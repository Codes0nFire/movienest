import React from 'react'





const SecondaryContent = () => {


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
    <div className="pt-20 px-5 ">
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
  
  </div>
  )
}

export default SecondaryContent
