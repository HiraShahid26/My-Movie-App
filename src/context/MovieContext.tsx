import React, { useContext, useState, createContext, useEffect } from "react";
import { filterMoviesByCategory } from "../api/movie";
import { getAll } from "../api/movie";
import { MovieType } from "../models/movieModels";

type MovieContextProps = {
  children: React.ReactNode;
};

type MovieContext = {
  getFilmsByCategory: (idNum: number) => void;
  movies: MovieType[];
};

const MovieContext = createContext({} as MovieContext);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  return context;
};
export const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const data: any = await getAll();
    setMovies(data);
  };

  const getFilmsByCategory = async (idNum: number) => {
    const categories = await filterMoviesByCategory(idNum);
    setMovies(categories as any);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{  getFilmsByCategory, movies }}
    >
      {children}
    </MovieContext.Provider>
  );
};
