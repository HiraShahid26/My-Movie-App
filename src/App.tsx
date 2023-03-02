import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home' ;
import { MovieDetails } from './pages/MovieDetails';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/movie-details/:id" element={<MovieDetails />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
