import React, { useState } from "react";
import { movies, actors } from "../mock";
import MovieList from "../components/movieList/MovieList";
import ActorList from "../components/actorList/ActorList";
import { Movie } from "../types";
import MovieDescription from "../components/movieDescription/MovieDescription";
import "./Main.scss";

const Main = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const movieClickHandler = (v: Movie) => {
    setSelectedMovie(v);
  };

  const onClose = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="MainPage">
      <h4>Movies ({movies.length})</h4>
      <MovieList
        movies={movies}
        selectedId={selectedMovie?.id}
        onMovieClick={movieClickHandler}
      />
      <div className="movie_text">
        {selectedMovie && (
          <MovieDescription
            desc={selectedMovie?.description}
            onClose={onClose}
          />
        )}
      </div>
      <h4>Actors ({actors.length})</h4>
      <ActorList actors={actors} />
    </div>
  );
};

export default Main;
