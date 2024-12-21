import React from 'react';
import { useParams } from 'react-router-dom';
import { Upcoming } from '../Data/Upcoming';

function Upc() {
  const { title } = useParams();  
  const movie = Upcoming.find((e) => e.title === decodeURIComponent(title));  

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        {movie ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src={movie.Image}  
                alt={movie.title} 
                className="h-48 rounded-lg object-Fullcover mb-4 md:mb-0"
              />
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              <p className="text-lg">Rating: {movie.Rating}</p>
              <p className="text-lg">{movie.Duration} {movie.type}</p>
              <p className="text-lg">Release Date: {movie.Release || "N/A"}</p>
              <p className="mt-4 text-lg font-semibold">Overview:</p>
              <p className="text-sm">{movie.overview}</p>

            </div>
            <div>
              <img 
                src={movie.image}  
                alt={movie.title} 
                className="h-96 w-full rounded-lg object-Fullcover"
              />
            </div>
          </div>
        ) : (
          <p className="text-center text-xl">Movie not found.</p>
        )}
      </div>
    </div>
  );
}

export default Upc;
