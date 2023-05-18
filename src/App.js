import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=36e3322c";

// const movie1 = {
//   Title: "Spiderman the Verse",
//   Year: "2019–",
//   imdbID: "tt12122034",
//   Type: "series",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setmovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState('');

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setmovies(data.Search);
  };

  useEffect(() => {
    searchmovies("iron man");
  }, []);

  return (
    <div className="app">
      <h1>CineCraze</h1>

      <div className="search">
        <input
          placeholder="search for movies "
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        />
        <img src={searchIcon} alt="search" onClick={() => searchmovies(searchTerm)} />
      </div>

      {movies && movies.length > 0 ? (
        <div className="container">
          {movies.map((Element) => {
            return <MovieCard movie1={Element} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h1>no movies found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
