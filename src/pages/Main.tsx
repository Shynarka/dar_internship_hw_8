import React from "react";
import { movies, actors } from "../mock";
import MovieList from "../components/MovieList";
import ActorList from "../components/ActorList";

const Main = () => {
  return (
    <div>
      <h4>Movies ({movies.length})</h4>
      <MovieList movies={movies} />
      <h4>Actors ({actors.length})</h4>
      <ActorList actors={actors} />
    </div>
  );
};

export default Main;
