import React from 'react';
import { useParams } from 'react-router-dom';
import { Home } from '../Data/Home'; 

function Top() {
  const { title } = useParams();  
  const movie = Home.find((e) => e.title === decodeURIComponent(title)); 

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        {movie ? (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src={movie.Image}  
                alt={movie.title} 
                className="h-48 rounded-lg object-cover mb-4"
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
                className="h-96 w-full rounded-lg object-cover"
              />
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-4 justify-start mt-6">
              <div className="flex flex-col items-center">
                <img 
                  src={movie.heroimg} 
                  alt={movie.Heroname} 
                  className="w-32 h-32 object-cover  mb-2"
                />
                <p className="text-lg font-semibold">{movie.Heroname}</p>
                <p className="text-sm">{movie.herocharaname}</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={movie.heronieimg} 
                  alt={movie.Heroninename} 
                  className="w-32 h-32 object-cover  mb-2"
                />
                <p className="text-lg font-semibold">{movie.Heroninename}</p>
                <p className="text-sm">{movie.heroninechar}</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={movie.charimg} 
                  alt={movie.charaname} 
                  className="w-32 h-32 object-cover  mb-2"
                />
                <p className="text-lg font-semibold">{movie.charaname}</p>
                <p className="text-sm">{movie.chara}</p>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src={movie.chari} 
                  alt={movie.charaname1} 
                  className="w-32 h-32 object-cover  mb-2"
                />
                <p className="text-lg font-semibold">{movie.charaname1}</p>
                <p className="text-sm">{movie.charan}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-xl font-semibold">Movie not found.</p>
        )}
      </div>
    </div>
  );
}

export default Top;
