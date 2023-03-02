import axios, { AxiosResponse } from 'axios';
import { DetailsType } from '../models/models';

export const getMovieById = async (movieId: number) => {
    const MOVIE_BY_ID = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    return axios.get(MOVIE_BY_ID).then(response =>  response.data as DetailsType)
}