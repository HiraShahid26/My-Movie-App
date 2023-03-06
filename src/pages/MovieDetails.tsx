import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../api/movie";
import { DetailsType } from "../models/movieModels";

export const MovieDetails = () => {
  let { id } = useParams();
  let idNum = Number(id);
  const [moviesById, setMoviesById] = useState<DetailsType | null>(null);

  const getMoviesById = async (id: number) => {
    const movieInfo = await getMovieById(id);
    setMoviesById(movieInfo ?? null);
  };

  useEffect(() => {
    getMoviesById(idNum);
  }, []);

  if (moviesById === null) {
    return null;
  }
  
  return (
    <div className="w-screen bg-slate-900 h-screen pt-10">
      <div className="w-11/12 flex justify-around items-center bg-slate-100 m-auto h-5/6 pl-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${moviesById.poster_path}`}
          alt=""
          className="w-56 h-96"
        />
        <div className="pl-6">
          <h1 className="bold text-4xl">{moviesById.title}</h1>
          <p>{moviesById.popularity}</p>
          <p>{moviesById.overview}</p>
        </div>
      </div>
    </div>
  );
};
