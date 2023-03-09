import { useState } from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

export const Nav = () => {
  const { searchFilmsbyName } = useMovieContext();
  const [search, setSearch] = useState<string>("");

  return (
    <div className="nab w-full h-12 bg-slate-500 text-lg font-bold flex justify-between items-center text-white pl-4 pr-4">
      <Link to="/">
        <h1>Films WatchTV</h1>
      </Link>
      <form
        className="input"
        onSubmit={(e) => {
          e.preventDefault();
          searchFilmsbyName(search);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            searchFilmsbyName(e.target.value);
            setSearch(e.target.value);
          }}
          className="text-black"
        />
        <button className="pl-1" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
