import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homemov from './movies.js/Homemov';
import TopRating from './movies.js/topRating';
import Upmov from './movies.js/Upmov';
import Pspk from './Dynamic/Pspk'; 
import Top from './Dynamic/Top';
import Upc from './Dynamic/Upc';  

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/React-movie" element={<Homemov />} />
        <Route path='/home/:title' element={<Pspk />} /> 
        <Route path='/top/:title' element={<Top />} />  
        <Route path='/top' element={<TopRating />} />
        <Route path='/up' element={<Upmov />} />
        <Route path='/upco/:title' element={<Upc />} /> 
      </Routes>
    </Router>
  );
}

export default App;
