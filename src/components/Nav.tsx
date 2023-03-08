import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";

export const Nav = () => {
  const { search, setSearch, searchFilmsbyName } = useMovieContext();

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-black"
        />
        <button className="pl-1" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
