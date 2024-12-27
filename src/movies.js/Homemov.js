import React, { useState } from 'react';
import { Home } from '../Data/Home';
import { Link } from 'react-router-dom';

function Homemov() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMovies = Home.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(Home.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center">
      <div className="flex flex-wrap justify-center gap-6">
        {currentMovies.map((movie) => (
          <Link to={`/home/${movie.title}`} >
            <div className="bg-gray-700 p-4 rounded-lg text-white text-center">
              <img src={movie.Image} alt={movie.title} className="rounded-md w-64 h-64 object-Fullcover"/>
              <h3 className="mt-2 text-xl font-semibold">{movie.title}</h3>
              <p className="mt-1">Rating: {movie.Rating}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500"
        >
          Previous
        </button>
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Homemov;