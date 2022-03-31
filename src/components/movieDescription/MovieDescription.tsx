import React, { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";

type Props = {};

const MovieDescription: React.FC<Props> = () => {
  const { movie, changeMovie } = useContext(MovieContext);
  const closeHandler = () => {
    changeMovie(null);
  };

  return movie ? (
    <div>
      <h4>{movie.title} Description:</h4>
      <p>{movie.description}</p>
      <button onClick={closeHandler}>Cкрыть</button>
    </div>
  ) : null;
};

export default MovieDescription;
