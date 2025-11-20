import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import Filter from "./components/Filter";
import './App.css';
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A skilled thief enters people’s dreams to steal their secrets.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "A team of explorers travels through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SL1024_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: 3 ,
      title: "Hitman",
      description: "Hitman est une série de jeux vidéo d'infiltration à la troisième personne créée en 2000 par IO Interactive, et notamment par Morten Iversen, mettant en scène le tueur à gages 47.",
      posterURL: "https://m.media-amazon.com/images/I/815doWMCWHL.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/QpupjEg16Ao?si=P-wb6P4SuA9umVWO"
    }
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🎥 Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;