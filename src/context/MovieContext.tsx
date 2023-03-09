import React, { useContext, useState, createContext, useEffect } from "react";
import { getAllCategories } from "../api/category";
import { filterMoviesByCategory, searchMovies } from "../api/movie";
import { getAll } from "../api/movie";
import { CategoryType } from "../models/categoryModel";
import { MovieType } from "../models/movieModels";

type MovieContextProps = {
  children: React.ReactNode;
};

type MovieContext = {
  movies: MovieType[];
  categories: CategoryType[];
  getFilmsByCategory: (idNum: number) => void;
  searchFilmsbyName: (searchValue: string) => void;
};

const MovieContext = createContext({} as MovieContext);

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  return context;
};

export const MovieContextProvider = ({ children }: MovieContextProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const getMovies = async () => {
    const data = await getAll();
    setMovies(data ?? []);
  };

  const getCategories = async () => {
    const genre = await getAllCategories();
    setCategories(genre ?? []);
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
    getCategories();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        getFilmsByCategory,
        categories,
        movies,
        searchFilmsbyName,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
