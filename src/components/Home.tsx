import React from 'react'
import {useState, useEffect} from 'react'
import {MovieType, CategoryType} from '../models/models'
import {getAll} from '../api/movies'
import { getAllCategories } from '../api/category'


export const Home = () => {
    const [movies, setMovies] = useState<MovieType[]>([])
    const [categories, setCategories] = useState<CategoryType[]>([])
    console.log(movies)
    const getMovies = async () => {
        const data = await getAll() 
        setMovies(data)
    }  
    const getCategories = async () => {
        const genre = await getAllCategories() 
        setCategories(genre)
    }  

    useEffect(() => {
        getMovies()
        getCategories()
    }, [])
  return (
    <div>Home</div>
  )

}
