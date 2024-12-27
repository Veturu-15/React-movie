import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import { Upcoming } from '../Data/Upcoming';

function Upmov() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of movies per page

  // Calculate indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = Upcoming.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total number of pages
  const totalPages = Math.ceil(Upcoming.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-600 p-4 flex flex-col items-center justify-center">
      {/* Movies Section */}
      <div className="homemov flex flex-wrap gap-6 justify-center">
        {currentMovies.map((movie) => (
          <Link 
            to={`/upco/${movie.title}`}  
            key={movie.id}
            className="movie-card bg-gray-700 p-4 rounded-lg flex flex-col items-center text-white"
          >
            <img 
              src={movie.Image} 
              alt={movie.title} 
              className="rounded-md w-64 h-64 object-cover" 
            />
            <h3 className="mt-2 text-xl font-semibold">{movie.title}</h3>
            <p className="mt-1">Rating: {movie.Rating}</p>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 gap-2">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500 disabled:opacity-50"
        >
          Previous
        </button>

        {/* Page Number Display */}
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Upmov;
