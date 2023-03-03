import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home' ;
import { MovieDetails } from './pages/MovieDetails';
import { CategoryContextProvider } from './context/CategoryContext';
import { Nav } from './components/Nav';



function App() {
  return (
    <CategoryContextProvider>
      <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/movie-details/:id" element={<MovieDetails />}/> 
      </Routes>
      </BrowserRouter>
    </CategoryContextProvider>
    
  );
}

export default App;
