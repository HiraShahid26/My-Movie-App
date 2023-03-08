import React from "react";
import { MovieType } from "../models/movieModels";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { useMovieContext } from "../context/MovieContext";

export const MoviesList = () => {
  const { movies, search } = useMovieContext();

  return (
    <div className="container-films bg-slate-100 w-full grid grid-cols-4 justify-items-center gap-5 pt-5">
      {movies
        .filter((movie) =>
          movie.title.toLowerCase().startsWith(search.toLowerCase())
        )
        .map((film: MovieType) => (
          <Link to={{ pathname: `/movie-details/${film.id}` }}>
            <MovieCard film={film} key={film.id} />
          </Link>
        ))}
    </div>
  );
};
