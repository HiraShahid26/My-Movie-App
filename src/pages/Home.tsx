import React from "react";
import { useState, useEffect } from "react";
import { getAllCategories } from "../api/category";
import { MoviesList } from "../components/MoviesList";
import { CategoryList } from "../components/CategoryList";
import { useMovieContext } from "../context/MovieContext";
import { CategoryType } from "../models/categoryModel";

export const Home = () => {
  return (
    <div>
      <div className="flex w-screen">
        <CategoryList />
        <MoviesList />
      </div>
    </div>
  );
};
