import React from "react";
import PropTypes from 'prop-types';
import './MovieList.css';
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
