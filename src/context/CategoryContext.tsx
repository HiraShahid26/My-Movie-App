import React, { useContext, useState, createContext, useEffect } from 'react'
import { filterMoviesByCategory } from '../api/categoryById'
import { getAll } from '../api/movies'
import { MovieType } from '../models/models'

type AppContextProps = {
    children: React.ReactNode
}

type CategoryContext = {
    categoryId: (movieId: number) => void
    getFilmsByCategory : (idNum: number) => void
    movies: MovieType[]
}

 const CategoryContext = createContext({} as CategoryContext)

export const useAppContext = () => {
    const context = useContext(CategoryContext)
    return (context)
}
export const CategoryContextProvider = ({children}: AppContextProps) => {
    const [idNumber, setIdNumber] = useState(Number)
    const [movies, setMovies] = useState<MovieType[]>([])


    const categoryId = (movieId: number) => {
        setIdNumber(movieId)
    }

    const getMovies = async () => {
        const data = await getAll() 
        setMovies(data)
    }  

    const getFilmsByCategory = async (idNum:number) => {
        const categories = await filterMoviesByCategory(idNum)
        setMovies(categories)
    }
    
    useEffect(() => {
        getMovies()
    },[])

  return (
    <CategoryContext.Provider value={{categoryId, getFilmsByCategory, movies}}>
        {children}
    </CategoryContext.Provider>
  )
}
