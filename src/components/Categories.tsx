import React, { useContext } from 'react'
import { useAppContext } from '../context/CategoryContext'
import { CategoryType } from '../models/models'


type CategoriesProps = {
    categories: CategoryType
}

export const Categories = ({categories}: CategoriesProps) => {
    const {getFilmsByCategory} = useAppContext()
  return (
    <div>
        <li onClick= {()=> getFilmsByCategory(categories.id)} className="bg-slate-500 rounded mb-4 h-9 w-28 flex justify-center items-center cursor-pointer" >
            {categories.name}
        </li>
    </div>
  )
}
