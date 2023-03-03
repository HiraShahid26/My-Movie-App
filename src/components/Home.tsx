import React from 'react'
import {useState, useEffect} from 'react'
import {MovieType, CategoryType} from '../models/models'
import {getAll} from '../api/movies'
import { getAllCategories } from '../api/category'
import { MoviesList } from './MoviesList'
import { CategoryList } from './CategoryList'
import { useAppContext } from '../context/CategoryContext'


export const Home = () => {
    // const [movies, setMovies] = useState<MovieType[]>([])
    const [categories, setCategories] = useState<CategoryType[]>([])
    const {movies}= useAppContext()
    
    
    const getCategories = async () => {
        const genre = await getAllCategories() 
        setCategories(genre)
    }  

    useEffect(() => {
        getCategories()
    }, [])
  return (
    <div>
        <div className="flex w-screen">
        <CategoryList categories={categories}/>
        <MoviesList films={movies} details={[]} />
        </div>
    </div>
  )

}
