import React from "react";
import MovieItem from "./MovieItem";
import { Movie } from "../types";

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="list" style={{ display: "flex", justifyContent: "center" }}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
