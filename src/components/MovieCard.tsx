import React from 'react'
import { MovieType } from '../models/models'

type MovieCardProps = {
    film: MovieType
}

export const MovieCard = ({film}:MovieCardProps) => {
  return (
    <div className='content'>
        <div className="w-52 bg-white shadow rounded h-96 text-center">
            <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt=""   className='w-full rounded-t-lg'/>
            <p  className="text-1xl font-bold">{film.title}</p>
            <p className="description">{film.release_date}</p>
        </div>
    </div>
  )
}
