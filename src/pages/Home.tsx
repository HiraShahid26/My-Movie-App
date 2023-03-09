import React from "react";
import { MoviesList } from "../components/MoviesList";
import { CategoryList } from "../components/CategoryList";

export const Home = () => {
  return (
    <div className="flex w-full">
      <CategoryList />
      <MoviesList />
    </div>
  );
};
