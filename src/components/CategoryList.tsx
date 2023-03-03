import React from "react";
import { CategoryType } from "../models/categoryModel";
import { Categories } from "./Categories";

type CategoryProps = {
  categories: CategoryType[];
};

export const CategoryList = ({ categories }: CategoryProps) => {
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
