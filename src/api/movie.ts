import axios from "axios";
import { DetailsType, MovieType } from "../models/movieModels";

export const getAll = async () => {
  const MOVIE_TITLE = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  return axios
    .get(MOVIE_TITLE)
    .then((response) => response.data.results as MovieType[])
    .catch((err) => console.error(err));
};

export const getMovieById = async (movieId: number) => {
  const MOVIE_BY_ID = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  return axios
    .get(MOVIE_BY_ID)
    .then((response) => response.data as DetailsType)
    .catch((err) => console.error(err));
};

export const filterMoviesByCategory = async (idNum: number) => {
  const FILTER_MOVIE = `
      https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${idNum}&language=en-US&page=1`;
  return axios
    .get(FILTER_MOVIE)
    .then((response) => response.data.results as MovieType[])
    .catch((err) => console.error(err));
};

export const searchMovies = async (valueSearch: string) => {
  const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${valueSearch}`;
  return axios
    .get(SEARCH)
    .then((response) => response.data.results as MovieType[] & DetailsType[])
    .catch((err) => console.error(err));
};
