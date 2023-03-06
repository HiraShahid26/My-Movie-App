import React, { useContext, useState, createContext, useEffect } from "react";
import { filterMoviesByCategory, searchMovies } from "../api/movie";
import { getAll } from "../api/movie";
import { MovieType } from "../models/movieModels";

type MovieContextProps = {
  children: React.ReactNode;
};

type MovieContext = {
  getFilmsByCategory: (idNum: number) => void;
  movies: MovieType[];
  search: string
  setSearch: (searchValue: string) => void
  searchFilmsbyName: (searchValue: string) => void
};

const MovieContext = createContext({} as MovieContext);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  return context;
};

export const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState(String);

  const getMovies = async () => {
    const data = await getAll();
    setMovies(data ?? []);
  };

  const getFilmsByCategory = async (idNum: number) => {
    const categories = await filterMoviesByCategory(idNum);
    setMovies(categories ?? []);
  };

  const searchFilmsbyName = async (searchValue: string) => {
    const searchedFilm = await searchMovies(searchValue);
    setMovies(searchedFilm ?? []);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ getFilmsByCategory, movies, search, setSearch, searchFilmsbyName }}>
      {children}
    </MovieContext.Provider>
  );
};
