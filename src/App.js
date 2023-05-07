import React from 'react';
import Home from './components/home/home';
import data from './data/db.json';
import TourDetails from './components/tourD/TourD';
import { Routes, Route } from "react-router-dom";
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home DATA={data} />} />
        <Route path='/city/:id' element={<TourDetails DATA={data} />} />
      </Routes>
    </div>
  );
}

export default App;
