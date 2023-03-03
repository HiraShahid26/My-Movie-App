import React from 'react'
import {MovieType, DetailsType} from '../models/models'
import {Link} from 'react-router-dom'
import { MovieCard } from './MovieCard'

type MovieListProp = {
    films: MovieType[],
    details: DetailsType[]
}

export const MoviesList = ({films, details}:MovieListProp) => {
  return (
    <div className='container-films bg-slate-100 w-full grid grid-cols-4 justify-items-center gap-5 pt-5'>
        {films.map((film: MovieType) => 
            <Link to={{pathname:`/movie-details/${film.id}`}}>
                <MovieCard film={film} key={film.id}/>
            </Link>
        )}
    </div>
  )
}
