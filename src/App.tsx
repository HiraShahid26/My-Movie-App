import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MovieDetails";
import { MovieContextProvider } from "./context/MovieContext";
import { Nav } from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
      </MovieContextProvider>
    </BrowserRouter>
  );
}

export default App;
