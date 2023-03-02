import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { DetailsType, MovieType } from '../models/models';


export const getAll = async () => {
    const MOVIE_TITLE = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    return axios.get(MOVIE_TITLE).then(response => response.data.results as MovieType[] & DetailsType[])
}