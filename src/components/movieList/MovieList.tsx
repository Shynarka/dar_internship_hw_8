import React from "react";
import MovieItem from "../movieItem/MovieItem";
import { Movie } from "../../types";
import styles from "./MovieList.module.scss";

type Props = {
  movies: Movie[];
  selectedId?: number;
  onMovieClick: (v: Movie) => void;
};

const MoviesList: React.FC<Props> = ({ movies, selectedId, onMovieClick }) => {
  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <div className="listItem" key={movie.id}>
          <MovieItem
            movie={movie}
            isSelected={movie.id === selectedId}
            onItemClick={onMovieClick}
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
