import React, { useContext } from "react";
import MovieItem from "../movieItem/MovieItem";
import { Movie } from "../../types";
import styles from "./MovieList.module.scss";
import { MovieContext } from "../../contexts/MovieContext";

type Props = {
  movies: Movie[];
};

const MoviesList: React.FC<Props> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <div className="listItem" key={movie.id}>
          <MovieItem movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
