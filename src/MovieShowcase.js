import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(movieObj => {
      return (
        <MovieCard
          movieTitle={movieObj.title}
          movieRating={movieObj.IMDBRating}
          movieGeners={movieObj.genres}
          moviePoster={movieObj.poster}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
