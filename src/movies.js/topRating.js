import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home } from '../Data/Home';

function TopRating() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const sortedMovies = [...Home].sort((a, b) => b.Rating - a.Rating);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = sortedMovies.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(sortedMovies.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-600 p-4 flex flex-col items-center  justify-center">
      <div className="homemov flex flex-wrap gap-6 justify-center">
        {currentMovies.map((movie) => (
          <Link to={`/top/${movie.title}`}  className="movie-card bg-gray-700 p-4 rounded-lg flex flex-col items-center text-white" >
            <img src={movie.Image} alt={movie.title}className="rounded-md w-64 h-64 object-Fullcover" />
            <h3 className="mt-2 text-xl font-semibold">{movie.title}</h3>
            <p className="mt-1">Rating: {movie.Rating}</p>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 gap-2">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}disabled={currentPage === 1}className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500" > Previous  </button>
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500" > Next</button>
      </div>
    </div>
  );
}

export default TopRating;
