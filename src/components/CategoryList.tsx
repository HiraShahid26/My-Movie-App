import React from "react";
import { useMovieContext } from "../context/MovieContext";
import { CategoryType } from "../models/categoryModel";
import { Categories } from "./Categories";

export const CategoryList = () => {
  const { categories } = useMovieContext();
  return (
    <div className="bg-slate-900">
      <ul className="bg-slate-900 text-white w-56 flex flex-col justify-items-center items-center mt-5">
        {categories.map((category: CategoryType) => (
          <Categories categories={category} key={category.id} />
        ))}
      </ul>
    </div>
  );
};
