import { useMovieContext } from "../context/MovieContext";
import { CategoryType } from "../models/categoryModel";

type CategoriesProps = {
  categories: CategoryType;
};

export const Categories = ({ categories }: CategoriesProps) => {
  const { getFilmsByCategory } = useMovieContext();
  return (
    <div>
      <li
        onClick={() => getFilmsByCategory(categories.id)}
        className="bg-slate-500 rounded mb-4 h-9 w-28 flex justify-center items-center cursor-pointer"
      >
        {categories.name}
      </li>
    </div>
  );
};
