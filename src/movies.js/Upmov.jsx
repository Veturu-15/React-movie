import React from 'react';
import { Link } from 'react-router-dom';  
import { Upcoming } from '../Data/Upcoming';

function Upmov() {
  return (
    <div className="min-h-screen bg-gray-600 p-4">
      <div className="homemov flex flex-wrap gap-6 justify-center">
        {Upcoming.map((movie) => (
          <Link 
            to={`/upco/${movie.title}`}  
            key={movie.id}
            className="movie-card bg-gray-700 p-4 rounded-lg flex flex-col items-center text-white"
          >
            <img 
              src={movie.Image} 
              alt={movie.title} 
              className="rounded-md w-64 h-64 object-Fullcover" 
            />
            <h3 className="mt-2 text-xl font-semibold">{movie.title}</h3>
            <p className="mt-1">Rating: {movie.Rating}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Upmov;
