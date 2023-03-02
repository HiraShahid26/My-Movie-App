import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { DetailsType, MovieType } from '../models/models';


export const filterMoviesByCategory = async (idNum: number) => {
    const MOVIE_TITLE = `
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${idNum}&language=en-US&page=1`
    console.log(MOVIE_TITLE);
    
    return axios.get(MOVIE_TITLE).then(response => response.data.results as MovieType[] & DetailsType[])
}