import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-sky-700 text-white text-center">
      <div>
        <h1 className="text-6xl font-bold mb-4">Oops! 🤖</h1>
        <p className="text-lg mb-6">
          Something went wrong. Don't worry, even the best of us have glitches!
        </p>
        <img 
          src="https://media.giphy.com/media/JWuBH9rCO2uZpT8tUo/giphy.gif" 
          alt="Funny Error" 
          className="w-64 h-64 mx-auto mb-6"
        />
        <button 
          onClick={() => window.location.href = '/'} 
          className="px-6 py-3 bg-white text-sky-700 rounded-lg hover:bg-gray-200">
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
