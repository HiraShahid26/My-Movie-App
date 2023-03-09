import axios from "axios";
import { CategoryType } from "../models/categoryModel";

export const getAllCategories = async () => {
  const GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  return axios
    .get(GENRE)
    .then((response) => response.data.genres as CategoryType[])
    .catch((err) => console.error(err));
};
