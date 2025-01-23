import React from "react";


const ShimmerUI = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-gray-800 text-white">
       
        <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

       
        <div className="relative z-10 p-6 lg:p-0 lg:top-[15%]  max-w-4xl mx-auto">
        
          <div className="h-10 w-3/4 bg-gray-600 rounded animate-pulse mb-4"></div>

         
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="h-6 w-32 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-6 w-40 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-6 w-48 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-6 w-28 bg-gray-600 rounded animate-pulse"></div>
          </div>

         
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
            <div className="h-4 w-5/6 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-600 rounded animate-pulse"></div>
          </div>

         
          <div className="mt-8">
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="min-w-[200px] h-[150px] bg-gray-600 rounded-lg animate-pulse"
                ></div>
              ))}
            </div>
          </div>

         
          <div className="py-10 flex gap-4">
            <div className="h-10 w-32 bg-gray-600 rounded animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ShimmerUI;