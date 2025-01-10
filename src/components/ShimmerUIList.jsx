import React from 'react'

const ShimmerUIList = () => {
  return (
    <div className='pb-10'> 
      <h2 className="text-3xl font-semibold mb-4"></h2>
      <div className="flex  space-x-4 overflow-x-scroll scrollbar-hide">
        {[0,1,2,3,4,5,6,7,8].map((movie, index) => (

             <div
                  key={index}
                  className=" bg-gray-600 rounded animate-pulse flex-shrink-0 w-60 h-80 relative group transition-transform duration-300 hover:scale-95"
                >
                  {/* Card Container */}
                  <div className=" bg-gray-600 rounded animate-pulse relative w-full h-full  overflow-hidden shadow-lg hover:cursor-pointer transition-shadow duration-300">
                    {/* Movie Poster */}
                    <div
                      
                      
                      className=" bg-gray-600 rounded animate-pulse object-cover w-full h-full"
                    />
                    {/* Overlay */}
                    <div className=" bg-gray-600 rounded animate-pulse absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
                    {/* Movie Details */}
                    <div className=" bg-gray-600 rounded animate-pulse absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black via-transparent to-transparent">
                      <p className=" bg-gray-600 rounded animate-pulse text-lg font-semibold truncate"></p>
                    </div>
                  
                  </div>
                </div>
          
        ))}
      </div>
    </div>
  )
}

export default ShimmerUIList
