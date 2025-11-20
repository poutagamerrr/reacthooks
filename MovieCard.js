import React from "react";
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <article className="card movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-card-img" />
      <div className="movie-card-body">
        <h2 className="movie-title">{movie.title}</h2>
        <p className="movie-sub">⭐ {movie.rating}/5</p>
      </div>
    </article>
  );
};

export default MovieCard;
